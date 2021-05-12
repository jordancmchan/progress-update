import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
      <h1>How I'm Improving</h1>
      <h2>Currently working on: Javascript 30 </h2>
      <p>30 day vanilla coding challenge</p>
      <p>build 30 projects in 30 days</p>
      <a href="https://javascript30.com">SOURCE</a>
      </header>
      <body>
        <div className="contentContainer">
          <div className="screenShotContainer">
            <a href ="https://stoic-feynman-96a430.netlify.app"> 
            <img src="https://placedog.net/250" alt=""/>
            </a>
          </div>
          <div className="contentDesContainer">
            <h2>Project Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quod sint deleniti, quae soluta molestias magni. Consectetur aut accusantium quo.</p>
          </div>
          <div className="infoContainer">
            <p>Uploaded On: 152131</p>
            <nav>
              <li>github link</li>
              <li>live site link</li>
            </nav>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
