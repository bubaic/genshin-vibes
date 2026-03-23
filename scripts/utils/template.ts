import { alpha } from "./color";
import { type PaletteProps } from "./palettes";

type TokenColor = {
  scope: string | Array<string>;
  settings: { foreground: string; fontStyle?: string };
};

/**
 * Base template for VS Code theme structure
 */
const baseStructure = {
  name: "",
  type: "dark",
  colors: {},
  tokenColors: [] as Array<TokenColor>,
};

/**
 * Core editor colors that every theme needs
 */
const coreColors = (p: PaletteProps) => ({
  // Editor
  "editor.background": p.bg_main,
  "editor.foreground": p.fg_main,
  "editor.selectionBackground":
    p.type == "dark" ? alpha(p.selection_bg, 0.2) : alpha(p.selection_bg, 0.15),
  "editor.selectionForeground": p.fg_dim,
  "editor.lineHighlightBackground": p.line_highlight,
  "editorLineNumber.foreground": p.fg_dim,
  "editorLineNumber.activeForeground": p.secondary,
  "editorIndentGuide.background": p.indent_guide,
  "editorIndentGuide.activeBackground": p.fg_dim,
  "editorWhitespace.foreground": p.indent_guide,
  "editorBracketMatch.background": p.primary_subtle,
  "editorBracketMatch.border": p.primary,
  "editorGutter.background": p.bg_main,
  "editor.findMatchBackground": p.warning_subtle,
  "editor.findMatchBorder": p.warning_alpha,
  "editor.findMatchForeground": p.fg_main,
  "editor.findMatchHighlightBackground": p.border_muted,
  "editor.findMatchHighlightForeground": p.fg_main_alpha,
  "editor.findRangeHighlightBackground": p.border_muted,
  "editor.findRangeHighlightBorder": p.transparent,
  "editor.focusedStackFrameHighlightBackground": p.border_subtle,
  "editor.foldBackground": p.border_subtle,
  "editor.hoverHighlightBackground": p.transparent,
  "editor.inactiveSelectionBackground": p.selection_inactive,
  "editor.inlineValuesBackground": p.transparent,
  "editor.inlineValuesForeground": p.tertiary,
  "editor.lineHighlightBorder": p.transparent,
  "editor.linkedEditingBackground": p.border_subtle,
  "editor.rangeHighlightBackground": p.selection_inactive,
  "editor.selectionHighlightBackground": p.border_subtle,
  "editor.selectionHighlightBorder": p.bg_main,
  "editor.snippetFinalTabstopHighlightBackground": p.border_subtle,
  "editor.snippetFinalTabstopHighlightBorder": p.bg_panel,
  "editor.snippetTabstopHighlightBackground": p.border_subtle,
  "editor.snippetTabstopHighlightBorder": p.bg_panel,
  "editor.stackFrameHighlightBackground": p.border_subtle,
  "editor.symbolHighlightBackground": p.border_subtle,
  "editor.symbolHighlightBorder": p.transparent,
  "editor.wordHighlightBackground": p.border_subtle,
  "editor.wordHighlightBorder": p.transparent,
  "editor.wordHighlightStrongBackground": p.border_subtle,
  "editor.wordHighlightStrongBorder": p.border_subtle,
  "editorGroupHeader.tabsBackground": p.bg_darkest,

  // Tabs
  "tab.activeBackground": alpha(p.accent1, 0.1),
  "tab.activeForeground": p.fg_main_alpha,
  "tab.inactiveBackground": p.bg_panel,
  "tab.inactiveForeground": p.fg_muted,

  // Activity Bar
  "activityBar.background": p.bg_darkest,
  "activityBar.foreground": p.secondary,
  "activityBar.inactiveForeground": p.fg_dim,
  "activityBarBadge.background": p.primary,
  "activityBarBadge.foreground": p.bg_darkest,
  "activityBar.activeBorder": p.primary,
  "activityBar.dropBorder": p.bg_panel,

  // Sidebar
  "sideBar.background": p.bg_panel,
  "sideBarSectionHeader.background": p.bg_secondary,
  "sideBarSectionHeader.foreground": p.secondary,
  "sideBarTitle.foreground": p.tertiary,

  // Status Bar
  "statusBar.background": p.primary,
  "statusBar.foreground": p.bg_darkest,
  "statusBar.debuggingBackground": p.error,
  "statusBar.debuggingForeground": p.bg_darkest,
  "statusBar.noFolderBackground": p.tertiary,

  // Title Bar
  "titleBar.activeBackground": p.bg_panel,
  "titleBar.activeForeground": p.fg_main,
  "titleBar.inactiveBackground": p.bg_main,
  "titleBar.inactiveForeground": p.fg_muted,

  // Buttons & Inputs
  "button.background": p.tertiary,
  "button.foreground": p.bg_darkest,
  "button.hoverBackground": p.primary,
  "input.background": p.bg_secondary,
  "input.foreground": p.fg_main,
  "input.border": p.border_main,
  "input.placeholderForeground": p.fg_dim,

  // Terminal
  "terminal.background": p.bg_main,
  "terminal.foreground": p.fg_main,
  "terminal.ansiBlack": p.bg_darkest,
  "terminal.ansiRed": p.error,
  "terminal.ansiGreen": p.success,
  "terminal.ansiYellow": p.warning,
  "terminal.ansiBlue": p.primary,
  "terminal.ansiMagenta": p.secondary,
  "terminal.ansiCyan": p.accent3,
  "terminal.ansiWhite": p.fg_dim,

  // Git
  "gitDecoration.modifiedResourceForeground": p.tertiary,
  "gitDecoration.deletedResourceForeground": p.error,
  "gitDecoration.untrackedResourceForeground": p.primary,
  "gitDecoration.ignoredResourceForeground": p.fg_comment,
});

