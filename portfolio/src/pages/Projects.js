import React from 'react';
import Thumbnail from "./components/Thumbnail"; // Import the Thumbnail component

 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        route=""
        image=""
        title=""
        category=""
      />
    </div>
  )
}
 
export default Projects;