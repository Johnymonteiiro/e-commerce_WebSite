
import * as S from "./style";

export const Register = ()=>{
    return(
        <S.Container>
           <S.Wrapper>
               <S.Title>CREATE AN ACCOUNT</S.Title>
               <S.Form>
                   <S.Input placeholder="name"/>
                   <S.Input placeholder="last name"/>
                   <S.Input placeholder="username"/>
                   <S.Input placeholder="email"/>
                   <S.Input placeholder="password"/>
                   <S.Input placeholder="confirm password"/>
               </S.Form>
               <S.Agreement>
                   By creating an account, I consent to the processing of my personal data
                   in accordance with the <b>PRIVACY POLICY.</b>
               </S.Agreement>
               <S.Button>CREATE</S.Button>
           </S.Wrapper>
        </S.Container>
    )
}