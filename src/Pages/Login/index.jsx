
import * as S from "./style";

export const Login = ()=>{
    return(
        <S.Container>
        <S.Wrapper>
               <S.Title>SIGN IN</S.Title>
               <S.Form>
                   <S.Input placeholder="username"/>
                   <S.Input placeholder="password"/>
                   <S.Button>LOGIN</S.Button>
                   <S.Link>Forgot the password?</S.Link>
                   <S.Link>Create New Account</S.Link>
               </S.Form>
           </S.Wrapper>
        </S.Container>
    )
}