import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../meteor.scss';

class Landing extends Component {
    render(){
        return(
            <main className="sky-container">
                <div className="my-info">
                     <h1>
                        Hi, I'm Jose Felipe Quiroga, a Full Stack Web Developer currently living in Bogotá, Colombia.
                    </h1>
                    <Link to="/portfolio"> Check out my work </Link>
                </div>
                <div className="night">
                    <div className="shooting_star"></div>
                    <div className="shooting_star"></div>
                    <div className="shooting_star"></div>
                    <div className="shooting_star"></div>
                    <div className="shooting_star"></div>
                    <div className="shooting_star"></div>
                    <div className="shooting_star"></div>
                    <div className="shooting_star"></div>
                    <div className="shooting_star"></div>
                </div>
            </main>
        );
    }

}

export default Landing;