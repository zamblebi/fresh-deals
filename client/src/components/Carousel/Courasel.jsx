import React, { useState } from 'react'

const Carousel = () => {
    
    const [activeIndex, setActiveIndex] = useState({one: "Hello world"});




    return (
        // console.log
        <div>
            <h1>{activeIndex.one}</h1>
        </div>
    )
}

export default Carousel;