import {CiLight, CiDark} from "react-icons/ci"
import { useTheme } from "next-themes";

export default function ThemeButton() {

    const {systemTheme, theme, setTheme} = useTheme();
    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <button onClick={()=>setTheme('light')} className="w-16 h-16 flex justify-center items-center rounded-full hover:bg-gray-800">
                    <CiLight className="text-slate-100 text-3xl lg:text-4xl"/>
                </button>
            );
        } else {
            return (
                <button onClick={()=>setTheme('dark')} className="w-16 h-16 flex justify-center items-center rounded-full hover:bg-gray-200">
                    <CiDark className="text-black-100 text-3xl lg:text-4xl"/>
                </button>
            );
        }
    }

    return (
        <div>
            {renderThemeChanger()}
        </div>
    );
}