import Image from "next/image";
import LargeIconButton from "@/app/component/button/LargeIconButton";

export default function NotFoundPage() {
    return(
        <div className="error-info">
            <Image src="/ic_nodata.svg" alt="nodata" width={80} height={80} className='error-img' />
            <strong>페이지를 찾을 수 없습니다.</strong>
            <p>현재 입력하신 주소의 페이지는 삭제되었거나, 다른 주소로 변경되었습니다.<br/>주소를 다시 확인해 주세요.</p>
            <div className="button-group">
                <LargeIconButton href="/" alt="goMain" >메인 페이지로 이동</LargeIconButton>
            </div>
        </div>
    )
}