import { existsSync, rmSync } from "node:fs";
import { useThemeGenerator } from "./utils/generator";

const { ensureOutDirExists, generateAllThemes } = useThemeGenerator();

if (existsSync(`./themes`)) rmSync(`./themes`, { recursive: true });

ensureOutDirExists();
generateAllThemes();

if (process.env.BUN_WATCH === "1") {
  console.log("\n👀 Watching for changes...");
}
