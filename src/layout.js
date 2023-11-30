import layout from "./css/layout.module.css";
import Button from "./button";
import mainImage from "./image/developer.png"
import { useNavigate } from "react-router-dom"

export default function Layout() {
    const navigator = useNavigate();
    const goJoinForm = () => {
        navigator("joinForm")
    }
  return (
    <div>
        <div className={layout.mainImage}></div>
        <br></br>
        <p className={layout.join} onClick={goJoinForm}>회원 가입</p>
        <input
        className={layout.inputBox}
        placeholder="사용자 휴대폰 번호를 입력하세요."/>
        <br />
        <br />
        <input
        className={layout.inputBox}
        placeholder="사용자 생년월일 8자리를 입력하세요.(19931201)"/>

        <div className={layout.checkboxContainer}>
        <br />
        
        </div>
        <Button type="join" className={`${layout.button} ${layout.joinButton}`} />
        <br />
        <br />
        <Button type="login" className={`${layout.button} ${layout.loginButton}`} />
        <br />
        <br />
        <Button type="kakao" className={`${layout.button} ${layout.kakaoButton}`} />
        <br />
        <br />
        <Button type="naver" className={`${layout.button} ${layout.naverButton}`} />

      </div>
  );
}
