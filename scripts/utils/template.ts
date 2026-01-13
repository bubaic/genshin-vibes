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
const coreColors = (palette: PaletteProps) => ({
  // Editor
  "editor.background": palette.bg_main,
  "editor.foreground": palette.fg_main,
  "editorCursor.foreground": palette.secondary,
  "editor.selectionBackground": palette.selection_bg,
  "editor.lineHighlightBackground": palette.line_highlight,
  "editorLineNumber.foreground": palette.fg_dim,
  "editorLineNumber.activeForeground": palette.secondary,
  "editorIndentGuide.background": palette.indent_guide,
  "editorIndentGuide.activeBackground": palette.fg_dim,
  "editorWhitespace.foreground": palette.indent_guide,
  "editorBracketMatch.background": palette.primary_subtle,
  "editorBracketMatch.border": palette.primary,
  "editorGutter.background": palette.bg_main,
  "editor.findMatchBackground": palette.warning_subtle,
  "editor.findMatchBorder": palette.warning_alpha,
  "editor.findMatchForeground": palette.fg_main,
  "editor.findMatchHighlightBackground": palette.border_muted,
  "editor.findMatchHighlightForeground": palette.fg_main_alpha,
  "editor.findRangeHighlightBackground": palette.border_muted,
  "editor.findRangeHighlightBorder": palette.transparent,
  "editor.focusedStackFrameHighlightBackground": palette.border_subtle,
  "editor.foldBackground": palette.border_subtle,
  "editor.hoverHighlightBackground": palette.transparent,
  "editor.inactiveSelectionBackground": palette.selection_inactive,
  "editor.inlineValuesBackground": palette.transparent,
  "editor.inlineValuesForeground": palette.tertiary,
  "editor.lineHighlightBorder": palette.transparent,
  "editor.linkedEditingBackground": palette.border_subtle,
  "editor.rangeHighlightBackground": palette.selection_inactive,
  "editor.selectionForeground": palette.fg_main,
  "editor.selectionHighlightBackground": palette.border_subtle,
  "editor.selectionHighlightBorder": palette.bg_main,
  "editor.snippetFinalTabstopHighlightBackground": palette.border_subtle,
  "editor.snippetFinalTabstopHighlightBorder": palette.bg_panel,
  "editor.snippetTabstopHighlightBackground": palette.border_subtle,
  "editor.snippetTabstopHighlightBorder": palette.bg_panel,
  "editor.stackFrameHighlightBackground": palette.border_subtle,
  "editor.symbolHighlightBackground": palette.border_subtle,
  "editor.symbolHighlightBorder": palette.transparent,
  "editor.wordHighlightBackground": palette.border_subtle,
  "editor.wordHighlightBorder": palette.transparent,
  "editor.wordHighlightStrongBackground": palette.border_subtle,
  "editor.wordHighlightStrongBorder": palette.border_subtle,
  "editorGroupHeader.tabsBackground": palette.bg_darkest,

  // Tabs
  "tab.activeBackground": palette.bg_darkest,
  "tab.activeForeground": palette.fg_main,
  "tab.inactiveBackground": palette.bg_panel,
  "tab.inactiveForeground": palette.fg_muted,
  // "tab.border": palette.accent2,

  // Activity Bar
  "activityBar.background": palette.bg_darkest,
  "activityBar.foreground": palette.secondary,
  "activityBar.inactiveForeground": palette.fg_dim,
  "activityBarBadge.background": palette.primary,
  "activityBarBadge.foreground": palette.bg_darkest,
  "activityBar.activeBorder": palette.primary,
  "activityBar.dropBorder": palette.bg_panel,

  // Sidebar
  "sideBar.background": palette.bg_panel,
  "sideBarSectionHeader.background": palette.bg_secondary,
  "sideBarSectionHeader.foreground": palette.secondary,
  "sideBarTitle.foreground": palette.tertiary,

  // Status Bar
  "statusBar.background": palette.primary,
  "statusBar.foreground": palette.bg_darkest,
  "statusBar.debuggingBackground": palette.error,
  "statusBar.debuggingForeground": palette.bg_darkest,
  "statusBar.noFolderBackground": palette.tertiary,

  // Title Bar
  "titleBar.activeBackground": palette.bg_panel,
  "titleBar.activeForeground": palette.fg_main,
  "titleBar.inactiveBackground": palette.bg_main,
  "titleBar.inactiveForeground": palette.fg_muted,

  // Buttons & Inputs
  "button.background": palette.tertiary,
  "button.foreground": palette.bg_darkest,
  "button.hoverBackground": palette.primary,
  "input.background": palette.bg_secondary,
  "input.foreground": palette.fg_main,
  "input.border": palette.border_main,
  "input.placeholderForeground": palette.fg_dim,

  // Terminal
  "terminal.background": palette.bg_main,
  "terminal.foreground": palette.fg_main,
  "terminal.ansiBlack": palette.bg_darkest,
  "terminal.ansiRed": palette.error,
  "terminal.ansiGreen": palette.success,
  "terminal.ansiYellow": palette.warning,
  "terminal.ansiBlue": palette.primary,
  "terminal.ansiMagenta": palette.secondary,
  "terminal.ansiCyan": palette.accent3,
  "terminal.ansiWhite": palette.fg_dim,

  // Git
  "gitDecoration.modifiedResourceForeground": palette.tertiary,
  "gitDecoration.deletedResourceForeground": palette.error,
  "gitDecoration.untrackedResourceForeground": palette.primary,
  "gitDecoration.ignoredResourceForeground": palette.fg_comment,
});

