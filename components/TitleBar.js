import React from "react";

const TitleBar = ({children}) => {

    return (
        <div className="my-4 w-full flex justify-center">
            <p className="text-lg lg:text-2xl font-bold text-red-500">― {children} ―</p>
        </div>
    )
}

export default TitleBar;
