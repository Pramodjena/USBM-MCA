// Import modules

const path = require("path");
console.log(path);

const rootDir = path.resolve(__dirname, "..");
console.log(rootDir); // C:\Users\hp\OneDrive\Desktop\USBM-MCA\Backend

// adding path
console.log(path.join("class-1", "path.js")); // class-1\path.js