/**
 * Extended colors for more comprehensive theming
 */
const extendedColors = (palette: PaletteProps) => ({
  // Menu
  "menu.background": palette.bg_panel,
  "menu.border": palette.selection_inactive,
  "menu.foreground": palette.fg_main,
  "menu.selectionBackground": palette.border_subtle,
  "menu.selectionBorder": palette.bg_secondary,
  "menu.selectionForeground": palette.fg_main,
  "menu.separatorBackground": palette.border_muted,
  "menubar.selectionBackground": palette.border_subtle,
  "menubar.selectionBorder": palette.selection_inactive,
  "menubar.selectionForeground": palette.fg_main,

  // Toolbar
  "toolbar.activeBackground": palette.border_muted,
  "toolbar.hoverBackground": palette.border_subtle,

  // Panel
  "panel.background": palette.bg_panel,
  "panel.border": palette.border_main,
  "panel.dropBorder": palette.bg_secondary,
  "panelInput.border": palette.bg_panel,
  "panelSection.dropBackground": palette.border_subtle,
  "panelSectionHeader.background": palette.bg_panel,
  "panelSectionHeader.foreground": palette.fg_main,
  "panelTitle.activeBorder": palette.border_muted,
  "panelTitle.activeForeground": palette.fg_main,
  "panelTitle.inactiveForeground": palette.fg_muted,

  // Charts
  "charts.blue": palette.primary,
  "charts.foreground": palette.fg_main,
  "charts.green": palette.success,
  "charts.lines": palette.tertiary,
  "charts.orange": palette.accent1,
  "charts.purple": palette.secondary,
  "charts.red": palette.error,
  "charts.yellow": palette.warning,

  // Checkbox
  "checkbox.background": palette.bg_panel,
  "checkbox.border": palette.border_subtle,
  "checkbox.foreground": palette.fg_main,

  // Button
  "button.secondaryBackground": palette.bg_panel,
  "button.secondaryForeground": palette.fg_main,
  "button.secondaryHoverBackground": palette.bg_secondary,

  // Tree
  "tree.indentGuidesStroke": palette.tertiary,

  // Walk Through
  "walkThrough.embeddedEditorBackground": palette.bg_main,

  // Welcome Page
  "welcomePage.background": palette.bg_main,

  // Widget
  "widget.shadow": palette.shadow,

  // Window
  "window.activeBorder": palette.bg_panel,
  "window.inactiveBorder": palette.bg_panel,

  // Side Bar
  "sideBar.dropBackground": palette.bg_panel,
  "sideBar.foreground": palette.fg_muted,
  "sideBarSectionHeader.border": palette.border_subtle,

  // Status Bar
  "statusBar.noFolderForeground": palette.fg_main,
  "statusBarItem.activeBackground": palette.border_muted,
  "statusBarItem.errorBackground": palette.list_active_bg,
  "statusBarItem.errorForeground": palette.error,
  "statusBarItem.hoverBackground": palette.border_subtle,
  "statusBarItem.prominentBackground": palette.bg_secondary,
  "statusBarItem.prominentForeground": palette.fg_main,
  "statusBarItem.prominentHoverBackground": palette.border_subtle,
  "statusBarItem.remoteBackground": palette.tertiary,
  "statusBarItem.remoteForeground": palette.bg_main,

  // Tab
  "tab.activeModifiedBorder": palette.secondary,
  "tab.hoverBackground": palette.border_subtle,
  "tab.inactiveModifiedBorder": palette.transparent,
  "tab.lastPinnedBorder": palette.fg_dim,
  "tab.unfocusedActiveBackground": palette.bg_secondary,
  "tab.activeBorderTop": palette.primary,
  "tab.unfocusedHoverBackground": palette.border_subtle,
  "tab.unfocusedInactiveBackground": palette.bg_panel,
  "tab.unfocusedInactiveModifiedBorder": palette.secondary_alpha,

  // Terminal
  "terminal.ansiBrightBlack": palette.ansi_bright_black,
  "terminal.ansiBrightBlue": palette.ansi_bright_blue,
  "terminal.ansiBrightCyan": palette.ansi_bright_cyan,
  "terminal.ansiBrightGreen": palette.ansi_bright_green,
  "terminal.ansiBrightMagenta": palette.ansi_bright_magenta,
  "terminal.ansiBrightRed": palette.ansi_bright_red,
  "terminal.ansiBrightWhite": palette.ansi_bright_white,
  "terminal.ansiBrightYellow": palette.ansi_bright_yellow,
  "terminal.dropBackground": palette.border_subtle,
  "terminal.selectionBackground": palette.border_subtle,
  "terminal.tab.activeBorder": palette.fg_main,
  "terminalCursor.background": palette.fg_main,
  "terminalCursor.foreground": palette.fg_dim,

  // Settings
  "settings.focusedRowBackground": palette.bg_panel,
  "settings.focusedRowBorder": palette.border_subtle,
  "settings.headerForeground": palette.fg_main,
  "settings.modifiedItemIndicator": palette.primary,
  "settings.rowHoverBackground": palette.bg_panel,

  // Text
  "textBlockQuote.background": palette.bg_panel,
  "textBlockQuote.border": palette.border_subtle,
  "textCodeBlock.background": palette.bg_panel,
  "textLink.activeForeground": palette.secondary_hover,
  "textLink.foreground": palette.secondary,
  "textPreformat.foreground": palette.warning,
  "textSeparator.foreground": palette.tertiary,

  // Peek View
  "peekView.border": palette.primary,
  "peekViewEditor.background": palette.bg_panel,
  "peekViewEditor.matchHighlightBackground": palette.border_muted,
  "peekViewResult.background": palette.bg_secondary,
  "peekViewResult.fileForeground": palette.tertiary,
  "peekViewResult.lineForeground": palette.tertiary,
  "peekViewResult.matchHighlightBackground": palette.border_muted,
  "peekViewResult.selectionBackground": palette.border_subtle,
  "peekViewResult.selectionForeground": palette.fg_main,
  "peekViewTitle.background": palette.bg_secondary,
  "peekViewTitleDescription.foreground": palette.tertiary,

  // Scrollbar
  "scrollbar.shadow": palette.shadow,
  "scrollbarSlider.activeBackground": palette.tertiary_alpha,
  "scrollbarSlider.background": palette.scrollbar_bg,
  "scrollbarSlider.hoverBackground": palette.scrollbar_hover,

  // Search Editor
  "searchEditor.findMatchBackground": palette.border_subtle,

  // Selection
  "selection.background": palette.border_muted,

  // Progress Bar
  "progressBar.background": palette.primary,

  // Quick Input
  "quickInput.background": palette.bg_panel,
  "quickInput.foreground": palette.tertiary,
  "quickInputList.focusBackground": palette.border_subtle,
  "quickInputList.focusForeground": palette.fg_main,
  "quickInputList.focusIconForeground": palette.fg_main,

  // Picker Group
  "pickerGroup.border": palette.border_muted,
  "pickerGroup.foreground": palette.secondary,

  // Ports
  "ports.iconRunningProcessForeground": palette.primary,

  // Problems
  "problemsErrorIcon.foreground": palette.error,
  "problemsInfoIcon.foreground": palette.secondary,
  "problemsWarningIcon.foreground": palette.warning,

  // Notification
  "notificationCenter.border": palette.border_subtle,
  "notificationCenterHeader.background": palette.bg_panel,
  "notificationCenterHeader.foreground": palette.tertiary,
  "notificationLink.foreground": palette.secondary,
  "notifications.background": palette.bg_panel,
  "notifications.border": palette.border_subtle,
  "notifications.foreground": palette.fg_main,
  "notificationsErrorIcon.foreground": palette.error,
  "notificationsInfoIcon.foreground": palette.secondary,
  "notificationsWarningIcon.foreground": palette.warning,
  "notificationToast.border": palette.border_subtle,

  // Minimap
  "minimap.background": palette.bg_panel,
  "minimap.errorHighlight": palette.error_alpha,
  "minimap.findMatchHighlight": palette.border_subtle,
  "minimap.selectionHighlight": palette.border_subtle,
  "minimap.warningHighlight": palette.warning_alpha,
  "minimapGutter.addedBackground": palette.success,
  "minimapGutter.deletedBackground": palette.error,
  "minimapGutter.modifiedBackground": palette.tertiary,
  "minimapSlider.activeBackground": palette.border_muted,
  "minimapSlider.background": palette.border_subtle,
  "minimapSlider.hoverBackground": palette.border_subtle,

  // Notebook
  "notebook.cellBorderColor": palette.secondary_alpha,
  "notebook.cellEditorBackground": palette.bg_panel,
  "notebook.cellHoverBackground": palette.bg_secondary_alpha,
  "notebook.focusedCellBackground": palette.selection_inactive,
  "notebook.focusedCellBorder": palette.secondary,
  "notebook.outputContainerBackgroundColor": palette.selection_inactive,

  // Merge
  "merge.border": palette.bg_secondary,
  "merge.commonContentBackground": palette.border_subtle,
  "merge.commonHeaderBackground": palette.border_subtle,
  "merge.currentContentBackground": palette.success_merge,
  "merge.currentHeaderBackground": palette.success_merge,
  "merge.incomingContentBackground": palette.primary_merge,
  "merge.incomingHeaderBackground": palette.primary_merge,

  // Keybinding
  "keybindingLabel.background": palette.bg_secondary,
  "keybindingLabel.border": palette.border_muted,
  "keybindingLabel.bottomBorder": palette.border_muted,
  "keybindingLabel.foreground": palette.secondary,
  "keybindingTable.headerBackground": palette.bg_secondary,
  "keybindingTable.rowsBackground": palette.bg_panel,

  // Icon
  "icon.foreground": palette.tertiary,

  // Input
  "inputOption.activeBackground": palette.primary_subtle,
  "inputOption.activeBorder": palette.primary,
  "inputOption.activeForeground": palette.primary,
  "inputValidation.errorBackground": palette.error_input_bg,
  "inputValidation.errorBorder": palette.error,
  "inputValidation.errorForeground": palette.error,
  "inputValidation.infoBackground": palette.info_input_bg,
  "inputValidation.infoBorder": palette.secondary,
  "inputValidation.infoForeground": palette.secondary,
  "inputValidation.warningBackground": palette.warning_input_bg,
  "inputValidation.warningBorder": palette.tertiary,
  "inputValidation.warningForeground": palette.warning,

  // List
  "list.activeSelectionBackground": palette.list_active_bg,
  "list.activeSelectionForeground": palette.fg_main,
  "list.deemphasizedForeground": palette.tertiary,
  "list.dropBackground": palette.bg_panel,
  "list.errorForeground": palette.error,
  "list.filterMatchBackground": palette.bg_panel,
  "list.filterMatchBorder": palette.primary,
  "list.focusBackground": palette.list_focus_bg,
  "list.focusForeground": palette.fg_main,
  "list.focusOutline": palette.border_subtle,
  "list.highlightForeground": palette.primary,
  "list.hoverBackground": palette.line_highlight,
  "list.hoverForeground": palette.fg_main,
  "list.inactiveFocusBackground": palette.line_highlight,
  "list.inactiveSelectionBackground": palette.bg_secondary,
  "list.inactiveSelectionForeground": palette.fg_main,
  "list.invalidItemForeground": palette.error,
  "list.warningForeground": palette.warning,
  "listFilterWidget.background": palette.bg_panel,
  "listFilterWidget.noMatchesOutline": palette.error,
  "listFilterWidget.outline": palette.bg_secondary,

  // Editor Bracket Highlight
  "editorBracketHighlight.foreground1": palette.error_alpha,
  "editorBracketHighlight.foreground2": palette.tertiary_alpha,
  "editorBracketHighlight.foreground3": palette.warning_alpha,
  "editorBracketHighlight.foreground4": palette.secondary_alpha,
  "editorBracketHighlight.foreground5": palette.primary_alpha,
  "editorBracketHighlight.foreground6": palette.accent3_alpha,

  // Editor Bracket Pair Guide
  "editorBracketPairGuide.activeBackground1": palette.tertiary,
  "editorBracketPairGuide.activeBackground2": palette.primary,
  "editorBracketPairGuide.activeBackground3": palette.secondary,
  "editorBracketPairGuide.activeBackground4": palette.accent3,
  "editorBracketPairGuide.activeBackground5": palette.warning,
  "editorBracketPairGuide.activeBackground6": palette.error,
  "editorBracketPairGuide.background1": palette.tertiary_alpha,
  "editorBracketPairGuide.background2": palette.primary_alpha,
  "editorBracketPairGuide.background3": palette.secondary_alpha,
  "editorBracketPairGuide.background4": palette.accent3_alpha,
  "editorBracketPairGuide.background5": palette.warning_alpha,
  "editorBracketPairGuide.background6": palette.error_alpha,

  // Editor Code Lens
  "editorCodeLens.foreground": palette.primary,

  // Editor Cursor
  "editorCursor.background": palette.fg_main,

  // Editor Error/Warning/Info/Hint
  "editorError.border": palette.transparent,
  "editorError.foreground": palette.error,
  "editorWarning.border": palette.transparent,
  "editorWarning.foreground": palette.warning,
  "editorInfo.border": palette.bg_secondary,
  "editorInfo.foreground": palette.secondary,
  "editorHint.border": palette.transparent,
  "editorHint.foreground": palette.tertiary,

  // Editor Ghost Text
  "editorGhostText.foreground": palette.tertiary,

  // Editor Group
  "editorGroup.border": palette.transparent,
  "editorGroup.dropBackground": palette.bg_panel,
  "editorGroup.emptyBackground": palette.transparent,
  "editorGroup.focusedEmptyBorder": palette.transparent,
  "editorGroupHeader.noTabsBackground": palette.transparent,
  "editorGroupHeader.tabsBackground": palette.bg_darkest,
  "editorGroupHeader.tabsBorder": palette.transparent,

  // Editor Gutter
  "editorGutter.addedBackground": palette.success,
  "editorGutter.commentRangeForeground": palette.bg_secondary,
  "editorGutter.deletedBackground": palette.error,
  "editorGutter.foldingControlForeground": palette.secondary,
  "editorGutter.modifiedBackground": palette.tertiary,

  // Editor Hover Widget
  "editorHoverWidget.background": palette.bg_secondary,
  "editorHoverWidget.border": palette.border_main,
  "editorHoverWidget.foreground": palette.tertiary,
  "editorHoverWidget.highlightForeground": palette.fg_main,
  "editorHoverWidget.statusBarBackground": palette.transparent,

  // Editor Indent Guide
  "editorIndentGuide.activeBackground1": palette.fg_dim,
  "editorIndentGuide.background1": palette.indent_guide,

  // Editor Inlay Hint
  "editorInlayHint.background": palette.inlay_bg,
  "editorInlayHint.foreground": palette.inlay_fg,
  "editorInlayHint.parameterBackground": palette.inlay_bg,
  "editorInlayHint.parameterForeground": palette.inlay_param,
  "editorInlayHint.typeBackground": palette.inlay_bg,
  "editorInlayHint.typeForeground": palette.inlay_type,

  // Editor Light Bulb
  "editorLightBulb.foreground": palette.tertiary,
  "editorLightBulbAutoFix.foreground": palette.primary,

  // Editor Link
  "editorLink.activeForeground": palette.primary,

  // Editor Marker Navigation
  "editorMarkerNavigation.background": palette.bg_panel,
  "editorMarkerNavigationError.background": palette.bg_panel,
  "editorMarkerNavigationInfo.background": palette.bg_panel,
  "editorMarkerNavigationWarning.background": palette.bg_panel,

  // Editor Overview Ruler
  "editorOverviewRuler.addedForeground": palette.success_alpha,
  "editorOverviewRuler.background": palette.bg_main,
  "editorOverviewRuler.border": palette.border_muted,
  "editorOverviewRuler.bracketMatchForeground": palette.tertiary,
  "editorOverviewRuler.commentForeground": palette.comment_alpha,
  "editorOverviewRuler.commentUnresolvedForeground": palette.warning_alpha,
  "editorOverviewRuler.commonContentForeground": palette.selection_inactive,
  "editorOverviewRuler.currentContentForeground": palette.success,
  "editorOverviewRuler.deletedForeground": palette.error_alpha,
  "editorOverviewRuler.errorForeground": palette.error_alpha,
  "editorOverviewRuler.findMatchForeground": palette.border_muted,
  "editorOverviewRuler.incomingContentForeground": palette.primary,
  "editorOverviewRuler.infoForeground": palette.secondary_alpha,
  "editorOverviewRuler.modifiedForeground": palette.tertiary_alpha,
  "editorOverviewRuler.rangeHighlightForeground": palette.border_muted,
  "editorOverviewRuler.selectionHighlightForeground": palette.border_muted,
  "editorOverviewRuler.warningForeground": palette.warning_alpha,
  "editorOverviewRuler.wordHighlightForeground": palette.border_subtle,
  "editorOverviewRuler.wordHighlightStrongForeground": palette.border_muted,

  // Editor Pane
  "editorPane.background": palette.transparent,

  // Editor Ruler
  "editorRuler.foreground": palette.border_muted,

  // Editor Suggest Widget
  "editorSuggestWidget.background": palette.bg_secondary,
  "editorSuggestWidget.border": palette.border_main,
  "editorSuggestWidget.focusHighlightForeground": palette.primary,
  "editorSuggestWidget.foreground": palette.tertiary,
  "editorSuggestWidget.highlightForeground": palette.accent1,
  "editorSuggestWidget.selectedBackground": palette.border_subtle,
  "editorSuggestWidget.selectedForeground": palette.fg_main,
  "editorSuggestWidget.selectedIconForeground": palette.fg_main,

  // Editor Unnecessary Code
  "editorUnnecessaryCode.border": palette.transparent,
  "editorUnnecessaryCode.opacity": palette.fg_main_fade,

  // Editor Widget
  "editorWidget.background": palette.bg_secondary,
  "editorWidget.border": palette.border_main,
  "editorWidget.foreground": palette.tertiary,
  "editorWidget.resizeBorder": palette.fg_dim,

  // Dropdowns
  "dropdown.background": palette.bg_secondary,
  "dropdown.foreground": palette.fg_main,
  "dropdown.border": palette.border_main,
  "dropdown.listBackground": palette.bg_secondary,

  // Error Foreground
  errorForeground: palette.error,

  // Focus Border
  focusBorder: palette.border_subtle,

  // Foreground
  foreground: palette.fg_main,

  // Description
  descriptionForeground: palette.tertiary,

  // git
  "git.blame.editorDecorationForeground": palette.fg_dim,
  "gitDecoration.addedResourceForeground": palette.success,
  "gitDecoration.conflictingResourceForeground": palette.warning,
  "gitDecoration.renamedResourceForeground": palette.secondary,
  "gitDecoration.stageDeletedResourceForeground": palette.error,
  "gitDecoration.stageModifiedResourceForeground": palette.primary,
  "gitDecoration.submoduleResourceForeground": palette.warning,

  // Badge
  "badge.background": palette.primary,
  "badge.foreground": palette.bg_darkest,

  // Breadcrumbs
  "breadcrumb.foreground": palette.fg_main_fade,
  "breadcrumb.focusForeground": palette.secondary,
  "breadcrumb.activeSelectionForeground": palette.primary,
  "breadcrumb.background": palette.bg_main,
  "breadcrumbPicker.background": palette.bg_panel,

  // Banner
  "banner.background": palette.bg_panel,
  "banner.foreground": palette.fg_main,
  "banner.iconForeground": palette.tertiary,

  // Extension
  "extensionBadge.remoteBackground": palette.secondary,
  "extensionBadge.remoteForeground": palette.bg_darkest,
  "extensionButton.prominentBackground": palette.primary,
  "extensionButton.prominentForeground": palette.bg_darkest,
  "extensionButton.prominentHoverBackground": palette.accent3,
  "extensionIcon.preReleaseForeground": palette.tertiary,
  "extensionIcon.starForeground": palette.primary,
  "extensionIcon.verifiedForeground": palette.secondary,

  // Symbol Icon
  "symbolIcon.arrayForeground": palette.tertiary,
  "symbolIcon.classForeground": palette.secondary,
  "symbolIcon.colorForeground": palette.accent1,
  "symbolIcon.constantForeground": palette.tertiary,
  "symbolIcon.constructorForeground": palette.secondary,
  "symbolIcon.enumeratorForeground": palette.tertiary,
  "symbolIcon.enumeratorMemberForeground": palette.tertiary,
  "symbolIcon.eventForeground": palette.primary,
  "symbolIcon.fieldForeground": palette.tertiary,
  "symbolIcon.fileForeground": palette.fg_muted,
  "symbolIcon.folderForeground": palette.fg_muted,
  "symbolIcon.functionForeground": palette.secondary,
  "symbolIcon.interfaceForeground": palette.secondary,
  "symbolIcon.keyForeground": palette.tertiary,
  "symbolIcon.keywordForeground": palette.primary,
  "symbolIcon.methodForeground": palette.secondary,
  "symbolIcon.moduleForeground": palette.fg_muted,
  "symbolIcon.namespaceForeground": palette.tertiary,
  "symbolIcon.nullForeground": palette.tertiary,
  "symbolIcon.numberForeground": palette.tertiary,
  "symbolIcon.objectForeground": palette.tertiary,
  "symbolIcon.operatorForeground": palette.primary,
  "symbolIcon.packageForeground": palette.fg_muted,
  "symbolIcon.propertyForeground": palette.tertiary,
  "symbolIcon.referenceForeground": palette.secondary,
  "symbolIcon.snippetForeground": palette.accent1,
  "symbolIcon.stringForeground": palette.accent1,
  "symbolIcon.structForeground": palette.secondary,
  "symbolIcon.textForeground": palette.fg_main,
  "symbolIcon.typeParameterForeground": palette.secondary,
  "symbolIcon.unitForeground": palette.tertiary,
  "symbolIcon.variableForeground": palette.tertiary,

  // Diff Editor
  "diffEditor.border": palette.bg_secondary,
  "diffEditor.diagonalFill": palette.border_muted,
  "diffEditor.insertedLineBackground": palette.success_bg,
  "diffEditor.insertedTextBackground": palette.success_bg,
  "diffEditor.removedLineBackground": palette.error_bg,
  "diffEditor.removedTextBackground": palette.error_bg,
  "diffEditorOverview.insertedForeground": palette.success_alpha,
  "diffEditorOverview.removedForeground": palette.error_alpha,

  // Debug
  "debugExceptionWidget.background": palette.bg_panel,
  "debugExceptionWidget.border": palette.border_subtle,
  "debugIcon.breakpointCurrentStackframeForeground": palette.tertiary,
  "debugIcon.breakpointDisabledForeground": palette.fg_dim,
  "debugIcon.breakpointForeground": palette.tertiary,
  "debugIcon.breakpointStackframeForeground": palette.tertiary,
  "debugIcon.breakpointUnverifiedForeground": palette.fg_muted,
  "debugIcon.continueForeground": palette.tertiary,
  "debugIcon.disconnectForeground": palette.fg_muted,
  "debugIcon.pauseForeground": palette.tertiary,
  "debugIcon.restartForeground": palette.secondary,
  "debugIcon.startForeground": palette.primary,
  "debugIcon.stepBackForeground": palette.tertiary,
  "debugIcon.stepIntoForeground": palette.tertiary,
  "debugIcon.stepOutForeground": palette.tertiary,
  "debugIcon.stepOverForeground": palette.tertiary,
  "debugIcon.stopForeground": palette.error,
  "debugToolBar.background": palette.bg_panel,
  "debugToolBar.border": palette.bg_secondary,
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

    { scope: ["string"], settings: { foreground: p.accent1 } },
    {
      scope: ["storage.type", "storage.modifier"],
      settings: { foreground: p.primary },
    },

    /* support */
    { scope: ["support"], settings: { foreground: p.primary } },
    { scope: ["support.constant"], settings: { foreground: p.warning } },
    {
      scope: ["support.function"],
      settings: { foreground: p.secondary, fontStyle: "italic" },
    },

    { scope: ["variable"], settings: { foreground: p.fg_main } },
    {
      scope: [
        "variable.other",
        "variable.other.property",
        "variable.other.object.property",
        "variable.language",
        "variable.function",
        "variable.argument",
        "support.type.property-name",
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
