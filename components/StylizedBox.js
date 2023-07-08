import {IoMdClose} from "react-icons/io"
import {BsCircle} from "react-icons/bs"

export default function StylizedBox({width, height, bordersize, bordercolour, textcolour, spacerwidth, spacerheight, children}) {

    return (
        <div className={width + " " + height + " border-" + bordersize + " border-" + bordercolour + " border-b-0 border-r-0 flex justify-center items-center relative"}>
            <div className={"w-full h-full border-" + bordersize + " border-" + bordercolour + " border-t-0 border-l-0 border-dashed flex justify-center items-center"}>
                <div className={"z-0 bg-slate-100 " + spacerwidth + " " + spacerheight + " absolute top-0 right-0 translate-x-[4px] -translate-y-[4px]"}/>
                <div className={"z-0 bg-slate-100 " + spacerwidth + " " + spacerheight + " absolute bottom-0 left-0 -translate-x-[4px] translate-y-[4px]"}/>
                <div className={"z-0 bg-slate-100 " + spacerwidth + " " + spacerheight + " absolute top-0 right-0 translate-x-[4px] -translate-y-[4px]"}>
                    <div className="absolute top-0 right-0 translate-x-5 -translate-y-5">
                        <IoMdClose className={"text-5xl text-" + textcolour}/>
                    </div>
                </div>
                <div className={"z-0 bg-slate-100 " + spacerwidth + " " + spacerheight + " absolute bottom-0 left-0 -translate-x-[4px] translate-y-[4px]"}>
                    <div className="absolute bottom-0 left-0 -translate-x-4 translate-y-4">
                        <BsCircle className={"text-4xl text-" + textcolour}/>
                    </div>
                </div>
                <div className="z-1 w-[90%] h-[90%] relative">
                    {children}
                </div>
            </div>
        </div>
    );
}