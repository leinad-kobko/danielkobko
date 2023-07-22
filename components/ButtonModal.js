import { Dialog } from "@material-ui/core";
import Image from "next/image";

export default function ButtonModal({open, close, children, imgref, title}) {

    return (
        <Dialog
            open={open}
            onClose={close}
        >
            <div className="dark:bg-gray-800">
                <div className="p-5 lg:p-10 flex flex-wrap justify-center lg:justify-start items-center gap-4 border-b pb-5">
                    <div className="IMG relative w-full lg:w-32 h-32">
                        <Image
                            src={imgref}
                            layout={"fill"}
                            alt="CIBC logo"
                            className="object-contain"
                        />
                    </div>
                    <p className="TITLE text-center text-black dark:text-slate-100 text-2xl lg:text-3xl font-semibold">{title}</p>
                </div>
                {children}
            </div>
        </Dialog>
    );
}