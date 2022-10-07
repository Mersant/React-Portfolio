import React from 'react';
import '../styles/Section.css';



function Section() {
  return (
    <section className="section">
      <p id='code'>
      ORG 0100H<br/>
      CALL CLS<br/>
      CALL WAITK<br/>
      LD DE,0<br/>
      LD HL,MSG<br/>
      PRINT:<br/>
      LD A,(HL)<br/>
      PUSH HL<br/>
      CALL PUTCHR<br/>
      POP HL<br/>
      CALL DELAY<br/>
      INC E<br/>
      INC HL<br/>
      XOR A<br/>
      LD B,(HL)<br/>
      CP B<br/>
      JP NZ, PRINT<br/>
      RET<br/>
      </p>
      <p id='bio'>
        Hello, my name is David Lowry. I have been programming on-and-off since the age of 10 and I have
        enjoyed it ever since. My main focus, currently, is on full-stack web development. However, in the past
        I have learned several other sub-fields of programming including assembly language and machine code for the Zilog Z80 Microprocessor, processing data using MATLAB, basic game programming using Godot and GDScript, terminal applications with 
        C++, and programming simple applications on vintage computers using BASIC. Additionally, I have some experience with computer hardware such as soldering together microcomputers and learning circuit design. I am excited to begin my career in the computing field, and hope you will have a look around my portfolio to view some of my accomplishments thus far.
      </p>
    </section>
  );
}

export default Section;
