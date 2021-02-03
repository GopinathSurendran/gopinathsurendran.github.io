import * as React from 'react';
import classes from './intro.module.scss';
import AnimationText from '../../uiComponents/animation/animation';

const Intro = () => {
    return (        
        <div className={classes.parallax}>
            <div className={`container ${classes.parallaxTextContainer}`}>
                <div className={`${classes.userName}`}>
                    <AnimationText type="rubberBand" text="Gopinath" />
                    <span className="ml-3" />
                    <AnimationText type="rubberBand" text="Surendran" />
                </div>
                <div className={classes.hr} />
                <div className={classes.userDesc}>
                    <AnimationText type="bounce" text="My" />
                    <span className="ml-2" />
                    <AnimationText type="bounce" text="resume" />
                </div>
            </div>
        </div>
    )
}

export default Intro;