/**
 * Extended colors for more comprehensive theming
 */
const extendedColors = (p: PaletteProps) => ({
  // Menu
  "menu.background": p.bg_panel,
  "menu.border": p.selection_inactive,
  "menu.foreground": p.fg_main,
  "menu.selectionBackground": p.border_subtle,
  "menu.selectionBorder": p.bg_secondary,
  "menu.selectionForeground": p.fg_main,
  "menu.separatorBackground": p.border_muted,
  "menubar.selectionBackground": p.border_subtle,
  "menubar.selectionBorder": p.selection_inactive,
  "menubar.selectionForeground": p.fg_main,

  // Toolbar
  "toolbar.activeBackground": p.border_muted,
  "toolbar.hoverBackground": p.border_subtle,

  // Panel
  "panel.background": p.bg_panel,
  "panel.border": p.border_main,
  "panel.dropBorder": p.bg_secondary,
  "panelInput.border": p.bg_panel,
  "panelSection.dropBackground": p.border_subtle,
  "panelSectionHeader.background": p.bg_panel,
  "panelSectionHeader.foreground": p.fg_main,
  "panelTitle.activeBorder": p.border_muted,
  "panelTitle.activeForeground": p.fg_main,
  "panelTitle.inactiveForeground": p.fg_muted,

  // Charts
  "charts.blue": p.primary,
  "charts.foreground": p.fg_main,
  "charts.green": p.success,
  "charts.lines": p.tertiary,
  "charts.orange": p.accent1,
  "charts.purple": p.secondary,
  "charts.red": p.error,
  "charts.yellow": p.warning,

  // Checkbox
  "checkbox.background": p.bg_panel,
  "checkbox.border": p.border_subtle,
  "checkbox.foreground": p.fg_main,

  // Button
  "button.secondaryBackground": p.bg_panel,
  "button.secondaryForeground": p.fg_main,
  "button.secondaryHoverBackground": p.bg_secondary,

  // Tree
  "tree.indentGuidesStroke": p.tertiary,

  // Walk Through
  "walkThrough.embeddedEditorBackground": p.bg_main,

  // Welcome Page
  "welcomePage.background": p.bg_main,

  // Widget
  "widget.shadow": p.shadow,

  // Window
  "window.activeBorder": p.bg_panel,
  "window.inactiveBorder": p.bg_panel,

  // Side Bar
  "sideBar.dropBackground": p.bg_panel,
  "sideBar.foreground": p.fg_muted,
  "sideBarSectionHeader.border": p.border_subtle,

  // Status Bar
  "statusBar.noFolderForeground": p.fg_main,
  "statusBarItem.activeBackground": p.border_muted,
  "statusBarItem.errorBackground": p.list_active_bg,
  "statusBarItem.errorForeground": p.error,
  "statusBarItem.hoverBackground": p.border_subtle,
  "statusBarItem.prominentBackground": p.bg_secondary,
  "statusBarItem.prominentForeground": p.fg_main,
  "statusBarItem.prominentHoverBackground": p.border_subtle,
  "statusBarItem.remoteBackground": p.tertiary,
  "statusBarItem.remoteForeground": p.bg_main,

  // Tab
  "tab.activeModifiedBorder": p.secondary,
  "tab.hoverBackground": p.border_subtle,
  "tab.inactiveModifiedBorder": p.transparent,
  "tab.lastPinnedBorder": p.fg_dim,
  "tab.unfocusedActiveBackground": p.bg_secondary,
  "tab.activeBorderTop": p.primary,
  "tab.unfocusedHoverBackground": p.border_subtle,
  "tab.unfocusedInactiveBackground": p.bg_panel,
  "tab.unfocusedInactiveModifiedBorder": p.secondary_alpha,

  // Terminal
  "terminal.ansiBrightBlack": p.ansi_bright_black,
  "terminal.ansiBrightBlue": p.ansi_bright_blue,
  "terminal.ansiBrightCyan": p.ansi_bright_cyan,
  "terminal.ansiBrightGreen": p.ansi_bright_green,
  "terminal.ansiBrightMagenta": p.ansi_bright_magenta,
  "terminal.ansiBrightRed": p.ansi_bright_red,
  "terminal.ansiBrightWhite": p.ansi_bright_white,
  "terminal.ansiBrightYellow": p.ansi_bright_yellow,
  "terminal.dropBackground": p.border_subtle,
  "terminal.selectionBackground":
    p.type == "dark" ? alpha(p.selection_bg, 0.2) : alpha(p.selection_bg, 0.15),
  "terminal.tab.activeBorder": p.fg_main,
  "terminalCursor.background": p.fg_main,
  "terminalCursor.foreground": p.accent3,

  // Settings
  "settings.focusedRowBackground": p.bg_panel,
  "settings.focusedRowBorder": p.border_subtle,
  "settings.headerForeground": p.fg_main,
  "settings.modifiedItemIndicator": p.primary,
  "settings.rowHoverBackground": p.bg_panel,

  // Text
  "textBlockQuote.background": p.bg_panel,
  "textBlockQuote.border": p.border_subtle,
  "textCodeBlock.background": p.bg_panel,
  "textLink.activeForeground": p.secondary_hover,
  "textLink.foreground": p.secondary,
  "textPreformat.foreground": p.warning,
  "textSeparator.foreground": p.tertiary,

  // Peek View
  "peekView.border": p.primary,
  "peekViewEditor.background": p.bg_panel,
  "peekViewEditor.matchHighlightBackground": p.border_muted,
  "peekViewResult.background": p.bg_secondary,
  "peekViewResult.fileForeground": p.tertiary,
  "peekViewResult.lineForeground": p.tertiary,
  "peekViewResult.matchHighlightBackground": p.border_muted,
  "peekViewResult.selectionBackground": p.border_subtle,
  "peekViewResult.selectionForeground": p.fg_main,
  "peekViewTitle.background": p.bg_secondary,
  "peekViewTitleDescription.foreground": p.tertiary,

  // Scrollbar
  "scrollbar.shadow": p.shadow,
  "scrollbarSlider.activeBackground": p.tertiary_alpha,
  "scrollbarSlider.background": p.scrollbar_bg,
  "scrollbarSlider.hoverBackground": p.scrollbar_hover,

  // Search Editor
  "searchEditor.findMatchBackground": p.border_subtle,

  // Selection
  "selection.background": p.border_muted,

  // Progress Bar
  "progressBar.background": p.primary,

  // Quick Input
  "quickInput.background": p.bg_panel,
  "quickInput.foreground": p.tertiary,
  "quickInputList.focusBackground": p.border_subtle,
  "quickInputList.focusForeground": p.fg_main,
  "quickInputList.focusIconForeground": p.fg_main,

  // Picker Group
  "pickerGroup.border": p.border_muted,
  "pickerGroup.foreground": p.secondary,

  // Ports
  "ports.iconRunningProcessForeground": p.primary,

  // Problems
  "problemsErrorIcon.foreground": p.error,
  "problemsInfoIcon.foreground": p.secondary,
  "problemsWarningIcon.foreground": p.warning,

  // Notification
  "notificationCenter.border": p.border_subtle,
  "notificationCenterHeader.background": p.bg_panel,
  "notificationCenterHeader.foreground": p.tertiary,
  "notificationLink.foreground": p.secondary,
  "notifications.background": p.bg_panel,
  "notifications.border": p.border_subtle,
  "notifications.foreground": p.fg_main,
  "notificationsErrorIcon.foreground": p.error,
  "notificationsInfoIcon.foreground": p.secondary,
  "notificationsWarningIcon.foreground": p.warning,
  "notificationToast.border": p.border_subtle,

  // Minimap
  "minimap.background": p.bg_panel,
  "minimap.errorHighlight": p.error_alpha,
  "minimap.findMatchHighlight": p.border_subtle,
  "minimap.selectionHighlight": p.border_subtle,
  "minimap.warningHighlight": p.warning_alpha,
  "minimapGutter.addedBackground": p.success,
  "minimapGutter.deletedBackground": p.error,
  "minimapGutter.modifiedBackground": p.tertiary,
  "minimapSlider.activeBackground": p.border_muted,
  "minimapSlider.background": p.border_subtle,
  "minimapSlider.hoverBackground": p.border_subtle,

  // Notebook
  "notebook.cellBorderColor": p.secondary_alpha,
  "notebook.cellEditorBackground": p.bg_panel,
  "notebook.cellHoverBackground": p.bg_secondary_alpha,
  "notebook.focusedCellBackground": p.selection_inactive,
  "notebook.focusedCellBorder": p.secondary,
  "notebook.outputContainerBackgroundColor": p.selection_inactive,

  // Merge
  "merge.border": p.bg_secondary,
  "merge.commonContentBackground": p.border_subtle,
  "merge.commonHeaderBackground": p.border_subtle,
  "merge.currentContentBackground": p.success_merge,
  "merge.currentHeaderBackground": p.success_merge,
  "merge.incomingContentBackground": p.primary_merge,
  "merge.incomingHeaderBackground": p.primary_merge,

  // Keybinding
  "keybindingLabel.background": p.bg_secondary,
  "keybindingLabel.border": p.border_muted,
  "keybindingLabel.bottomBorder": p.border_muted,
  "keybindingLabel.foreground": p.secondary,
  "keybindingTable.headerBackground": p.bg_secondary,
  "keybindingTable.rowsBackground": p.bg_panel,

  // Icon
  "icon.foreground": p.tertiary,

  // Input
  "inputOption.activeBackground": p.primary_subtle,
  "inputOption.activeBorder": p.primary,
  "inputOption.activeForeground": p.primary,
  "inputValidation.errorBackground": p.error_input_bg,
  "inputValidation.errorBorder": p.error,
  "inputValidation.errorForeground": p.error,
  "inputValidation.infoBackground": p.info_input_bg,
  "inputValidation.infoBorder": p.secondary,
  "inputValidation.infoForeground": p.secondary,
  "inputValidation.warningBackground": p.warning_input_bg,
  "inputValidation.warningBorder": p.tertiary,
  "inputValidation.warningForeground": p.warning,

  // List
  "list.activeSelectionBackground": p.list_active_bg,
  "list.activeSelectionForeground": p.fg_main,
  "list.deemphasizedForeground": p.tertiary,
  "list.dropBackground": p.bg_panel,
  "list.errorForeground": p.error,
  "list.filterMatchBackground": p.bg_panel,
  "list.filterMatchBorder": p.primary,
  "list.focusBackground": p.list_focus_bg,
  "list.focusForeground": p.fg_main,
  "list.focusOutline":
    p.type == "dark" ? alpha(p.accent1, 0.4) : alpha(p.accent1, 0.6),
  "list.highlightForeground": p.primary,
  "list.hoverBackground": alpha(p.list_focus_bg, 0.1),
  "list.hoverForeground": p.accent1,
  "list.inactiveFocusBackground": p.line_highlight,
  "list.inactiveSelectionBackground": p.bg_secondary,
  "list.inactiveSelectionForeground": p.fg_main,
  "list.invalidItemForeground": p.error,
  "list.warningForeground": p.warning,
  "listFilterWidget.background": p.bg_panel,
  "listFilterWidget.noMatchesOutline": p.error,
  "listFilterWidget.outline": alpha(p.accent1, 0.4),

  // Editor Bracket Highlight
  "editorBracketHighlight.foreground1": p.error_alpha,
  "editorBracketHighlight.foreground2": p.tertiary_alpha,
  "editorBracketHighlight.foreground3": p.warning_alpha,
  "editorBracketHighlight.foreground4": p.secondary_alpha,
  "editorBracketHighlight.foreground5": p.primary_alpha,
  "editorBracketHighlight.foreground6": p.accent3_alpha,

  // Editor Bracket Pair Guide
  "editorBracketPairGuide.activeBackground1": p.tertiary,
  "editorBracketPairGuide.activeBackground2": p.primary,
  "editorBracketPairGuide.activeBackground3": p.secondary,
  "editorBracketPairGuide.activeBackground4": p.accent3,
  "editorBracketPairGuide.activeBackground5": p.warning,
  "editorBracketPairGuide.activeBackground6": p.error,
  "editorBracketPairGuide.background1": p.tertiary_alpha,
  "editorBracketPairGuide.background2": p.primary_alpha,
  "editorBracketPairGuide.background3": p.secondary_alpha,
  "editorBracketPairGuide.background4": p.accent3_alpha,
  "editorBracketPairGuide.background5": p.warning_alpha,
  "editorBracketPairGuide.background6": p.error_alpha,

  // Editor Code Lens
  "editorCodeLens.foreground": p.primary,

  // Editor Cursor
  "editorCursor.background": p.fg_main,
  "editorCursor.foreground": p.accent3,

  // Editor Error/Warning/Info/Hint
  "editorError.border": p.transparent,
  "editorError.foreground": p.error,
  "editorWarning.border": p.transparent,
  "editorWarning.foreground": p.warning,
  "editorInfo.border": p.bg_secondary,
  "editorInfo.foreground": p.secondary,
  "editorHint.border": p.transparent,
  "editorHint.foreground": p.tertiary,

  // Editor Ghost Text
  "editorGhostText.foreground": p.tertiary,

  // Editor Group
  "editorGroup.border": p.transparent,
  "editorGroup.dropBackground": p.bg_panel,
  "editorGroup.emptyBackground": p.transparent,
  "editorGroup.focusedEmptyBorder": p.transparent,
  "editorGroupHeader.noTabsBackground": p.transparent,
  "editorGroupHeader.tabsBackground": p.bg_darkest,
  "editorGroupHeader.tabsForeground": p.fg_main_alpha,
  "editorGroupHeader.tabsBorder": p.transparent,

  // Editor Gutter
  "editorGutter.addedBackground": p.success,
  "editorGutter.commentRangeForeground": p.bg_secondary,
  "editorGutter.deletedBackground": p.error,
  "editorGutter.foldingControlForeground": p.secondary,
  "editorGutter.modifiedBackground": p.tertiary,

  // Editor Hover Widget
  "editorHoverWidget.background": p.bg_secondary,
  "editorHoverWidget.border": p.border_main,
  "editorHoverWidget.foreground": p.tertiary,
  "editorHoverWidget.highlightForeground": p.fg_main,
  "editorHoverWidget.statusBarBackground": p.transparent,

  // Editor Indent Guide
  "editorIndentGuide.activeBackground1": p.fg_dim,
  "editorIndentGuide.background1": p.indent_guide,

  // Editor Inlay Hint
  "editorInlayHint.background": p.inlay_bg,
  "editorInlayHint.foreground": p.inlay_fg,
  "editorInlayHint.parameterBackground": p.inlay_bg,
  "editorInlayHint.parameterForeground": p.inlay_param,
  "editorInlayHint.typeBackground": p.inlay_bg,
  "editorInlayHint.typeForeground": p.inlay_type,

  // Editor Light Bulb
  "editorLightBulb.foreground": p.tertiary,
  "editorLightBulbAutoFix.foreground": p.primary,

  // Editor Link
  "editorLink.activeForeground": p.primary,

  // Editor Marker Navigation
  "editorMarkerNavigation.background": p.bg_panel,
  "editorMarkerNavigationError.background": p.bg_panel,
  "editorMarkerNavigationInfo.background": p.bg_panel,
  "editorMarkerNavigationWarning.background": p.bg_panel,

  // Editor Overview Ruler
  "editorOverviewRuler.addedForeground": p.success_alpha,
  "editorOverviewRuler.background": p.bg_main,
  "editorOverviewRuler.border": p.border_muted,
  "editorOverviewRuler.bracketMatchForeground": p.tertiary,
  "editorOverviewRuler.commentForeground": p.comment_alpha,
  "editorOverviewRuler.commentUnresolvedForeground": p.warning_alpha,
  "editorOverviewRuler.commonContentForeground": p.selection_inactive,
  "editorOverviewRuler.currentContentForeground": p.success,
  "editorOverviewRuler.deletedForeground": p.error_alpha,
  "editorOverviewRuler.errorForeground": p.error_alpha,
  "editorOverviewRuler.findMatchForeground": p.border_muted,
  "editorOverviewRuler.incomingContentForeground": p.primary,
  "editorOverviewRuler.infoForeground": p.secondary_alpha,
  "editorOverviewRuler.modifiedForeground": p.tertiary_alpha,
  "editorOverviewRuler.rangeHighlightForeground": p.border_muted,
  "editorOverviewRuler.selectionHighlightForeground": p.border_muted,
  "editorOverviewRuler.warningForeground": p.warning_alpha,
  "editorOverviewRuler.wordHighlightForeground": p.border_subtle,
  "editorOverviewRuler.wordHighlightStrongForeground": p.border_muted,

  // Editor Pane
  "editorPane.background": p.transparent,

  // Editor Ruler
  "editorRuler.foreground": p.border_muted,

  // Editor Suggest Widget
  "editorSuggestWidget.background": p.bg_secondary,
  "editorSuggestWidget.border": p.border_main,
  "editorSuggestWidget.focusHighlightForeground": p.primary,
  "editorSuggestWidget.foreground": p.tertiary,
  "editorSuggestWidget.highlightForeground": p.accent1,
  "editorSuggestWidget.selectedBackground": p.border_subtle,
  "editorSuggestWidget.selectedForeground": p.fg_main,
  "editorSuggestWidget.selectedIconForeground": p.fg_main,

  // Editor Unnecessary Code
  "editorUnnecessaryCode.border": p.transparent,
  "editorUnnecessaryCode.opacity": p.fg_main_fade,

  // Editor Widget
  "editorWidget.background": p.bg_secondary,
  "editorWidget.border": p.border_main,
  "editorWidget.foreground": p.tertiary,
  "editorWidget.resizeBorder": p.fg_dim,

  // Dropdowns
  "dropdown.background": p.bg_secondary,
  "dropdown.foreground": p.fg_main,
  "dropdown.border": p.border_main,
  "dropdown.listBackground": p.bg_secondary,

  // Error Foreground
  errorForeground: p.error,

  // Focus Border
  focusBorder: p.border_subtle,

  // Foreground
  foreground: p.fg_main,

  // Description
  descriptionForeground: p.tertiary,

  // git
  "git.blame.editorDecorationForeground": p.fg_dim,
  "gitDecoration.addedResourceForeground": p.success,
  "gitDecoration.conflictingResourceForeground": p.warning,
  "gitDecoration.renamedResourceForeground": p.secondary,
  "gitDecoration.stageDeletedResourceForeground": p.error,
  "gitDecoration.stageModifiedResourceForeground": p.primary,
  "gitDecoration.submoduleResourceForeground": p.warning,

  // Badge
  "badge.background": p.primary,
  "badge.foreground": p.bg_darkest,

  // Breadcrumbs
  "breadcrumb.foreground": p.fg_main_fade,
  "breadcrumb.focusForeground": p.secondary,
  "breadcrumb.activeSelectionForeground": p.primary,
  "breadcrumb.background": p.bg_main,
  "breadcrumbPicker.background": p.bg_panel,

  // Banner
  "banner.background": p.bg_panel,
  "banner.foreground": p.fg_main,
  "banner.iconForeground": p.tertiary,

  // Extension
  "extensionBadge.remoteBackground": p.secondary,
  "extensionBadge.remoteForeground": p.bg_darkest,
  "extensionButton.prominentBackground": p.primary,
  "extensionButton.prominentForeground": p.bg_darkest,
  "extensionButton.prominentHoverBackground": p.accent3,
  "extensionIcon.preReleaseForeground": p.tertiary,
  "extensionIcon.starForeground": p.primary,
  "extensionIcon.verifiedForeground": p.secondary,

  // Symbol Icon
  "symbolIcon.arrayForeground": p.tertiary,
  "symbolIcon.classForeground": p.secondary,
  "symbolIcon.colorForeground": p.accent1,
  "symbolIcon.constantForeground": p.tertiary,
  "symbolIcon.constructorForeground": p.secondary,
  "symbolIcon.enumeratorForeground": p.tertiary,
  "symbolIcon.enumeratorMemberForeground": p.tertiary,
  "symbolIcon.eventForeground": p.primary,
  "symbolIcon.fieldForeground": p.tertiary,
  "symbolIcon.fileForeground": p.fg_muted,
  "symbolIcon.folderForeground": p.fg_muted,
  "symbolIcon.functionForeground": p.secondary,
  "symbolIcon.interfaceForeground": p.secondary,
  "symbolIcon.keyForeground": p.tertiary,
  "symbolIcon.keywordForeground": p.primary,
  "symbolIcon.methodForeground": p.secondary,
  "symbolIcon.moduleForeground": p.fg_muted,
  "symbolIcon.namespaceForeground": p.tertiary,
  "symbolIcon.nullForeground": p.tertiary,
  "symbolIcon.numberForeground": p.tertiary,
  "symbolIcon.objectForeground": p.tertiary,
  "symbolIcon.operatorForeground": p.primary,
  "symbolIcon.packageForeground": p.fg_muted,
  "symbolIcon.propertyForeground": p.tertiary,
  "symbolIcon.referenceForeground": p.secondary,
  "symbolIcon.snippetForeground": p.accent1,
  "symbolIcon.stringForeground": p.accent1,
  "symbolIcon.structForeground": p.secondary,
  "symbolIcon.textForeground": p.fg_main,
  "symbolIcon.typeParameterForeground": p.secondary,
  "symbolIcon.unitForeground": p.tertiary,
  "symbolIcon.variableForeground": p.tertiary,

  // Diff Editor
  "diffEditor.border": p.bg_secondary,
  "diffEditor.diagonalFill": p.border_muted,
  "diffEditor.insertedLineBackground": p.success_bg,
  "diffEditor.insertedTextBackground": p.success_bg,
  "diffEditor.removedLineBackground": p.error_bg,
  "diffEditor.removedTextBackground": p.error_bg,
  "diffEditorOverview.insertedForeground": p.success_alpha,
  "diffEditorOverview.removedForeground": p.error_alpha,

  // Debug
  "debugExceptionWidget.background": p.bg_panel,
  "debugExceptionWidget.border": p.border_subtle,
  "debugIcon.breakpointCurrentStackframeForeground": p.tertiary,
  "debugIcon.breakpointDisabledForeground": p.fg_dim,
  "debugIcon.breakpointForeground": p.tertiary,
  "debugIcon.breakpointStackframeForeground": p.tertiary,
  "debugIcon.breakpointUnverifiedForeground": p.fg_muted,
  "debugIcon.continueForeground": p.tertiary,
  "debugIcon.disconnectForeground": p.fg_muted,
  "debugIcon.pauseForeground": p.tertiary,
  "debugIcon.restartForeground": p.secondary,
  "debugIcon.startForeground": p.primary,
  "debugIcon.stepBackForeground": p.tertiary,
  "debugIcon.stepIntoForeground": p.tertiary,
  "debugIcon.stepOutForeground": p.tertiary,
  "debugIcon.stepOverForeground": p.tertiary,
  "debugIcon.stopForeground": p.error,
  "debugToolBar.background": p.bg_panel,
  "debugToolBar.border": p.bg_secondary,
});

