import './About.css'
import arrrex from './arrrex.jpg'
import blingblingda from './blingblingda.jpg'

function About() {
    return (
        <div className="About">
          <h1 className="abouth1">About Uth!</h1>

          <div className="arrrex-flex">
            <div>
                <h3 className="abouth3">Arrrex</h3>
                <p className="aboutp">INCOMING!!! sophomore at the University of Waterloo <br/> I like cats n stuff. </p>
            </div>
            <img src={arrrex} width="300" height="300" alt="arrrex" className="img arrrex-pic"/>
          </div>

          <div className="blingblingda-flex">
            <img src={blingblingda} width="300" height="300" alt="arrrex" className="img"/>
            <div>
                <h3 className="abouth3">blingblingda</h3>
                <p className="aboutp">ada likes bts and levi ackerman.</p>
            </div>
          </div>
        </div>
      );
}

export default About