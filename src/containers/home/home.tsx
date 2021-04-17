import * as React from 'react';
import classes from './home.module.scss';
import Intro from '../intro/intro';
import Profile from '../profile/profile';
import Experiences from '../experiences/experiences';

const Home = () => {
    return <div>
        <Intro />
        <Profile />
        <Experiences />
    </div>
}

export default Home;