import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbare from "./components/layouts/Navbare";
import Edit from "./components/edit";
import Create from "./components/create";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import AddWork from "./components/work/AddWork";
import AddSkill from "./components/skills/AddSkill";
import AddType from "./components/types/AddType";
import Contact from "./components/contact/Contact";
import axios from 'axios'
import "animate.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import AnimatedCursor from "react-animated-cursor";
import RecordList from "./components/recordList";

library.add(fas,far);

axios.defaults.baseURL = process.env.REACT_APP_URL;

function App() {
  return (
    <div>
      <Navbare />
      <div style={{ margin: 20 }}>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='0, 0, 0'
        outerAlpha={0.5}
        innerScale={0.5}
        outerScale={4}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
       />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-work" element={<AddWork />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/records" element={<RecordList />} />
        <Route path="/add-type" element={<AddType />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
