import React from 'react';
import Container from "../components/Container";
import Spontanago from "../../src/images/Spontanago.png";
import Directory from "../../src/images/Directory.png";
import Planner from "../../src/images/DayPlanner.png";
import Note from "../../src/images/NoteTaker.png";
import Workout from "../../src/images/WorkoutTracker.png";
import Password from "../../src/images/Password.png";




 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <Container style={{ marginTop: 30 }}>
      <div className="container-fluid-main outerBox">
            <div className="row portfolio">
                <div className="col-12">
                    
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h5> Spontanago: Spontaneous Event Planning</h5>
                        <a href="https://alyssabarnett06.github.io/Project1/" target="_blank"><img className="img-fluid" src={Spontanago} /></a>
                        <a href="https://github.com/alyssabarnett06/Project1" target="_blank">Github Repository</a>
                    </div>
                    <div className="col-md-6">
                        <h5> Employee Directory</h5>
                        <a href="https://frozen-lowlands-08726.herokuapp.com/" target="_blank"><img className="img-fluid" src={Directory} /></a>
                        <a href="https://github.com/Clevelandjr/employee-directory" target="_blank">Github Repository</a>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <h5> Day Planner</h5>
                        <a href="https://clevelandjr.github.io/DayPlanner/" target="_blank"><img className="img-fluid" src={Planner} /></a>
                        <a href="https://github.com/Clevelandjr/DayPlanner" target="_blank">Github Repository</a>
                    </div>
                    <div className="col-md-6">
                        <h5> Note Taker</h5>
                        <a href="https://clevelands-note-taker.herokuapp.com/" target="_blank"><img className="img-fluid" src={Note} /></a>
                        <a href="https://github.com/Clevelandjr/Note-Taker" target="_blank">Github Repository</a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h5> Workout Tracker</h5>
                        <a href="https://workout-tracker2020.herokuapp.com/exercise.html?id=5e583f4d062fa20017b81db5" target="_blank"><img className="img-fluid" src={Workout} /></a>
                        <a href="https://github.com/Clevelandjr/workout-tracker" target="_blank">Github Repository</a>
                    </div>
                    <div className="col-md-6">
                        <h5> Password Generator</h5>
                        <a href="https://clevelandjr.github.io/password/" target="_blank"><img className="img-fluid" src={Password} /></a>
                        <a href="https://github.com/Clevelandjr/password" target="_blank">Github
                                Repository</a>
                    </div>
                </div>
                <br/>
            </div>
        </div>
      
    </Container>  
  </div>

  )
}
    
    
     
  
   
    
 
export default Projects;