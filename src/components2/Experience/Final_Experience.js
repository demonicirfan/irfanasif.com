import React from 'react';
import Experience from '../../Components/4.Experience/Experience';
import Section from './Section';


const Experience_Style = {
    position: "relative",
    top: "100px",
}


function Final_Experience() {
  return (
    <div>
          <Experience style={Experience_Style}/>
    </div>
  );
}

export default Final_Experience;
