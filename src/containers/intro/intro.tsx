import * as React from 'react';
import classes from './intro.module.scss';
import AnimationText, { animate } from '../../uiComponents/animation/animation';

const Intro = () => {

    React.useEffect(() => {
        document.querySelectorAll("#intro-user-name h1").forEach((x, i) => {
            setTimeout(() => {
                animate(x);
                setInterval(() => {
                    animate(x);
                }, 800);
            }, 200 * i);
        });
    }, [])

    const downloadResume = () => {
        var link = document.createElement('a');
        link.href = 'GopinathSurendranResume.pdf';
        link.download = 'file.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    return (
        <div className={classes.parallax}>
            <button className={`btn btn-primary ${classes.resumeBtn}`} onClick={downloadResume}>One page Resume</button>
            <div className={`${classes.textContainer} container d-flex`}>
                <div className="m-auto">
                    <div className={classes.textContent}>
                        <div id="intro-user-name">
                            <div className="d-md-none col-md-6"><AnimationText type="rubberBand" className={classes.title} text="Gopinath" /></div>
                            <div className="d-md-none col-md-6"><AnimationText type="rubberBand" className={classes.title} text="Surendran" /></div>
                        </div>
                        <div className="d-none d-md-block" >
                            <AnimationText type="rubberBand" className={classes.title} text="Gopinath" />
                            <span className="me-2" />
                            <AnimationText type="rubberBand" className={classes.title} text="Surendran" />
                        </div>
                        <div className={classes.hr} />
                        <AnimationText type="bounce" className={classes.desc} text="My" />
                        <span className="me-2" />
                        <AnimationText type="bounce" className={classes.desc} text="resume" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;