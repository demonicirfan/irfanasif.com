import React from 'react';
import "./Heading2_layout.css"

function Heading2_layout({ children }) {
  return (
    <div class="container">
      <h2>{children}</h2>
    </div>
  );
}

export {Heading2_layout};
