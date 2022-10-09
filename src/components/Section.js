import React from 'react';
import '../styles/Section.css';



function Section() {
  return (
    <section className="section">
      <div id='buttonsContainer'>
        <button>My projects</button>
        <button>Resume</button>
        <button>Get in touch</button>
      </div>
      
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
      <div id='pageContent'>
        <h2 id='pageTitle'>My Projects</h2>

        <div className='projectHeader'>
        <img className='projectImage' src='https://github.com/meyerbw10/Find-My-Pets/blob/main/public/images/photo1.png?raw=true'/>
        <div className='projectInfo'>
          <h2>PawFinder</h2>
          <p>
            A proof of concept group project utilizing MongoDb and Handlebars to reconnect families with their lost pets.
          </p>
        </div>
        </div>
        <a class='projectLink' href="https://www.google.com/" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>


        <div className='projectHeader'>
        <div className='projectInfo'>
          <h2>SuperTracker9000</h2>
          <p>
            A little JavaScript CLI app for managing a MySQL database.
          </p>
        </div>
        <img className='projectImage' src='https://user-images.githubusercontent.com/102173297/190265458-d3298f10-7a12-417a-bafd-8ea9cbdc69fb.png'/>

        </div>
        <a class='projectLink' href="https://www.google.com/" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>


        <div className='projectHeader'>
        <img className='projectImage' src='https://user-images.githubusercontent.com/102173297/183931221-a54ebab6-b1ed-44d4-9df7-73d5a6c7d33d.png'/>

        <div className='projectInfo'>
          <h2>CRPG Quiz</h2>
          <p>
            One of the very first websites I ever made, it may not be impressive but it was one of the more enjoyable projects I have worked on.
          </p>
        </div>
        </div>
        <a class='projectLink' href="https://www.google.com/" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>


        <div className='projectHeader'>
        <img className='projectImage' src='https://github.com/meyerbw10/Find-My-Pets/blob/main/public/images/photo1.png?raw=true'/>
        <div className='projectInfo'>
          <h2>Misc</h2>
          <p>
            A few miscellaneous programs I have made in Z80 Assembly. 
          </p>
        </div>
        </div>
        <a class='projectLink' href="https://www.google.com/" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>

      </div>
    </section>
  );
}

export default Section;

/*
        <p>
        <h2>About Me</h2>
        Hello, my name is David Lowry. I have been programming on and off since the age of 10 and I have enjoyed it ever since. My main focus, currently, is on full-stack web development. However, in the past, I have learned several other sub-fields of programming including assembly language and machine code for the Zilog Z80 Microprocessor, processing data using MATLAB, basic game programming using Godot and GDScript, terminal applications with C++, and programming simple applications on vintage computers using BASIC. Additionally, I have some experience with computer hardware such as soldering together microcomputers and learning circuit design. I am excited to begin my career in the computing field and hope you will have a look at my portfolio to view some of my accomplishments thus far.
        </p>*/