export default function Button(props) {
    let buttonContent;
  
    switch (props.type) {
      case 'login':
        buttonContent = '로그인';
        break;
      case 'kakao':
        buttonContent = '카카오계정 간펀 로그인';
        break;
      case 'naver':
        buttonContent = '네이버계정 간펀 로그인';
        break;
      case 'join':
        buttonContent = '회원가입';
        break;
      default:
        return null;
    }
  
    return <button className={props.className}>{buttonContent}</button>;
  }
  