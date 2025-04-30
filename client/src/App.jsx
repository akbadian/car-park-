import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <Home />
    </div>
  )
}
export default App;

// This is the main component of the application. It imports the Home component and renders it inside a div with some styling.
// The div has a minimum height of the screen and a gray background, and it centers the Home component both vertically and horizontally.
// The Home component is responsible for displaying the welcome message and description of the application.
// The Home component is imported from the pages directory and is used to display the main content of the application.
// The App component is the main entry point of the application and is responsible for rendering the Home component.
// The App component is exported as the default export of the module, so it can be imported and used in other parts of the application.
// The App component is the main component of the application. It imports the Home component and renders it inside a div with some styling. 