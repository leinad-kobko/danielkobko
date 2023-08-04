import {CiLight, CiDark} from "react-icons/ci"
import { useTheme } from "next-themes";

export default function ThemeButton() {

    const {systemTheme, theme, setTheme} = useTheme();
    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <button onClick={()=>setTheme('light')} className="p-3 lg:p-5 rounded-full bg-purple-700 hover:bg-purple-600">
                    <CiLight className="text-slate-100 text-2xl lg:text-4xl"/>
                </button>
            );
        } else {
            return (
                <button onClick={()=>setTheme('dark')} className="p-3 lg:p-5 rounded-full bg-purple-500 hover:bg-purple-600">
                    <CiDark className="text-slate-100 text-2xl lg:text-4xl"/>
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