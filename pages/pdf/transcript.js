import PDFError from "../../components/PDFError";

export default function Transcript() {
    return(
        <div className="w-full h-screen">
            <object data="/res/DanielKobkoUOGTranscript.pdf" type="application/pdf" width="100%" height="100%">
                <PDFError pdfref={"/res/DanielKobkoUOGTranscript.pdf"}/>
            </object>
        </div>
    );
}