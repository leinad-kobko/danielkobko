import PDFError from "../../components/PDFError"

export default function Schedule() {
    return(
        <div className="w-full h-screen">
            <object data="/res/DanielKobkoUOGSchedule.pdf" type="application/pdf" width="100%" height="100%">
                <PDFError pdfref={"/res/DanielKobkoUOGSchedule.pdf"}/>
            </object>
        </div>
    );
}