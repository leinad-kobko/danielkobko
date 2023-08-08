import {GiRibbonMedal} from "react-icons/gi"

export default function Certificate({place, name, date, children}) {
    return (
        <div className="w-96 h-60 mb-16 flex flex-col items-center relative bg-white dark:bg-neutral-600 rounded-xl mx-5">
            <div className="mt-10 mb-4 flex flex-col items-center">
                <p className="text-gray-400 dark:text-gray-200">{"Earned: " + date}</p>
                <p className="text-2xl font-semibold">{place}</p>
                <p>{name}</p>
            </div>
            {children}
            <GiRibbonMedal className="text-red-500 text-8xl absolute top-[80%]"/>
        </div>
    );
}