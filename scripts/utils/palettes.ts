// Base palette properties that are manually defined
export type BasePaletteProps = {
  name: string;
  type: "dark" | "light";
  primary: string;
  secondary: string;
  tertiary: string;
  accent1: string;
  accent2: string;
  accent3: string;

  bg_darkest: string;
  bg_main: string;
  bg_panel: string;
  bg_secondary: string;

  fg_main: string;
  fg_muted: string;
  fg_dim: string;
  fg_comment: string;

  error: string;
  warning: string;
  success: string;
};

// Complete palette including generated properties
export type PaletteProps = BasePaletteProps & {
  error_subtle: string;
  warning_subtle: string;
  success_subtle: string;

  success_merge: string;
  primary_merge: string;
  success_bg: string;
  error_bg: string;

  selection_bg: string;
  selection_inactive: string;
  line_highlight: string;
  indent_guide: string;
  error_input_bg: string;
  warning_input_bg: string;
  info_input_bg: string;
  shadow: string;
  transparent: string;
  primary_subtle: string;
  border_main: string;
  border_subtle: string;
  border_muted: string;
  secondary_hover: string;

  // Alpha variants
  primary_alpha: string;
  secondary_alpha: string;
  tertiary_alpha: string;
  accent1_alpha: string;
  accent2_alpha: string;
  accent3_alpha: string;
  error_alpha: string;
  warning_alpha: string;
  success_alpha: string;
  comment_alpha: string;
  fg_main_alpha: string;
  fg_main_fade: string;
  bg_secondary_alpha: string;

  inlay_bg: string;
  inlay_fg: string;
  inlay_param: string;
  inlay_type: string;

  list_active_bg: string;
  list_focus_bg: string;

  scrollbar_bg: string;
  scrollbar_hover: string;

  ansi_bright_black: string;
  ansi_bright_red: string;
  ansi_bright_green: string;
  ansi_bright_yellow: string;
  ansi_bright_blue: string;
  ansi_bright_magenta: string;
  ansi_bright_cyan: string;
  ansi_bright_white: string;
};

// Character Palette Definitions
export const characterPalettes: Record<
  string,
  Record<string, Partial<PaletteProps>>
