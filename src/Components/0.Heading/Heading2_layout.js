import React from 'react';
import "./Heading2_layout.css"

function Heading2_layout({ children }) {
  return (
    <div className="container">
      <h2 className="top_component">{children}</h2>
    </div>
  );
}

export {Heading2_layout};
