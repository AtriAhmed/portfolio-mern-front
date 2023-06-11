import React from "react";

// We use Route in order to define the different routes of our application
import { Outlet } from "react-router-dom";


import axios from 'axios'
import "animate.css";
import AnimatedCursor from "react-animated-cursor";

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <div >
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
        <Outlet />
      </div>
    </div>
  );
}

export default App;
