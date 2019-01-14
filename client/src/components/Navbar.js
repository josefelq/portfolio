import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <header>
                <nav>
                    <h2 className="logo"><Link to="/">JFQ</Link></h2>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/portfolio">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked/>
                                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                                    <span className="onoffswitch-inner"></span>
                                    <span className="onoffswitch-switch"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}

export default Navbar;