import './App.scss';
import javascriptChallenges from './javascriptChallenge.js'
import Projects from './Projects.js'

import {Helmet} from "react-helmet";


function App() {
  
  window.addEventListener('scroll', toggleHide)
  
  function toggleHide(){
    const headerStatus = document.querySelector('.status');
    if (window.pageYOffset > 100){
      console.log(headerStatus)
      headerStatus.classList.add('hide');
    }else{
      headerStatus.classList.remove('hide')
    }
  }

  return (
    <div className="App ">
      <Helmet>
        <title>Progress Page - Jordan Chan</title>
      </Helmet>
      <header>
      <div className="status ">
        <h1>Currently working on:</h1>
        <p>Javascript 30 day vanilla coding challenge</p>
        <p>Latest ongoing project: <a href="https://tender-lalande-60e8f8.netlify.app">Project SummaPunch</a></p>
        <p>{javascriptChallenges.length}/30</p>
        <a href="https://javascript30.com">SOURCE</a>
      </div>
      </header>
        <Projects />
        <footer>
          <div className="projectHeader">
            <p>Check out my latest ongoing project! <a href="https://tender-lalande-60e8f8.netlify.app">SummaPunch</a></p>
          </div>
        </footer>
    </div>
  );
}

export default App;
