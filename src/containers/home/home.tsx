import * as React from 'react';
import classes from './home.module.scss';
import AnimationText from '../../uiComponents/animation/animation';

const Home = () => {
    return <div>
        <div className={classes.parallax}>
            <div className={`container ${classes.parallaxTextContainer}`}>
                <div className={`${classes.userName}`}>
                    <AnimationText type="rubberBand" text="Gopinath" />
                    <span className="ml-3" />
                    <AnimationText type="rubberBand" text="Surendran" />
                </div>
                <div className={classes.hr} />
                <div className={classes.userDesc}>
                    <AnimationText type="bounce" text="Full" />
                    <span className="ml-2" />
                    <AnimationText type="bounce" text="stack" />
                    <span className="ml-2" />
                    <AnimationText type="bounce" text="developer" />
                </div>
            </div>
        </div>
        <div>
            Big text div
        </div>
    </div>
}

export default Home;