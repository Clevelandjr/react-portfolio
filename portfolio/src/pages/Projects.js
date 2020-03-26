import React from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Work Day Scheduler</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <h1>Password Generator</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <h1>Project:Spontango</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <h1>Note Taker</h1>
        </Col>
      </Row>
      
    
    </Container>
     
    </div>
   
    
  )
}
 
export default Projects;