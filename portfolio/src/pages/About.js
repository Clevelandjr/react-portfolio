import React from "react"
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
 
function About(props) {
  return (
    <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          I graduated in 2013 from Shaw University in Raleigh, NC. In my time at Shaw University,
           I earned a Bachelor of Science in Accounting. My Minor was Business Administration. 
           Shortly after college I moved to Newport News, Virginia and pursued a career at TMX 
           Finance. At TMX Finance I became a General Manager. When I became a general manager 
           and when i left the company, I was the youngest GM in my district. I left the company 
           after 6 years and moved to Charlotte North Carolina to pursue a career as a full stack 
           web developer. I have a friend thats been a web developer for over 10 years. He was the
            one who told me I would be great doing what he does. One of the reasons I want to become
             a full stack web developer is because of the constant learning. I love that there will
              always be new opportunities and challenges with this career. In a few years I see 
              myself advancing as a senior web developer for a company.
          </p>
          <p>
          Im originally from Brooklyn New York. My father was in the army so we constantly moved 
          around. In my spare time I love to work out and spend time with my family and friends. 
          My favorite hobby is basketball and I work out at least 3 times a week. I am also what
           you would call a foodie. I love to eat and will try any kind of food. I don't have any
          fur babies but I do have two children.
          </p>
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
            sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
            Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
            congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
            vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
            nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
            Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
            libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
            eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
            interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
            massa.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
  )
}
 
export default About;