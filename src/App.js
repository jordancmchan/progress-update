import './App.scss';
import javascriptChallenges from './javascriptChallenge.js'
import Projects from './Projects.js'


function App() {
  console.log(javascriptChallenges.length)
  return (
    <div className="App ">
      <header className="wrapper">
      <h1>What I'm Working On</h1>
      <div className="status">
        <h2>Currently working on:</h2>
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
