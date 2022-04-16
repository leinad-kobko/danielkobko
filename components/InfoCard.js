import React from "react";
import Image from "next/image";

const InfoCard = ({img, dimensions, title, location, timeFrame, children}) => {

    return (
        <div id="info-card" className="my-4 drop-shadow-md overflow-hidden w-full bg-white border-t-[7px] border-red-500">
            <div className="my-4 w-full flex flex-row">
                <div className="mx-4">
                    <Image
                        alt="image"
                        src={img}
                        layout="intrinsic"
                        width={dimensions[0]}
                        height={dimensions[1]}
                    />
                </div>
                <div>
                    <p className="text-2xl text-red-500">{title}</p>
                    <p className="text-blue-400">{location}</p>
                    <p className="text-blue-400">{timeFrame}</p>
                </div>
            </div>
            <div className="m-8">
                {children}
            </div>
        </div>
    )
}

export default InfoCard;
