"use strict";
(() => {
  // pages/release-notes/src/inline.js
  var param = new URLSearchParams(window.location.search).get("platform") || "integration";
  if (isAllowed(param)) {
    document.documentElement.dataset.platform = String(param);
  }
  function isAllowed(input) {
    const allowed = ["windows", "apple", "integration"];
    return allowed.includes(input);
  }
})();
