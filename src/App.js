import './App.scss';
import javascriptChallenges from './javascriptChallenge.js'
import Projects from './Projects.js'


function App() {
  console.log(javascriptChallenges.length)
  return (
    <div className="App ">
      <header>
      <div className="status ">
        <h1>Currently working on:</h1>
        <p>Javascript 30 day vanilla coding challenge</p>
        <p>{javascriptChallenges.length}/30</p>
        <a href="https://javascript30.com">SOURCE</a>
      </div>
      </header>
        <Projects />
    </div>
  );
}

export default App;
