function onInstall() {
  onOpen();
}

function onOpen() {
  SpreadsheetApp
  .getUi()
  .createAddonMenu()                      // Add a new option in the Google Docs Add-ons Menu
  .addItem("Dictionary", "showSidebar")
  .addToUi();                             // Run the showSidebar function when someone clicks the menu
}

function showSidebar() {
  const html = HtmlService
    .createTemplateFromFile("sidebar")
    .evaluate()
    .setTitle("Dictionary - Search"); // The title shows in the sidebar
  SpreadsheetApp.getUi().showSidebar(html);
}

function fetchWord() {
  return SpreadsheetApp.getActiveSheet().getActiveCell().getValue();
}
