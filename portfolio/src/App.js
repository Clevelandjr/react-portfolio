import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);
}

export default App;
