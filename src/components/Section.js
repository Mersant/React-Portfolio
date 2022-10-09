import React from 'react';
import '../styles/Section.css';



function Section() {
  return (
    <section className="section">
      <div id='buttonsContainer'>
        <button>My projects</button>
        <a href='https://drive.google.com/file/d/1_f93M3E2ubnvJTY2tfUcPI0rUwsrfQnV/view?usp=sharing' target="_blank" rel="noopener noreferrer" download={true}><button>Resume</button></a>
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
        <p>
          As I make my foray into the programming industry, I hope these projects can help you see some of my potential.
        </p>
        <div className='projectHeader'>
          <a class='projectLink' href="https://github.com/meyerbw10/Find-My-Pets" target="_blank" rel="noopener noreferrer">
            <img className='projectImage' src='https://github.com/meyerbw10/Find-My-Pets/blob/main/public/images/photo1.png?raw=true' alt="PawFinder's homepage, showing a happy, young man petting his golden retriever on a grass field."/>
          </a>
        <div className='projectInfo'>
          <h2>PawFinder</h2>
          <p>
            A proof of concept group project utilizing MongoDb and Handlebars to reconnect families with their lost pets.
          </p>
        </div>
        </div>
        <a class='projectLink' href="https://github.com/meyerbw10/Find-My-Pets" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>


        <div className='projectHeader'>
        <div className='projectInfo'>
          <h2>Proposal Game</h2>
          <p>
            At the beginning of 2022 I began work on a video game to propose to my then girlfriend of three years. After a several months of work, I proposed on May 29th and she said, "Yes!" 
          </p>
        </div>
        <a class='projectLink' href="https://github.com/Mersant/redesigned-barnacle" target="_blank" rel="noopener noreferrer">
          <img className='projectImage' src='https://user-images.githubusercontent.com/102173297/194731863-7a670561-8ccc-4ff2-9ddb-e1c1c54c75fa.jpg' alt="David Lowry sitting with his fiancee as she plays the video game he proposed to her with."/>
        </a>
        </div>
        <a class='projectLink' href="https://github.com/Mersant/redesigned-barnacle" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>


        <div className='projectHeader'>
          <a class='projectLink' href="https://github.com/Mersant/SuperTracker9000" target="_blank" rel="noopener noreferrer">
            <img className='projectImage' src='https://user-images.githubusercontent.com/102173297/190265458-d3298f10-7a12-417a-bafd-8ea9cbdc69fb.png' alt="The SuperTracker9000 application running in a terminal window."/>
          </a>
        <div className='projectInfo'>
          <h2>SuperTracker9000</h2>
          <p>
            A little JavaScript CLI app for managing a MySQL database.
          </p>
        </div>
        </div>
        <a class='projectLink' href="https://github.com/Mersant/SuperTracker9000" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>


        <div className='projectHeader'>
        <div className='projectInfo'>
          <h2>OSU AEV Project</h2>
          <p>
            A school project I did at OSU during the spring, 2022 semeter. My group and I designed and tested an AEV. Following the project, we presented our findings to the class.
          </p>
        </div>
        <a class='projectLink' href="https://github.com/Mersant/OSU-AEV-Project" target="_blank" rel="noopener noreferrer">
          <img className='projectImage' src='https://user-images.githubusercontent.com/102173297/194734128-d736a841-7e91-4569-937b-43371be1f73b.jpg' alt="The roughly 1-foot long AEV scale model David and his team made for school."/>
        </a>
        </div>
        <a class='projectLink' href="https://github.com/Mersant/OSU-AEV-Project" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>

        <div className='projectHeader'>
        <a href="https://github.com/Mersant/Z80-Projects" target="_blank" rel="noopener noreferrer">
        <img className='projectImage' src='https://github.com/Mersant/MyPortfolio/blob/main/assets/images/ZilogZ80.jpg?raw=true' alt="Close up of a Zilog Z80 as viewed through a magnifying glass."/>
        </a>
        <div className='projectInfo'>
          <h2>Misc</h2>
          <p>
            Outside of web design, I enjoy computer hardware quite a bit. I have learned a bit of basic circuit design from books and used to carry around a briefcase when I was around 11-13 so I could draw computer schematics on the go. Tinkering with low-level programming languages like Assembly is something I also enjoy, and in this repo you can find some of the programs I have made.
          </p>
        </div>
        </div>
        <a class='projectLink' href="https://github.com/Mersant/Z80-Projects" target="_blank" rel="noopener noreferrer">See this project on GitHub</a>

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