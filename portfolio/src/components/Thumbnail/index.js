import React from 'react'; // Import the Component component from React
import {Route} from 'react-router-dom'; // Import the Route component
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <Route to={props.route}>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
  <div className="project-title">{props.title}</div>
  <div className="project-category">{props.category}</div>
      </Route>
    </div>
  );
}
 
export default Thumbnail;