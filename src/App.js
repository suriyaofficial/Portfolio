import './App.css';
import NavTab from './components/NavTab';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import AboutUs from './components/AboutUs';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import { HashLink } from 'react-router-hash-link';
import Experience from './components/Experience';
function App() {
  return (
    <div className='App'>
      <Router>
        <NavTab />

        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          {/* <Route path="experience" > </Route> */}
          <Route path="project" element={<Project />} />
          <Route path="Contact_us" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />

        </Routes>
      </Router></div>
  );
}

export default App;
