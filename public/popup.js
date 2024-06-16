chrome.windows.getCurrent((window) => {
  const width = screen.availWidth; // Get the width of the screen
  const height = screen.availHeight; // Get the height of the screen
  // chrome.windows.update(window.id, { width, height });
  // chrome.windows.update(window.id, { state: "fullscreen" });
  window.open(src, "newWin", 'fullscreen="yes"');
});
