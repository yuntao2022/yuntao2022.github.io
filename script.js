"use strict";

// The content and navigation work without JavaScript.
const year = document.getElementById("current-year");
if (year) year.textContent = String(new Date().getFullYear());
