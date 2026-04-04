export type Prettify<T> = { [K in keyof T]: T[K] };

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
export type PaletteProps = Prettify<
  BasePaletteProps & {
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
    accent1_fade: string; /* added to Reduce warmth slightly */

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
  }
>;

// Character Palette Definitions
export const characterPalettes: Record<
  string,
  Record<string, Partial<PaletteProps>>
> = {
  raiden: {
    dark: {
      name: "Eternal Electro Throne",
      type: "dark",
      primary: "#aa7cee",
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
      fg_dim: "#453a59",
      fg_comment: "#67597d",
      error: "#f1a7b4",
      warning: "#e6c78a",
      success: "#7ed3b0",
      error_input_bg: "#2a1f1a",
      warning_input_bg: "#4a3a5c",
      info_input_bg: "#1a2f38",
    },
    light: {
      name: "Violet Eternity Glow",
      type: "light",
      primary: "#601a42",
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
      fg_dim: "#a78eb8",
      fg_comment: "#baabb4",
      error: "#b85c6e",
      warning: "#9c4d78",
      success: "#4a9a7d",
      error_input_bg: "#f9e8eb",
      warning_input_bg: "#fdf4ec",
      info_input_bg: "#ebf2ff",
    },
  },

  nahida: {
    dark: {
      name: "Verdant Dreamweave",
      type: "dark",
      primary: "#a7ea43",
      secondary: "#b9daa4",
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
      fg_dim: "#3a4a3a",
      fg_comment: "#6f7d59",
      error: "#f0d9b5",
      warning: "#e7ff2fff",
      success: "#90ee90",
      error_input_bg: "#2a1f1a",
      warning_input_bg: "#3a2f24",
      info_input_bg: "#253228",
    },
    light: {
      name: "Kusanali Dawnbloom",
      type: "light",
      primary: "#4c701a",
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
      fg_dim: "#5b6b5b",
      fg_comment: "#b4baab",
      error: "#ae2012",
      warning: "#9b7a01",
      success: "#2d6a4f",
      error_input_bg: "#fff8e8",
      warning_input_bg: "#f0f8e8",
      info_input_bg: "#e8f5d8",
      primary_subtle: "#4a6d1a44",
    },
  },

  zhongli: {
    dark: {
      name: "Geo Contract Vault",
      type: "dark",
      primary: "#e8c65e",
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
      fg_comment: "#7d7459",
      error: "#b85c40",
      warning: "#e8c660",
      success: "#d4b085",
      error_input_bg: "#3a2a20",
      warning_input_bg: "#4a3624",
      info_input_bg: "#2a231c",
      primary_subtle: "#e8c66044",
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
      fg_comment: "#bab1ab",
      error: "#8b0000",
      warning: "#cd853f",
      success: "#6b5a4a",
      error_input_bg: "#fff0e6",
      warning_input_bg: "#fff5e6",
      info_input_bg: "#f8f4ec",
    },
  },

  furina: {
    dark: {
      name: "Hydrocourt Midnight",
      type: "dark",
      primary: "#19b3e6",
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
      fg_comment: "#59747d",
      error: "#ff69b4",
      warning: "#00bfff",
      success: "#40e0d0",
      error_input_bg: "#2a1a20",
      warning_input_bg: "#3a2d20",
      info_input_bg: "#1a2d40",
    },
    light: {
      name: "Fontaine Spotlight",
      type: "light",
      primary: "#1f3b61",
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
      fg_comment: "#abb1ba",
      error: "#be123c",
      warning: "#ea580c",
      success: "#059669",
      error_input_bg: "#fef2f2",
      warning_input_bg: "#fef3c7",
      info_input_bg: "#eff6ff",
    },
  },

  venti: {
    dark: {
      name: "Stormrider Breeze",
      type: "dark",
      primary: "#47d1cd",
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
      fg_comment: "#597d7b",
      error: "#f0b27a",
      warning: "#48d1cc",
      success: "#76c7ad",
      error_input_bg: "#2a1f1a",
      warning_input_bg: "#3a2f24",
      info_input_bg: "#1a2f38",
    },
    light: {
      name: "Celestine Bardlight",
      type: "light",
      primary: "#31a586",
      secondary: "#26824e",
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
      fg_comment: "#abbab6",
      error: "#bf5530",
      warning: "#a66d32",
      success: "#26834f",
      error_input_bg: "#fff0e6",
      warning_input_bg: "#fff8e8",
      info_input_bg: "#e8f6f4",
    },
  },

  mauvika: {
    dark: {
      name: "Lava Glaze Inferno",
      type: "dark",
      primary: "#eb7347",
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
      fg_comment: "#7d6359",
      error: "#ff4757",
      warning: "#ff6b35",
      success: "#d4a574",
      error_input_bg: "#3a1a15",
      warning_input_bg: "#4a2f1e",
      info_input_bg: "#17110e",
    },
    light: {
      name: "Sunforge Ember",
      type: "light",
      primary: "#ff4757",
      secondary: "#b4641d",
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
      fg_comment: "#baabad",
      error: "#d14d5a",
      warning: "#ff8c42",
      success: "#8b7355",
      error_input_bg: "#ffe6e9",
      warning_input_bg: "#fff4e6",
      info_input_bg: "#fff2e0",
    },
  },

  paimon: {
    dark: {
      name: "Emergency Food",
      type: "dark",
      primary: "#e6c719",
      secondary: "#a7d5e2",
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
      fg_comment: "#59757d",
      error: "#ff91a4",
      warning: "#ffd700",
      success: "#a8d5e2",
      error_input_bg: "#2a1a20",
      warning_input_bg: "#3a2d20",
      info_input_bg: "#1a2333",
    },

    light: {
      name: "Starry Companion",
      type: "light",
      primary: "#e7a240",
      secondary: "#7084e6",
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
      fg_comment: "#abadba",
      error: "#D64550",
      warning: "#C89B2C",
      success: "#4E9F5D",
      error_input_bg: "#F6DADD",
      warning_input_bg: "#F4EBD1",
      info_input_bg: "#E2E9FF",
    },
  },

  citlali: {
    dark: {
      name: "Frost Ritual",
      type: "dark",
      primary: "#91cdf3",
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
      fg_comment: "#596f7d",
      error: "#ff6b35",
      warning: "#ffd700",
      success: "#90c8ff",
      error_input_bg: "#2a1a20",
      warning_input_bg: "#3a2d20",
      info_input_bg: "#1a2d40",
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
      fg_comment: "#abb1ba",
      error: "#c2410c",
      warning: "#f97316",
      success: "#10b981",
      error_input_bg: "#fef7ed",
      warning_input_bg: "#fef3c7",
      info_input_bg: "#eff6ff",
    },
  },

  columbina: {
    dark: {
      name: "Veiled Harbinger",
      type: "dark",
      primary: "#c7d3e6",
      secondary: "#d4a5d4", // or #9FAEC8
      tertiary: "#7e8faf", // cold steel blue #6F7E9A
      accent1: "#B8C9FF",
      accent2: "#E6A3B5",
      accent3: "#967ab7",
      bg_darkest: "#0E1118",
      bg_main: "#141925",
      bg_panel: "#1A2030",
      bg_secondary: "#20273A",
      fg_main: "#E6ECF5",
      fg_muted: "#B6C0D4",
      fg_dim: "#3a4355ff",
      fg_comment: "#59677d",
      error: "#E06C75",
      warning: "#E5C07B",
      success: "#98C379",
      error_input_bg: "#2A1A22",
      warning_input_bg: "#2A2418",
      info_input_bg: "#1B2436",
    },

    light: {
      name: "Damselette Whisper",
      type: "light",
      primary: "#495a79",
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
      fg_comment: "#abb0ba",
      error: "#C94A5A",
      warning: "#B8892E",
      success: "#4F8A5B",
      error_input_bg: "#F5D9DF",
      warning_input_bg: "#F3E8CF",
      info_input_bg: "#DDE6F5",
    },
  },

  amber: {
    dark: {
      name: "Outrider Blaze",
      type: "dark",
      primary: "#c52007",
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
      fg_comment: "#7d5e59",
      error: "#ff4757",
      warning: "#ff6b35",
      success: "#ffb347",
      error_input_bg: "#3a1a15",
      warning_input_bg: "#4a2f1e",
      info_input_bg: "#17110e",
    },
    light: {
      name: "Pyro Scout",
      type: "light",
      primary: "#dd2736",
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
      fg_comment: "#baabad",
      error: "#d03c3c",
      warning: "#d13d07",
      success: "#c36e44",
      error_input_bg: "#ffe6e9",
      warning_input_bg: "#fff4e6",
      info_input_bg: "#fff2e0",
    },
  },

  arlecchino: {
    dark: {
      name: "Knave's Shadow",
      type: "dark",
      primary: "#d8313f",
      secondary: "#f58e8e",
      tertiary: "#9195a0",
      accent1: "#B94E32",
      accent2: "#e8e4e8",
      accent3: "#2a2730",
      bg_darkest: "#0e0506",
      bg_main: "#1a0d0e",
      bg_panel: "#120708",
      bg_secondary: "#241617",
      fg_main: "#f7f3f3",
      fg_muted: "#c2b4b8",
      fg_dim: "#463540",
      fg_comment: "#6b5c65",
      error: "#ff4d4d",
      warning: "#d9a066",
      success: "#6fcf97",
      error_input_bg: "#2a1616",
      warning_input_bg: "#2a2816",
      info_input_bg: "#131b26",
    },
    light: {
      name: "Dire Balemoon",
      type: "light",
      primary: "#d8313f",
      secondary: "#8e1d2c",
      tertiary: "#7a7478",
      accent1: "#B94E32",
      accent2: "#b58a8d",
      accent3: "#4a3640",
      bg_darkest: "#faf5f6",
      bg_main: "#fffbfc",
      bg_panel: "#f4edf0",
      bg_secondary: "#eae2e5",
      fg_main: "#1c0d0e",
      fg_muted: "#524148",
      fg_dim: "#8a7980",
      fg_comment: "#a8a0a5",
      error: "#d64545",
      warning: "#a0722a",
      success: "#2e8a5e",
      error_input_bg: "#f5dada",
      warning_input_bg: "#f3e6cf",
      info_input_bg: "#dce6f6",
    },
  },

  xiao: {
    dark: {
      name: "Yaksha Vigil",
      type: "dark",
      primary: "#945fa5",
      secondary: "#a6b4fc",
      tertiary: "#3aa19a",
      accent1: "#9ae0d2", // or hsl(170, 83%, 75%)
      accent2: "#2cbab3",
      accent3: "#6a2d80", // or #1d5e51
      bg_darkest: "#0b1c1d", // or hsl(173, 40%, 4%)
      bg_main: "#162122", // or hsl(189, 32%, 8%)
      bg_panel: "#162327",
      bg_secondary: "#2d3053", // or #26172b
      fg_main: "#f3ece2",
      fg_muted: "#a094b8",
      fg_dim: "#3d495c",
      fg_comment: "#526a6f",
      error: "#b54a5e",
      warning: "#f8c84f",
      success: "#3aa19a",
      error_input_bg: "#1b1315",
      warning_input_bg: "#1b1a13",
      info_input_bg: "#0e101b",
    },
    light: {
      name: "Conqueror of Demons",
      type: "light",
      primary: "#7a4d89",
      secondary: "#0520a8",
      tertiary: "#2a8981",
      accent1: "#3cc3a8",
      accent2: "#1d8c84",
      accent3: "#a859c5",
      bg_darkest: "#f0f9f9",
      bg_main: "#fcfdfd",
      bg_panel: "#f8fbfb",
      bg_secondary: "#f8f9fb",
      fg_main: "#392b18",
      fg_muted: "#54486a",
      fg_dim: "#65758b",
      fg_comment: "#abaebf",
      error: "#b34a5d",
      warning: "#a07840",
      success: "#1d5f52",
      error_input_bg: "#fff1f2",
      warning_input_bg: "#fffbeb",
      info_input_bg: "#f0fdfa",
    },
  },
};