> = {
  raiden: {
    dark: {
      name: "Eternal Electro Throne",
      type: "dark",
      primary: "#aa7eee",
      secondary: "#d1a6e2",
      tertiary: "#b08fc2",
      accent1: "#f1a7b4",
      accent2: "#e6c78a",
      accent3: "#7ed3b0",
      bg_darkest: "#120f20",
      bg_main: "#1a1628",
      bg_panel: "#1f1a33",
      bg_secondary: "#221b3a",
      fg_main: "#e8d5f3",
      fg_muted: "#8c7ca1",
      fg_dim: "#443a58ff",
      fg_comment: "#68597dff",
      error: "#f1a7b4",
      warning: "#e6c78a",
      success: "#7ed3b0",
      success_subtle: "#7ed3b044",
      selection_bg: "#5e1a4188",
      line_highlight: "#2c254488",
      indent_guide: "#3a325766",
      error_input_bg: "#2a1f1a",
      warning_input_bg: "#4a3a5c",
      info_input_bg: "#1a2f38",
      shadow: "#120f204d",
      transparent: "#00000000",
      primary_subtle: "#aa7eee44",
      border_main: "#3a1f5f",
      border_subtle: "#3a325733",
      border_muted: "#3a325766",
    },
    light: {
      name: "Violet Eternity Glow",
      type: "light",
      primary: "#5e1a41",
      secondary: "#6333ae",
      tertiary: "#9c4d78",
      accent1: "#b85c6e",
      accent2: "#b08fc2",
      accent3: "#4a9a7d",
      bg_darkest: "#fbf8ff",
      bg_main: "#f7f1fc",
      bg_panel: "#f4f0fa",
      bg_secondary: "#fbf8ff",
      fg_main: "#4a2e6b",
      fg_muted: "#8b72a9",
      fg_dim: "#a88fb9",
      fg_comment: "#b4afb8ff",
      error: "#b85c6e",
      warning: "#9c4d78",
      success: "#4a9a7d",
      success_subtle: "#4a9a7d44",
      selection_bg: "#d1a6e288",
      line_highlight: "#ede5f744",
      indent_guide: "#d1a6e266",
      error_input_bg: "#f9e8eb",
      warning_input_bg: "#fdf4ec",
      info_input_bg: "#ebf2ff",
      shadow: "#f7f1fc4d",
      transparent: "#00000000",
      primary_subtle: "#5e1a4144",
      border_main: "#d1a6e2",
      border_subtle: "#d1a6e233",
      border_muted: "#d1a6e266",
    },
  },

  nahida: {
    dark: {
      name: "Verdant Dreamweave",
      type: "dark",
      primary: "#adff2f",
      secondary: "#b8d9a3",
      tertiary: "#90ee90",
      accent1: "#f0d9b5",
      accent2: "#c8e6c9",
      accent3: "#9ac89a",
      bg_darkest: "#162116",
      bg_main: "#1a231a",
      bg_panel: "#202b20",
      bg_secondary: "#253228",
      fg_main: "#e8f5d8",
      fg_muted: "#9ac89a",
      fg_dim: "#3a4a3aff",
      fg_comment: "#6e916eff",
      error: "#f0d9b5",
      warning: "#e7ff2fff",
      success: "#90ee90",
      success_subtle: "#90ee9044",
      selection_bg: "#6b8e2388",
      line_highlight: "#25322888",
      indent_guide: "#3a4a3a66",
      error_input_bg: "#2a1f1a",
      warning_input_bg: "#3a2f24",
      info_input_bg: "#253228",
      shadow: "#1621164d",
      transparent: "#00000000",
      primary_subtle: "#adff2f44",
      border_main: "#6b8e23",
      border_subtle: "#3a4a3a33",
      border_muted: "#3a4a3a66",
    },
    light: {
      name: "Kusanali Dawnbloom",
      type: "light",
      primary: "#4a6d1a",
      secondary: "#606c38",
      tertiary: "#8c7b4a",
      accent1: "#bc6c25",
      accent2: "#556b2f",
      accent3: "#2d4c3b",
      bg_darkest: "#f0f8e8",
      bg_main: "#faffedff",
      bg_panel: "#f8fbf0",
      bg_secondary: "#f0f8e8",
      fg_main: "#202b20",
      fg_muted: "#4a5a4a",
      fg_dim: "#5c6b5c",
      fg_comment: "#acbbacff",
      error: "#ae2012",
      warning: "#9b7a01",
      success: "#2d6a4f",
      success_subtle: "#2d6a4f44",
      selection_bg: "#b8d9a3aa",
      line_highlight: "#e8f5d866",
      indent_guide: "#b8d9a388",
      error_input_bg: "#fff8e8",
      warning_input_bg: "#f0f8e8",
      info_input_bg: "#e8f5d8",
      shadow: "#f8fbf04d",
      transparent: "#00000000",
      primary_subtle: "#4a6d1a44",
      border_main: "#b8d9a3",
      border_subtle: "#b8d9a333",
      border_muted: "#b8d9a366",
    },
  },

  zhongli: {
    dark: {
      name: "Geo Contract Vault",
      type: "dark",
      primary: "#e8c660",
      secondary: "#e4c060",
      tertiary: "#d4b085",
      accent1: "#b85c40",
      accent2: "#b99c71",
      accent3: "#c8b8a3",
      bg_darkest: "#150f0b",
      bg_main: "#1e1814",
      bg_panel: "#241e19",
      bg_secondary: "#2a231c",
      fg_main: "#e8d9b2",
      fg_muted: "#b99c71",
      fg_dim: "#3b2f2e",
      fg_comment: "#584d3dff",
      error: "#b85c40",
      warning: "#e8c660",
      success: "#d4b085",
      success_subtle: "#e4c06044",
      selection_bg: "#af542788",
      line_highlight: "#2a231c88",
      indent_guide: "#3b2f2e66",
      error_input_bg: "#3a2a20",
      warning_input_bg: "#4a3624",
      info_input_bg: "#2a231c",
      shadow: "#150f0b4d",
      transparent: "#00000000",
      primary_subtle: "#e8c66044",
      border_main: "#af5427",
      border_subtle: "#3b2f2e33",
      border_muted: "#3b2f2e66",
    },
    light: {
      name: "Morax Golden Seal",
      type: "light",
      primary: "#8b4513",
      secondary: "#a0522d",
      tertiary: "#b85c40",
      accent1: "#cd853f",
      accent2: "#daa520",
      accent3: "#b8860b",
      bg_darkest: "#f0e6d0",
      bg_main: "#faf7f0",
      bg_panel: "#faf7f0",
      bg_secondary: "#f0e6d0",
      fg_main: "#2c261f",
      fg_muted: "#6b5a4a",
      fg_dim: "#8b7355",
      fg_comment: "#bbada1ff",
      error: "#8b0000",
      warning: "#cd853f",
      success: "#6b5a4a",
      success_subtle: "#b85c4044",
      selection_bg: "#b99c7188",
      line_highlight: "#f0e8d822",
      indent_guide: "#d1c5b366",
      error_input_bg: "#fff0e6",
      warning_input_bg: "#fff5e6",
      info_input_bg: "#f8f4ec",
      shadow: "#d1c5b32d",
      transparent: "#00000000",
      primary_subtle: "#8b451344",
      border_main: "#b99c71",
      border_subtle: "#b99c7133",
      border_muted: "#b99c7166",
    },
  },

  furina: {
    dark: {
      name: "Hydrocourt Midnight",
      type: "dark",
      primary: "#00bfff",
      secondary: "#87cefa",
      tertiary: "#40e0d0",
      accent1: "#ff69b4",
      accent2: "#9370db",
      accent3: "#add8e6",
      bg_darkest: "#091420",
      bg_main: "#0d1a26",
      bg_panel: "#14273a",
      bg_secondary: "#1a2d40",
      fg_main: "#e8f4ff",
      fg_muted: "#add8e6",
      fg_dim: "#2a3d5a",
      fg_comment: "#4c636bff",
      error: "#ff69b4",
      warning: "#00bfff",
      success: "#40e0d0",
      success_subtle: "#87cefa44",
      selection_bg: "#1e90ff88",
      line_highlight: "#1a2d4088",
      indent_guide: "#2a3d5a66",
      error_input_bg: "#2a1a20",
      warning_input_bg: "#3a2d20",
      info_input_bg: "#1a2d40",
      shadow: "#0914204d",
      transparent: "#00000000",
      primary_subtle: "#00bfff44",
      border_main: "#1e90ff",
      border_subtle: "#2a3d5a33",
      border_muted: "#2a3d5a66",
    },
    light: {
      name: "Fontaine Spotlight",
      type: "light",
      primary: "#1e3a5f",
      secondary: "#1d4ed8",
      tertiary: "#3730a3",
      accent1: "#be123c",
      accent2: "#64748b",
      accent3: "#0ea5e9",
      bg_darkest: "#f0f8ff",
      bg_main: "#eaf3ffff",
      bg_panel: "#eef5ff",
      bg_secondary: "#daeeff",
      fg_main: "#0f172a",
      fg_muted: "#475569",
      fg_dim: "#64748b",
      fg_comment: "#99afcdff",
      error: "#be123c",
      warning: "#ea580c",
      success: "#059669",
      success_subtle: "#0ea5e944",
      selection_bg: "#add8e666",
      line_highlight: "#e8f5ff22",
      indent_guide: "#dbeafe66",
      error_input_bg: "#fef2f2",
      warning_input_bg: "#fef3c7",
      info_input_bg: "#eff6ff",
      shadow: "#3341552d",
      transparent: "#00000000",
      primary_subtle: "#1e3a5f44",
      border_main: "#3730a3",
      border_subtle: "#64748b33",
      border_muted: "#64748b66",
    },
  },

  venti: {
    dark: {
      name: "Stormrider Breeze",
      type: "dark",
      primary: "#48d1cc",
      secondary: "#a3e4d7",
      tertiary: "#76c7ad",
      accent1: "#f0b27a",
      accent2: "#9ad3d8",
      accent3: "#7ab8a9",
      bg_darkest: "#0b191f",
      bg_main: "#0f1f24",
      bg_panel: "#142a32",
      bg_secondary: "#1a2f38",
      fg_main: "#d8f0e8",
      fg_muted: "#7ab8a9",
      fg_dim: "#2a4a4e",
      fg_comment: "#4a6961ff",
      error: "#f0b27a",
      warning: "#48d1cc",
      success: "#76c7ad",
      success_subtle: "#a3e4d744",
      selection_bg: "#2e8b5788",
      line_highlight: "#1a2f3888",
      indent_guide: "#2a4a4e66",
      error_input_bg: "#2a1f1a",
      warning_input_bg: "#3a2f24",
      info_input_bg: "#1a2f38",
      shadow: "#0b191f4d",
      transparent: "#00000000",
      primary_subtle: "#48d1cc44",
      border_main: "#2e8b57",
      border_subtle: "#2a4a4e33",
      border_muted: "#2a4a4e66",
    },
    light: {
      name: "Celestine Bardlight",
      type: "light",
      primary: "#a66d32",
      secondary: "#26834f",
      tertiary: "#00827d",
      accent1: "#a66d32",
      accent2: "#4a8276",
      accent3: "#2d72a6",
      bg_darkest: "#f0f8f7",
      bg_main: "#f8fbfd",
      bg_panel: "#f8fbfd",
      bg_secondary: "#f0f8f7",
      fg_main: "#1a3a38",
      fg_muted: "#4a8276",
      fg_dim: "#76a599",
      fg_comment: "#a6c1baff",
      error: "#bf5530",
      warning: "#a66d32",
      success: "#26834f",
      success_subtle: "#a3e4d744",
      selection_bg: "#a3e4d788",
      line_highlight: "#e8f6f444",
      indent_guide: "#a3e4d766",
      error_input_bg: "#fff0e6",
      warning_input_bg: "#fff8e8",
      info_input_bg: "#e8f6f4",
      shadow: "#f8fbfd4d",
      transparent: "#00000000",
      primary_subtle: "#a66d3244",
      border_main: "#86c5b9",
      border_subtle: "#a3e4d733",
      border_muted: "#a3e4d766",
    },
  },

  mauvika: {
    dark: {
      name: "Lava Glaze Inferno",
      type: "dark",
      primary: "#ff6b35",
      secondary: "#ffb347",
      tertiary: "#ff8c42",
      accent1: "#ff4757",
      accent2: "#d4a574",
      accent3: "#a68a6e",
      bg_darkest: "#0b0806",
      bg_main: "#0f0a08",
      bg_panel: "#13100d",
      bg_secondary: "#17110e",
      fg_main: "#f4d4b2",
      fg_muted: "#a68a6e",
      fg_dim: "#46362dff",
      fg_comment: "#5a5047ff",
      error: "#ff4757",
      warning: "#ff6b35",
      success: "#d4a574",
      success_subtle: "#ffb34744",
      selection_bg: "#8b451388",
      line_highlight: "#1a120f44",
      indent_guide: "#2a1f1888",
      error_input_bg: "#3a1a15",
      warning_input_bg: "#4a2f1e",
      info_input_bg: "#17110e",
      shadow: "#0b08064d",
      transparent: "#00000000",
      primary_subtle: "#ff6b3544",
      border_main: "#8b4513",
      border_subtle: "#2a1f1833",
      border_muted: "#2a1f1866",
    },
    light: {
      name: "Sunforge Ember",
      type: "light",
      primary: "#ff4757",
      secondary: "#b5651d",
      tertiary: "#ff6b35",
      accent1: "#d14d5a",
      accent2: "#a68a6e",
      accent3: "#8b7355",
      bg_darkest: "#fff5e6",
      bg_main: "#fdf8f0",
      bg_panel: "#fdf8f0",
      bg_secondary: "#fff5e6",
      fg_main: "#5c3a1a",
      fg_muted: "#a68a6e",
      fg_dim: "#ffb347",
      fg_comment: "#cfc7bfff",
      error: "#d14d5a",
      warning: "#ff8c42",
      success: "#8b7355",
      success_subtle: "#ffb34744",
      selection_bg: "#ffb34788",
      line_highlight: "#fff2e044",
      indent_guide: "#ffb34766",
      error_input_bg: "#ffe6e9",
      warning_input_bg: "#fff4e6",
      info_input_bg: "#fff2e0",
      shadow: "#fdf8f04d",
      transparent: "#00000000",
      primary_subtle: "#ff475744",
      border_main: "#ffb347",
      border_subtle: "#ffb34733",
      border_muted: "#ffb34766",
    },
  },

  paimon: {
    dark: {
      name: "Emergency Food",
      type: "dark",
      primary: "#ffd700",
      secondary: "#a8d5e2",
      tertiary: "#4a9bb8",
      accent1: "#ff91a4",
      accent2: "#d4b8ff",
      accent3: "#90c8ff",
      bg_darkest: "#0b1218",
      bg_main: "#0f141a",
      bg_panel: "#15222a",
      bg_secondary: "#1a2333",
      fg_main: "#f0f4f8",
      fg_muted: "#8ab4c2",
      fg_dim: "#374d5cff",
      fg_comment: "#526064ff",
      error: "#ff91a4",
      warning: "#ffd700",
      success: "#a8d5e2",
      success_subtle: "#a8d5e244",
      selection_bg: "#4a9bb888",
      line_highlight: "#1a233388",
      indent_guide: "#2a3d4a66",
      error_input_bg: "#2a1a20",
      warning_input_bg: "#3a2d20",
      info_input_bg: "#1a2333",
      shadow: "#0f141a4d",
      transparent: "#00000000",
      primary_subtle: "#ffd70044",
      border_main: "#4a9bb8",
      border_subtle: "#2a3d4a66",
      border_muted: "#2a3d4a99",
    },

    light: {
      name: "Starry Companion",
      type: "light",

      primary: "#b39800",
      secondary: "#6F83E6",
      tertiary: "#378da4",

      accent1: "#5b6bff",
      accent2: "#E6A94C",
      accent3: "#C77DFF",

      bg_darkest: "#F3F6FF",
      bg_main: "#F8FAFF",
      bg_panel: "#EEF2FF",
      bg_secondary: "#E4E9FF",

      fg_main: "#1A2140",
      fg_muted: "#4B5A99",
      fg_dim: "#b8c0dfff",
      fg_comment: "#bcc1daff",

      error: "#D64550",
      warning: "#C89B2C",
      success: "#4E9F5D",
      success_subtle: "#9FD1AD",

      selection_bg: "#DCE4FF",
      line_highlight: "#EFF3FF",
      indent_guide: "#D2DAF5",

      error_input_bg: "#F6DADD",
      warning_input_bg: "#F4EBD1",
      info_input_bg: "#E2E9FF",

      shadow: "rgba(0, 0, 0, 0.12)",
      transparent: "transparent",

      primary_subtle: "#C9D4FF",

      border_main: "#C0CAF0",
      border_subtle: "#D3DAF5",
      border_muted: "#E5E9F8",
    },
  },

  citlali: {
    dark: {
      name: "Frost Ritual",
      type: "dark",
      primary: "#87cefa",
      secondary: "#4682b4",
      tertiary: "#b0e0e6",
      accent1: "#ffd700",
      accent2: "#ff8c42",
      accent3: "#90c8ff",
      bg_darkest: "#0a1520",
      bg_main: "#0f1a26",
      bg_panel: "#14273a",
      bg_secondary: "#1a2d40",
      fg_main: "#e8f4ff",
      fg_muted: "#add8e6",
      fg_dim: "#2a3d5a",
      fg_comment: "#577377",
      error: "#ff6b35",
      warning: "#ffd700",
      success: "#90c8ff",
      success_subtle: "#87cefa44",
      selection_bg: "#4682b488",
      line_highlight: "#1a2d4088",
      indent_guide: "#2a3d5a66",
      error_input_bg: "#2a1a20",
      warning_input_bg: "#3a2d20",
      info_input_bg: "#1a2d40",
      shadow: "#0a15204d",
      transparent: "#00000000",
      primary_subtle: "#87cefa44",
      border_main: "#3a8aa0",
      border_subtle: "#2a3d4a33",
      border_muted: "#2a3d4a66",
    },
    light: {
      name: "Ice Oracle",
      type: "light",
      primary: "#4e74b1",
      secondary: "#1e3a5f",
      tertiary: "#5abed4",
      accent1: "#3FA7FF",
      accent2: "#7B5CDB",
      accent3: "#2FB7AD", // #0052a3 or #2FB7AD
      bg_darkest: "#f1f5f9",
      bg_main: "#f8fafc",
      bg_panel: "#f8fafc",
      bg_secondary: "#f1f5f9",
      fg_main: "#1e3a5f",
      fg_muted: "#475569",
      fg_dim: "#8898af",
      fg_comment: "#a6adb7",
      error: "#c2410c",
      warning: "#f97316",
      success: "#10b981",
      success_subtle: "#5a9bd444",
      selection_bg: "#dbeafe88",
      line_highlight: "#e2e8f022",
      indent_guide: "#bfdbfe66",
      error_input_bg: "#fef7ed",
      warning_input_bg: "#fef3c7",
      info_input_bg: "#eff6ff",
      shadow: "#1e3a5f2d",
      transparent: "#00000000",
      primary_subtle: "#2b4a7c44",
      border_main: "#5a9bd4",
      border_subtle: "#64748b33",
      border_muted: "#64748b66",
    },
  },

  columbina: {
    dark: {
      name: "Veiled Harbinger",
      type: "dark",

      primary: "#C7D3E6", // porcelain blue-white
      secondary: "#d4a5d4", // muted choir blue or #9FAEC8
      tertiary: "#7e8fafff", // cold steel blue #6F7E9A

      accent1: "#B8C9FF", // ethereal glow blue
      accent2: "#E6A3B5", // soft rose (danger, but polite)
      accent3: "#967ab7", // faded violet

      bg_darkest: "#0E1118", // abyssal midnight
      bg_main: "#141925", // main editor bg
      bg_panel: "#1A2030", // panels / sidebar
      bg_secondary: "#20273A", // inputs / dropdowns

      fg_main: "#E6ECF5",
      fg_muted: "#B6C0D4",
      fg_dim: "#3a4355ff",
      fg_comment: "#4f545e",

      error: "#E06C75", // controlled crimson
      warning: "#E5C07B", // muted gold
      success: "#98C379", // soft green
      success_subtle: "#5F7F6A", // faded success

      selection_bg: "#2A3452", // calm, readable selection
      line_highlight: "#1C2233", // current line
      indent_guide: "#2A3044", // subtle structure

      error_input_bg: "#2A1A22",
      warning_input_bg: "#2A2418",
      info_input_bg: "#1B2436",

      shadow: "rgba(0, 0, 0, 0.45)",
      transparent: "transparent",

      primary_subtle: "#3A4663",

      border_main: "#303A55",
      border_subtle: "#262E45",
      border_muted: "#1E2538",
    },

    light: {
      name: "Damselette Whisper",
      type: "light",

      primary: "#4A5C7A",
      secondary: "#906b99",
      tertiary: "#8a95b3",

      accent1: "#7089ef",
      accent2: "#C05A74",
      accent3: "#7A5C99",

      bg_darkest: "#F2F4F8",
      bg_main: "#F7F9FC",
      bg_panel: "#EDF1F7",
      bg_secondary: "#E4E9F2",

      fg_main: "#634d9a",
      fg_muted: "#4A556F",
      fg_dim: "#99a0b0",
      fg_comment: "#afb4bf",

      error: "#C94A5A",
      warning: "#B8892E",
      success: "#4F8A5B",
      success_subtle: "#9FBFA8",

      selection_bg: "#D8E2FF",
      line_highlight: "#EEF2FA",
      indent_guide: "#D6DCE8",

      error_input_bg: "#F5D9DF",
      warning_input_bg: "#F3E8CF",
      info_input_bg: "#DDE6F5",

      shadow: "rgba(0, 0, 0, 0.12)",
      transparent: "transparent",

      primary_subtle: "#C8D3EA",

      border_main: "#C3CCE0",
      border_subtle: "#D5DBEA",
      border_muted: "#E3E7F0",
    },
  },

  amber: {
    dark: {
      name: "Outrider Blaze",
      type: "dark",
      primary: "#c72107ff",
      secondary: "#ffce89",
      tertiary: "#ff8c42",
      accent1: "#cb0011",
      accent2: "#cfb000",
      accent3: "#f78e5a",
      bg_darkest: "#0f0a08",
      bg_main: "#1a120f",
      bg_panel: "#17110e",
      bg_secondary: "#221b14",
      fg_main: "#f4d4b2",
      fg_muted: "#d9c2a3",
      fg_dim: "#553e30",
      fg_comment: "#754848ff",
      error: "#ff4757",
      warning: "#ff6b35",
      success: "#ffb347",
      success_subtle: "#ffb34744",
      selection_bg: "#8b451388",
      line_highlight: "#1a120f88",
      indent_guide: "#2a1f1866",
      error_input_bg: "#3a1a15",
      warning_input_bg: "#4a2f1e",
      info_input_bg: "#17110e",
      shadow: "#0f0a084d",
      transparent: "#00000000",
      primary_subtle: "#ff6b3544",
      border_main: "#b5651d",
      border_subtle: "#2a1f1833",
      border_muted: "#2a1f1866",
    },
    light: {
      name: "Pyro Scout",
      type: "light",
      primary: "#dd2535",
      secondary: "#d13d07",
      tertiary: "#cb7f13",
      accent1: "#c36e44",
      accent2: "#a67e00",
      accent3: "#d66319",
      bg_darkest: "#fff5e6",
      bg_main: "#fdf8f0",
      bg_panel: "#fdf8f0",
      bg_secondary: "#fff2e0",
      fg_main: "#5c3a1a",
      fg_muted: "#896d51",
      fg_dim: "#ae9c7d",
      fg_comment: "#896d51",
      error: "#d03c3c",
      warning: "#d13d07",
      success: "#c36e44",
      success_subtle: "#ffb34744",
      selection_bg: "#ffb34788",
      line_highlight: "#fff2e044",
      indent_guide: "#ffb34766",
      error_input_bg: "#ffe6e9",
      warning_input_bg: "#fff4e6",
      info_input_bg: "#fff2e0",
      shadow: "#fdf8f04d",
      transparent: "#00000000",
      primary_subtle: "#dd253544",
      border_main: "#d13d07",
      border_subtle: "#d13d0733",
      border_muted: "#d13d0766",
    },
  },
};
