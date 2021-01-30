import * as React from 'react';
import classes from './home.module.scss';
import AnimationText from '../../uiComponents/animation/animation';

const Home = () => {
    return <div>
        <div className={classes.parallax}>
            <div className={`container ${classes.parallaxTextContainer}`}>
                <div className={`${classes.userName}`}>
                   <AnimationText text="Gopinath Surendran."/>
                </div>
                <div className={classes.hr} />
                <div className={classes.userDesc}>
                    Full stack developer
                </div>
            </div>
        </div>
        <div>
            Big text div
        </div>
    </div>
}

export default Home;