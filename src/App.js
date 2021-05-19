import './App.scss';
import javascriptChallenges from './javascriptChallenge.js'
import Projects from './Projects.js'

import {Helmet} from "react-helmet";


function App() {
  return (
    <div className="App ">
      <Helmet>
        <title>Progress Page - Jordan Chan</title>
      </Helmet>
      <header>
      <div className="status ">
        <h1>Currently working on:</h1>
        <p>Javascript 30 day vanilla coding challenge</p>
        <p>{javascriptChallenges.length}/30</p>
        <a href="https://javascript30.com">SOURCE</a>
      </div>
      </header>
        <Projects />
        <footer>
          <div className="projectHeader">
            <p>Project SummaPunch coming soon</p>
          </div>
        </footer>
    </div>
  );
}

export default App;
