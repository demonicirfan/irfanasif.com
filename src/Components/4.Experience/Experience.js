import React from 'react';
import { Heading_Layout, Heading2_layout } from '../0.Heading';
import Experience_Description from './Experience_Description';
import './Experience.css';
function Experience() {
  return (
    <div>
      <div>
          <span class='heading_container'>
            <Heading2_layout>Experience</Heading2_layout>
            <Heading_Layout>Experience</Heading_Layout>
          </span>
        <Experience_Description />
      </div>
    </div>
  );
}

export default Experience;
