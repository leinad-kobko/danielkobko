import NavigationBar from "../components/sections/NavigationBar";
import Footer from "../components/sections/Footer";
import Introduction from "../components/sections/Introduction"
import Education from "../components/sections/Education"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"

export default function NewHome() {
    return (
        <div className="w-full h-screen flex flex-col">
            <NavigationBar/>
            <div className="flex-1 overflow-auto relative scroll-smooth flex flex-col gap-20">
                <div id="top">
                    <Introduction/>
                </div>
                <div id="Experience">
                    <Experience/>
                </div>
                <div id="Projects">
                    <Projects/>
                </div>
                <div id="Learning">
                    <Education/>
                </div>
                
                <Footer/>
            </div>
        </div>
    );
}