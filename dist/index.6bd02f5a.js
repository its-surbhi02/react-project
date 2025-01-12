// import React from "react";
// import ReactDOM from "react-dom";
// const heading = React.createElement("h1", {}, "Namaste react!");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);
const heading = React.createElement("h1", {
    id: "title"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id: "title"
}, "Heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
