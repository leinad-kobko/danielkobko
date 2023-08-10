import Certificate from "../Certificate";

export default function Experience() {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-gray-200 dark:bg-neutral-800">
            <p className="p-10 text-4xl md:text-5xl font-bold">Certifications</p>
            <div className="w-full mb-10 flex flex-wrap justify-center items-center mt-2">
                <Certificate
                    place="University of Guelph"
                    name="Honours Bachelor of Computing (CS)"
                    date="June 13, 2023"
                >
                    <div className="w-3/4 flex divide-x mt-2">
                        <a target="_blank" rel="noreferrer" href="/pdf/transcript"
                        className="w-1/2 text-center bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 rounded-l-lg">Transcript</a>
                        <a target="_blank" rel="noreferrer" href="/pdf/schedule" 
                        className="w-1/2 text-center bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 rounded-r-lg dark:border-neutral-600">Schedule</a>
                    </div>
                </Certificate>
                {/* <Certificate
                    place="Amazon Web Services"
                    name="Certified Cloud Practitioner Associate"
                    date="August 31, 2023"
                >
                    <div className="w-3/4 flex mt-2">
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 rounded-lg">View Certificate</button>
                    </div>
                </Certificate> */}
            </div>
        </div>
    );
}