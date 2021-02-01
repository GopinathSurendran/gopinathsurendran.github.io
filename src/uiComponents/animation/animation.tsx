import * as React from 'react';
import classes from './animation.module.scss';

export type AnimationProps = {
    text: string;
    type?: string;
    className?: string;
    split?: string;
}

const AnimationText = (props: AnimationProps) => {

    const onMouseEnter = (event) => {
        if(event.target.className.indexOf('animate__animated') !== -1){
            return;
        }
        event.target.classList.add("animate__animated");
        event.target.classList.add(`animate__${props.type}`);
        setTimeout(() => {
            event.target.classList.remove("animate__animated");
            event.target.classList.remove(`animate__${props.type}`);
        }, 800);
    }

    return <>
        {props.text.split(props.split || "").map((x, i) => {
            return <div key={i} onMouseEnter={onMouseEnter} className={`${classes.animateText} props.className`}>{x}</div>
        })
        }
    </>
}

export default AnimationText;