import Socials from "../Socials";

export default function Footer() {
    return (
        <div className="w-full bg-gray-200 dark:bg-gray-800 h-fit flex flex-col justify-center items-center pb-20 mt-10">
            <a className="p-5 mt-5" href="#top">Back to the top</a>
            <Socials/>
            <div className="w-full max-w-5xl border-b border-gray-400"/>
            <p className="my-10 text-center">© 2023 <span className="font-bold">Daniel Kobko</span>. All Rights Reserved.</p>
        </div>
    );
}