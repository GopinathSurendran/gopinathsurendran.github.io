import * as React from 'react';
import classes from './home.module.scss';
import Intro from '../intro/intro';
import Profile from '../profile/profile';

const Home = () => {
    return <div>
        <Intro />
        <div className={"container"}>
            <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                    <Profile />
                </div>
                <div className="col-lg-2" />
            </div>
        </div>
    </div>
}

export default Home;