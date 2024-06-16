import "./App.css";
import { Tldraw } from "tldraw";
import React from "react";

// Define your custom background component
const YourCustomBackground = () => {
  // Customize the background component as per your requirement
  return (
    <div
      className="bg-transparent w-full h-full" // Apply Tailwind CSS class to set background color to transparent
    >
      {/* This will set the background color to transparent */}
    </div>
  );
};

function App() {
 
  const components = {
    Background: YourCustomBackground,
    // Define other components if needed
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
      }}
    >
      <Tldraw components={components} />
    </div>
  );
}

export default App;
