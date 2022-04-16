import React, { useEffect } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

export const CarouselItem = ({children, width}) => {
    return (
        <div id="carousel-item" className="inline-flex flex-col p-10 items-center justify-center h-52" style={{width: width}}>
            {children}
        </div>
    );
}

const Carousel = ({children}) => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const secondary_colour = "#6a82fb";
    const buttoneffects = "transition ease-in-out hover:scale-105 hover:fill-blue-600 duration-300"

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setSlideIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(slideIndex + 1);
        }, 7000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        <div className="w-5/6">
            <div id="carousel" className="mt-8 overflow-hidden bg-gradient-to-bl from-blue-100 to-red-100">
                <div 
                id="carousel-inner" 
                className="ease-in duration-200 flex flex-row" 
                style={{
                    width: String(React.Children.count(children)*100)+"%", 
                    transform: `translateX(-${slideIndex * (100 / React.Children.count(children))}%)`
                }}>
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width: "100%"});
                    })}
                </div>
            </div>
            <div id="indicators" className="flex justify-center">
                <button className="m-5" onClick={() => updateIndex(slideIndex - 1)}>
                    <FaChevronCircleLeft size="30" color={secondary_colour} className={buttoneffects + " hover:cursor-pointer"}/>
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button style={{color: secondary_colour}} className={"m-5"  + (index === slideIndex ? " font-bold" : "")}
                            onClick={() => {
                                updateIndex(index)
                            }}
                        >
                            {index + 1}
                        </button>
                    );
                })}
                <button className="m-5" onClick={() => updateIndex(slideIndex + 1)}>
                    <FaChevronCircleRight size="30" color={secondary_colour} className={buttoneffects + " hover:cursor-pointer"}/>
                </button>
            </div>
        </div>
    )
}

export default Carousel;
