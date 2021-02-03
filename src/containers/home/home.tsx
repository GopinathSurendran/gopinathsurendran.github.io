import * as React from 'react';
import classes from './home.module.scss';
import Intro from '../intro/intro';
import Profile from '../profile/profile';

const Home = () => {
    return <div>
        <Intro />
        <div className={classes.container}>
            <Profile />
        </div>
    </div>
}

export default Home;