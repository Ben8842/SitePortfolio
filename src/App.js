import "./App.css";

var firstimg = require("./imgfolder/pattern.jpg").default;

function App() {
  return (
    <div className="patternBack">
      <img id="patternBack" src={firstimg} alt="mystery"></img>
      <div>
        <div id="about">
          <p id="topinfoS">
            <button id="topinfoS">
              <a href="https://calendly.com/perkinsben">
                Click here to schedule a meeting with me
              </a>
            </button>
          </p>

          <p>
            {" "}
            <button id="topinfo">
              <a href="https://github.com/Ben8842">
                Click here to find my GitHub profile
              </a>
            </button>
            <p>
              <button id="topinfo">
                <a href="https://www.linkedin.com/in/ben-perkins-91262b16">
                  Click here to Connect on Linkedin.com
                </a>
              </button>
            </p>
          </p>

          <p>Name: Benjamin Perkins</p>
          <p>Contact: perkinsben@yahoo.com </p>

          <p>Status: Open for employment.</p>
          <p> Skills: </p>
          <p>• React, Redux, JavaScript, Python, Java, HTML, CSS, XML</p>
          <p>
            • MongoDB, SQL, Mongoose, Express,
            <p>• GitHub, Heroku, Netlify, Visual Studio </p>
          </p>
          <p>• FIX Protocol, PowerShell, FTP, TFS, JIRA</p>

          <div id="fixy">
            <button class="fancy" variant="secondary" size="lg" block>
              <a
                id="bproject"
                href="https://optimistic-babbage-2ed085.netlify.app/"
              >
                Maze Algorithm
              </a>
            </button>
            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://trivia-redux.herokuapp.com/">Trivia App</a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a
                id="bproject"
                href="https://vibrant-spence-207a4e.netlify.app/"
              >
                Emoji Game
              </a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://ben8842.github.io/BitProject/">
                Cryptocurrency Project
              </a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://confident-varahamihira-ee1a90.netlify.app/">
                Movie Game
              </a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a
                id="bproject"
                href="https://jolly-meninsky-2047bc.netlify.app/"
              >
                Triangle
              </a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a id="bproject" href="https://tender-benz-d42ce4.netlify.app/">
                Queen Puzzle
              </a>
            </button>
            <button class="fancy" variant="secondary" size="lg" block>
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
/*<button class="fancy" variant="secondary" size="lg" block>
              <a href="https://wonderful-mahavira-3cec2e.netlify.app/">
                Trivia Application Tutorial
              </a>
            </button>*/
