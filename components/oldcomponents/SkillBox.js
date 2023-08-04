function SkillBox({children, name, bgcolour, textcolour, setFunc}) {
    return (
        <button onMouseEnter={() => setFunc(name)} onMouseLeave={() => setFunc(" ")} className="w-28 h-28 p-5 flex flex-col items-center gap-3 
        ease-in-out duration-100 hover:cursor-default hover:scale-[110%]"
        >
            <div className={textcolour + " p-3 w-fit h-fit rounded-lg drop-shadow-lg text-5xl " + bgcolour}>
                {children}
            </div>
        </button>
    );
}

SkillBox.defaultProps = {
    name: "Skill Name",
    bgcolour: "bg-blue-100",
    textcolour: "text-slate-100"
};

export default SkillBox;