import React from "react";
import Image from "next/image";
import { Button, Dialog } from "@mui/material";

const InfoCard = ({img, dimensions, title, location, timeFrame, children}) => {

    const [open, setOpen] = React.useState(false);

    const handleCardOpen = () => {
        setOpen(true);
    }
    
    const handleCardClose = () => {
        setOpen(false);
    }

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
            <div className="m-8 flex justify-center align-center">
                {/* {children} */}
                <Button onClick={handleCardOpen}>More Details</Button>
            </div>
            <Dialog
                open={open}
                onClose={handleCardClose}
            >
                <div className="p-8 overflow-auto">
                    {children}
                </div>
            </Dialog>
        </div>
    )
}

export default InfoCard;
