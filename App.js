import React from "react";
import ReactDOM from "react-dom/client";

/**
 * benefits of parcel
 * HMR - hot model reloading- it reload automatically
 * File Watcher Algorithm - which is written in C++ , Monitoring the file system for a given filepath
 * Bundling
 * Minify
 * Clearing our code- by removing console log.
 * Dev and Production Build
 * Super fast building algorithm
 * Image Optimization
 * Catching While Development - a built-in feature that stores and reuses data to improve performance
 * Compression
 * compatble with older version of browser
 * HTTPS on dev
 * Manage PORT Number
 * 
 */

// const heading = React.createElement("h1", {}, "Namaste react!");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);


const heading = React.createElement(
    "h1",
    {
        id:"title",
    },
    "Heading 1"
);
const heading2 = React.createElement(
    "h2",
    {
        id:"title",
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(container);