/**
 * Token colors for syntax highlighting
 */
const tokenColors = (p: PaletteProps) =>
  [
    /* comment */
    {
      scope: ["comment"],
      settings: { foreground: p.fg_comment, fontStyle: "italic" },
    },

    /* contants */
    {
      scope: ["constant", "constant.numeric", "constant.language"],
      settings: { foreground: p.tertiary },
    },

    /* entity */
    { scope: ["entity.name"], settings: { foreground: p.secondary } },
    {
      scope: [
        "entity.name.section",
        "entity.name.tag",
        "entity.name.namespace",
        "entity.name.type",
      ],
      settings: { foreground: p.primary },
    },
    {
      scope: ["entity.other.attribute-name", "entity.other.inherited-class"],
      settings: { foreground: p.secondary, fontStyle: "italic" },
    },
    {
      scope: ["entity.name.class", "entity.name.struct"],
      settings: { foreground: p.tertiary },
    },
    {
      scope: ["entity.name.function"],
      settings: { foreground: p.secondary, fontStyle: "italic" },
    },

    /* invalid */
    {
      scope: ["invalid"],
      settings: { foreground: p.error, fontStyle: "underline" },
    },
    {
      scope: ["invalid.deprecated"],
      settings: { foreground: p.fg_muted, fontStyle: "strikethrough" },
    },

    /* keyword */
    {
      scope: ["keyword", "keyword.operator"],
      settings: { foreground: p.secondary_hover },
    },

    /* markup */
    {
      scope: ["markup.heading"],
      settings: { foreground: p.primary, fontStyle: "bold" },
    },
    {
      scope: ["markup.bold.markdown", "markup.bold"],
      settings: { foreground: p.secondary, fontStyle: "bold" },
    },
    {
      scope: ["markup.italic.markdown", "markup.italic"],
      settings: { foreground: p.secondary, fontStyle: "italic" },
    },
    { scope: ["markup.link"], settings: { foreground: p.accent1 } },
    {
      scope: ["markup.inserted.diff"],
      settings: { foreground: p.success },
    },
    { scope: ["markup.deleted.diff"], settings: { foreground: p.error } },

    /* meta */
    { scope: ["meta.diff.range"], settings: { foreground: p.secondary } },
    { scope: ["meta.tag", "meta.brace"], settings: { foreground: p.fg_dim } },
    {
      scope: ["meta.import", "meta.export"],
      settings: { foreground: p.primary },
    },
    {
      scope: "meta.directive.vue",
      settings: { foreground: p.secondary_alpha, fontStyle: "italic" },
    },
    { scope: "meta.property-name.css", settings: { foreground: p.primary } },
    { scope: "meta.property-value.css", settings: { foreground: p.warning } },
    { scope: "meta.tag.other.html", settings: { foreground: p.tertiary } },

    /* punctuation */
    {
      scope: [
        "punctuation",
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.accessor",
      ],
      settings: { foreground: p.fg_muted },
    },
    { scope: ["punctuation.accessor"], settings: { foreground: p.accent3 } },
    {
      scope: ["punctuation.definition.string"],
      settings: { foreground: p.accent1 },
    },
    {
      scope: [
        "punctuation.definition.tag",
        "punctuation.separator.key-value.html",
        "punctuation.definition.generic.begin.html",
        "punctuation.definition.section.embedded",
      ],
      settings: { foreground: p.secondary_alpha },
    },

    { scope: ["string"], settings: { foreground: p.accent1_fade } },
    {
      scope: ["storage.type", "storage.modifier"],
      settings: { foreground: p.primary },
    },

    /* support */
    { scope: ["support"], settings: { foreground: p.primary } },
    { scope: ["support.constant"], settings: { foreground: p.warning } },
    {
      scope: ["support.type.property-name"],
      settings: { foreground: alpha(p.fg_main, 0.7) },
    },
    {
      scope: ["support.type.property-name.json"],
      settings: { foreground: p.fg_main_alpha },
    },
    {
      scope: ["support.function"],
      settings: { foreground: p.secondary, fontStyle: "italic" },
    },

    /* variable */
    { scope: ["variable"], settings: { foreground: p.fg_main } },
    {
      scope: [
        "variable.other",
        "variable.other.property",
        "variable.other.object.property",
        "variable.language",
        "variable.function",
        "variable.argument",
        "meta.object-literal.key",
      ],
      settings: { foreground: p.fg_main },
    },
    {
      scope: ["variable.parameter"],
      settings: { foreground: p.accent2, fontStyle: "italic" },
    },
  ] satisfies TokenColor[];

export { baseStructure, coreColors, extendedColors, tokenColors };
