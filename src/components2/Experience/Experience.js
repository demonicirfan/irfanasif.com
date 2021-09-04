import React from 'react';
import { Heading_Layout } from '../Styled_Components';
import { Experience_Description } from '../Styled_Components';
import Section from './Section';
const heading = {
  display: "grid",
  gridTemplateRows: "1fr, 1fr, 1fr, 1fr",
  paddingRight: "400vh",
  position: "absolute"
}
const h1 = {
  position: "relative",
  gridRows: "2/4"
}
const layout = {
  position: "relative",
  marginTop: "100px",
  gridRows: "1/5"
}

function Experience() {
  return (
    <div>
      <div style={heading}>
        <h1 style={h1}>Experience</h1>
        <Heading_Layout style={layout}>Experience</Heading_Layout>
      </div>
    </div>
  );
}

export default Experience;
