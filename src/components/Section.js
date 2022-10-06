import React from 'react';
import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: '#151718',
    color: '#ebdbb2'
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <p>
        Hello, my name is David Lowry. I have been programming on-and-off since the age of 10 and I have
        enjoyed it ever since. My main focus, currently, is on full-stack web development. However, in the past
        I have learned several other sub-fields of programming including assembly language and machine code for the Zilog Z80 Microprocessor, processing data using MATLAB, basic game programming using Godot and GDScript, terminal applications with 
        C++, and programming simple applications on vintage computers using BASIC. Additionally, I have some experience with computer hardware such as soldering together microcomputers and learning circuit design. I am excited to begin my career in the computing field, and hope you will have a look around my portfolio to view some of my accomplishments thus far.
      </p>
    </section>
  );
}

export default Section;
