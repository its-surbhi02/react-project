import React from "react";
import ReactDOM from "react-dom/client";


 
const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste react Functional Component</h1>
      <h2>This is H2 tag</h2>
    </div>
  );
  // root.render(<HeaderComponent />);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
