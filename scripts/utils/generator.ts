import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { generatePalette } from "./color";
import { characterPalettes, type PaletteProps } from "./palettes";
import { coreColors, extendedColors, tokenColors } from "./template";

const config = {
  OUTPUT_DIR: "./themes",
  THEME_PREFIX: "Genshin Vibes",
  ALPHA_PRECISION: 2,
};

const removeDuplicateKeys = (obj: Record<string, string>) => {
  const keys = Object.keys(obj);

  return keys.reduce((acc, key) => {
    if (acc[key]) return acc;
    return { ...acc, [key]: obj[key] };
  }, {} as Record<string, string>);
};

const sortKeys = (obj: Record<string, string>) => {
  return removeDuplicateKeys(
    Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {} as Record<string, string>)
  );
};

export const useThemeGenerator = () => {
  function ensureOutDirExists() {
    if (!existsSync(config.OUTPUT_DIR)) {
      mkdirSync(config.OUTPUT_DIR, { recursive: true });
    }
  }

  function generateTheme(palette: Partial<PaletteProps>) {
    const colors = generatePalette(palette as PaletteProps);

    return {
      name: `${config.THEME_PREFIX}: ${palette.name}`,
      type: palette.type,
      colors: sortKeys({ ...coreColors(colors), ...extendedColors(colors) }),
      tokenColors: tokenColors(colors),
    };
  }

  function syncPackageJson() {
    const packageJsonPath = join(process.cwd(), "package.json"),
      packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8")),
      themes: any[] = [];

    for (const [character, variants] of Object.entries(characterPalettes)) {
      for (const [variant, palette] of Object.entries(variants)) {
        themes.push({
          label: `${config.THEME_PREFIX}: ${palette.name}`,
          uiTheme: palette.type === "dark" ? "vs-dark" : "vs",
          path: `./themes/${character}-${variant}.json`,
        });
      }
    }

    packageJson.contributes.themes = themes;
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log(`📝 Updated package.json contribs`);
  }

  function generateAllThemes() {
    const timestamp = new Date().toLocaleTimeString();
    console.log(
      `🌟 [${timestamp}] Generating ${config.THEME_PREFIX} themes...\n`
    );

    let generatedCount = 0;

    for (const [character, variants] of Object.entries(characterPalettes)) {
      for (const [variant, palette] of Object.entries(variants)) {
        try {
          const theme = generateTheme(palette),
            filename = `${character}-${variant}.json`,
            outputPath = join(config.OUTPUT_DIR, filename);

          writeFileSync(outputPath, JSON.stringify(theme, null, 2));
          generatedCount++;

          console.log(`✅ ${palette.name} (${variant})`);
        } catch (error: any) {
          console.error(
            `❌ Error generating ${character}-${variant}:`,
            error.message
          );
        }
      }
    }

    syncPackageJson();

    console.log(
      `\n✨ Complete! Generated ${generatedCount} themes in ${config.OUTPUT_DIR}/`
    );
    return generatedCount;
  }

  return { ensureOutDirExists, generateAllThemes };
};
