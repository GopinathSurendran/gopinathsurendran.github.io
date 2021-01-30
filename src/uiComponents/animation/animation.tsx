import * as React from 'react';

export type AnimationProps = {
    text: string;
    type?: string;
    className?: string;
}

const AnimationText = (props: AnimationProps) => {

    const onMouseEnter = (event) => {
        event.target.classList.add("animate__animated");
        event.target.classList.add("animate__rubberBand");
    }

    const onMouseLeave = (event) => {
        // event.target.classList.remove("animate__animated");
        // event.target.classList.remove("animate__rubberBand");
    }

    return <>
        {props.text.split("").map((x, i) => {
            return <span key={i} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={props.className}>{x}</span>
        })
        }
    </>
}

export default AnimationText;