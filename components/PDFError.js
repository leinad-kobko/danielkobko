export default function PDFError({pdfref}) {
    return (
        <div className="w-full h-full bg-slate-300 flex flex-col justify-center items-center">
            <p>Unable to display PDF file.</p>
            <a className="bg-blue-500 hover:bg-blue-600 text-slate-100 py-2 px-5" target="_blank" rel="noreferrer" href={pdfref} download>Download Instead</a>
        </div>
    );
}