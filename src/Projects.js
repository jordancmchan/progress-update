//Projects.js
import javascriptChallenges from './javascriptChallenge.js'


const Projects = () => {

    return(
        <div className="projectComponentContainer">
            {javascriptChallenges.map((challenge) => {
                return(
                    <div key = {challenge.key} className="projectContainer">
                        <div className="contentContainer">
                            <div className="screenShotContainer">
                                <a href={challenge.liveLink}>
                                <img src= {challenge.image} alt={challenge.description}/>
                                </a>
                            </div>
                            <div className="contentDesContainer">
                                <h2>#{challenge.key} {challenge.title}</h2>
                                <p>{challenge.description} </p>
                            </div>
                            <div className="infoContainer">
                                <p>Uploaded On: {challenge.date}</p>
                                <nav>
                                    <li>github link</li>
                                    <a href={challenge.liveLink}>
                                    <li>Live Link</li>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects

