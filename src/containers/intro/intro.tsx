import * as React from 'react';
import classes from './intro.module.scss';
import AnimationText from '../../uiComponents/animation/animation';

const Intro = () => {
    return (
        <div className={classes.parallax}>
            <div className={`container d-flex`}>
                <div className="m-auto">
                    <div className={`${classes.userName}`}>
                        <div className="d-md-none col-md-6"><AnimationText type="rubberBand" text="Gopinath" /></div>
                        <div className="d-md-none col-md-6"><AnimationText type="rubberBand" text="Surendran" /></div>
                        <div className="d-none d-md-block">
                            <AnimationText type="rubberBand" text="Gopinath" />
                            <span className="me-2" />
                            <AnimationText type="rubberBand" text="Surendran" />
                        </div>
                    </div>
                    <div className={classes.hr} />
                    <div className={classes.userDesc}>
                        <AnimationText type="bounce" text="My" />
                        <span className="me-2" />
                        <AnimationText type="bounce" text="resume" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;