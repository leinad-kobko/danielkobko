import PDFError from "../../components/PDFError"

export default function Resume() {
    return(
        <div className="w-full h-screen">
            <object data="/res/DanielKobkoResume.pdf" type="application/pdf" width="100%" height="100%">
                <PDFError pdfref={"/res/DanielKobkoResume.pdf"}/>
            </object>
        </div>
    );
}