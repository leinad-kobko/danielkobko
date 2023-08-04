import {GiRibbonMedal} from "react-icons/gi"

export default function Certificate({place, name, date}) {
    return (
        <div className="w-96 h-60 mb-16 flex flex-col justify-center items-center relative">
            <p className="text-gray-400 dark:text-gray-200">{"Earned: " + date}</p>
            <p className="text-2xl font-semibold">{place}</p>
            <p>{name}</p>
            <div className="flex divide-x mt-2">
                <a target="_blank" rel="noreferrer" href="/pdf/transcript"
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 rounded-l-lg">Transcript</a>
                <a target="_blank" rel="noreferrer" href="/pdf/schedule" 
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 rounded-r-lg">Degree Schedule</a>
            </div>
            <GiRibbonMedal className="text-red-500 text-8xl absolute top-[80%]"/>
        </div>
    );
}