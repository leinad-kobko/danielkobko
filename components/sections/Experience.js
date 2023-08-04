import Certificate from "../Certificate";

export default function Experience() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <p className="text-4xl md:text-5xl font-bold">Certifications</p>
            <div className="w-full mb-10 flex flex-wrap justify-center items-center md:divide-x">
                <Certificate
                    place="University of Guelph"
                    name="Honours Bachelor of Computing (CS)"
                    date="June 13, 2023"
                />
                {/* <Certificate
                    place="Amazon Web Services"
                    name="Certified Cloud Practitioner Associate"
                    date="August 31, 2023"
                /> */}
            </div>
        </div>
    );
}