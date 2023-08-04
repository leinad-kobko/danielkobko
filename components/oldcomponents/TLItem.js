import { useState } from "react";
import ButtonModal from "./ButtonModal";

export default function TLItem(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <li className="mb-10 ml-4">
            <time className="mb-1 text-sm font-normal leading-none text-pink-500">{props.date}</time>
            <h3 className="text-lg font-semibold text-black dark:text-slate-100">{props.name}</h3>
            <p className="mb-4 text-base font-normal text-pink-500">{props.honor}</p>
            <button onClick={handleClickOpen} className="w-full flex font-thin justify-center items-center rounded-xl py-2 gap-4 
                               text-black dark:text-slate-100 border border-black dark:border-slate-100 ease-in-out duration-300 hover:bg-pink-300/20 hover:dark:bg-slate-100/20">
                <p>Show More</p>
            </button>
            <ButtonModal
                open={open}
                close={handleClose}
                imgref={props.imgref}
                title={props.name}
            >
                {props.children}
            </ButtonModal>
        </li>
    );
}