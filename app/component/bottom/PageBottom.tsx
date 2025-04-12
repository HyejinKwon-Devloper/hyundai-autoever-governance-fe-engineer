import AppInfo from "@/app/component/bottom/app-info";
import InquiryInfo from "@/app/component/bottom/inquiry-info";
import ProcessInfo from "@/app/component/bottom/process-info";

export default function PageBottom(){
    return ( 
        <>
            <InquiryInfo />
            <ProcessInfo />
            <AppInfo />
        </>
    )
}