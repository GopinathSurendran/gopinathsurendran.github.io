import * as React from 'react';
import classes from './animation.module.scss';

export type AnimationProps = {
    text: string;
    type?: string;
    className?: string;
    split?: string;
    tag?: string;
}

export const animate = (x: any) => {
    if (x.className.indexOf('animate__animated') !== -1) {
        return;
    }
    x.classList.add("animate__animated");
    x.classList.add(`animate__rubberBand`);
    setTimeout(() => {
        x.classList.remove("animate__animated");
        x.classList.remove(`animate__rubberBand`);
    }, 800);
}

const AnimationText: React.FunctionComponent<AnimationProps> = ({ tag = "div", split, className, text }) => {

    const onMouseEnter = (event: any) => {
        animate(event.target);
    }


    return <>
        {text.split(split || "").map((x, i) => {
            const renderProps = { key: i, onMouseEnter, className: `${classes.animateText} ${className}` };
            if (tag) {
                return React.createElement(tag, renderProps, x);
            }
            return <div {...renderProps}>{x}</div>
        })
        }
    </>
}

export default AnimationText;