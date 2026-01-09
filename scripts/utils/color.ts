import type { BasePaletteProps, PaletteProps } from "./palettes";

/**
 * Ensures a hex string is 6 digits by stripping existing alpha if present.
 */
function cleanHex(hex: string): string {
  const clean = hex.startsWith("#") ? hex.slice(1) : hex;

  return clean.length == 8
    ? "#" + clean.slice(0, 6)
    : clean.length == 4
    ? "#" + clean[0] + clean[0] + clean[1] + clean[1] + clean[2] + clean[2]
    : "#" + clean;
}

function alpha(hex: string, opacity: number = 1): string {
  const base = cleanHex(hex),
    alphaHex = Math.round(opacity * 255)
      .toString(16)
      .padStart(2, "0");

  return `${base}${alphaHex}`;
}

export function generatePalette(base: BasePaletteProps) {
  // Use the fixed alpha function
  return {
    ...base,

    // Alpha variants
    primary_alpha: alpha(base.primary, 0.5),
    secondary_alpha: alpha(base.secondary, 0.5),
    tertiary_alpha: alpha(base.tertiary, 0.5),
    accent1_alpha: alpha(base.accent1, 0.5),
    accent2_alpha: alpha(base.accent2, 0.5),
    accent3_alpha: alpha(base.accent3, 0.5),
    error_alpha: alpha(base.error, 0.5),
    warning_alpha: alpha(base.warning, 0.5),
    success_alpha: alpha(base.success, 0.5),
    comment_alpha: alpha(base.fg_comment, 0.5),
    fg_main_fade: alpha(base.fg_main, 0.5),
    bg_secondary_alpha: alpha(base.bg_secondary, 0.5),
    fg_main_alpha: alpha(base.fg_main, 0.8),
    secondary_hover: alpha(base.secondary, 0.9),

    // Subtle backgrounds
    primary_subtle: alpha(base.primary, 0.27),
    error_subtle: alpha(base.error, 0.15),
    warning_subtle: alpha(base.warning, 0.15),
    success_subtle: alpha(base.success, 0.15),

    // UI elements
    border_main:
      base.type === "dark"
        ? alpha(base.primary, 0.3)
        : alpha(base.primary, 0.2),
    border_subtle: alpha(base.fg_dim, 0.2),
    border_muted: alpha(base.fg_dim, 0.4),
    selection_bg: alpha(base.primary, 0.53),
    line_highlight: alpha(base.fg_dim, 0.08),
    indent_guide: alpha(base.fg_dim, 0.4),

    // Input states
    error_input_bg: base.type === "dark" ? "#2a1f1a" : "#fff0e6",
    warning_input_bg: base.type === "dark" ? "#4a3a5c" : "#fff8e8",
    info_input_bg: base.type === "dark" ? "#1a2f38" : "#ebf2ff",

    // inlay hints
    inlay_bg: alpha(base.bg_secondary, 0.5),
    inlay_fg: alpha(base.tertiary, 0.5),
    inlay_param: alpha(base.secondary, 0.5),
    inlay_type: alpha(base.primary, 0.5),

    // List
    list_active_bg: alpha(base.tertiary, 0.4),
    list_focus_bg: alpha(base.tertiary, 0.4),

    // merge
    success_merge: alpha(base.success, 0.27),
    primary_merge: alpha(base.primary, 0.27),

    // scrollbar
    scrollbar_bg: alpha(base.fg_dim, 0.4),
    scrollbar_hover: alpha(base.tertiary, 0.53),

    // Shadows and transparency
    shadow: alpha(base.bg_darkest, 0.3),
    transparent: "#00000000",

    success_bg: alpha(base.success, 0.15),
    error_bg: alpha(base.error, 0.15),

    // ansi
    ansi_bright_black: cleanHex(base.fg_dim),
    ansi_bright_red: cleanHex(base.error),
    ansi_bright_green: cleanHex(base.success),
    ansi_bright_yellow: cleanHex(base.warning),
    ansi_bright_blue: cleanHex(base.primary),
    ansi_bright_magenta: cleanHex(base.secondary),
    ansi_bright_cyan: cleanHex(base.accent3),
    ansi_bright_white: cleanHex(base.fg_main),
  } as PaletteProps;
}
