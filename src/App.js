import logo from "./logo.svg";
import "./App.css";

var firstimg = require("./imgfolder/pattern.jpg").default;

function App() {
  return (
    <div className="App">
      <img id="patternBack" src={firstimg} alt="mystery"></img>
      <div>
        <div id="about">
          <p>Name: Benjamin Perkins</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/Ben8842">https://github.com/Ben8842</a>
          </p>
          <p>Contact: perkinsben@yahoo.com</p>
          <p>Status: currently open and searching for employment</p>
          <p> Skills: </p>
          <p>• React, Redux, JavaScript, Python, Java, HTML, CSS, XML</p>
          <p>
            • MongoDB, SQL, Mongoose, Express,
            <p>• GitHub, Heroku, Netlify, Visual Studio </p>
          </p>
          <p>• FIX Protocol, PowerShell, FTP, TFS, JIRA</p>

          <div id="fixy">
            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://tender-benz-d42ce4.netlify.app/">
                Eight Queens Puzzle
              </a>
            </button>
            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://jolly-meninsky-2047bc.netlify.app/">
                Pascal's Triangle and the Sierpinsky Triangle
              </a>
            </button>
            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://optimistic-babbage-2ed085.netlify.app/">
                Maze Algorithm
              </a>
            </button>
            <button class="fancy" variant="primary" size="lg" block>
              <a href="https://trivia-redux.herokuapp.com/">Trivia</a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://vibrant-spence-207a4e.netlify.app/">
                Emojii Matching Game
              </a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://benwperkins.github.io/BitProject/">
                Cryptocurrency Project
              </a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://wonderful-mahavira-3cec2e.netlify.app/">
                Trivia Application Tutorial
              </a>
            </button>
            <button class="fancy" variant="primary" size="lg" block>
              <a href="https://wordsearch-generator.herokuapp.com/">
                Word Search Generator
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
