import React, {useRef} from 'react';
import '../App.css';
import useHover from "../hooks/useHover";

const Hover = () => {
    const ref = useRef()
    const isHovering = useHover(ref);

    console.log(isHovering)
    return (
        <div ref={ref } className={isHovering? 'Element' : ' Element Hover'} >
            <button onClick={() => { console.log(ref.current)}}>Click me</button>
        </div>
    );
};

export default Hover;