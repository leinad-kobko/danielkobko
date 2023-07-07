export default function TLItem(props) {
    return(
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-slate-100 rounded-full mt-1.5 -left-1.5 border border-pink-300"></div>
            <time className="mb-1 text-sm font-normal leading-none text-pink-300">{props.date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.name}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-pink-300">{props.honor}</p>
            <a href="#" className="flex font-thin justify-center items-center rounded-xl px-4 py-2 gap-4 
                               text-slate-100 border border-slate-100 ease-in-out duration-300
                               hover:border-pink-500 hover:bg-slate-100 hover:text-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left hidden lg:inline" viewBox="0 0 16 16"> <path d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/> </svg>
                <p>Show More</p>
            </a>
        </li>
    );
}