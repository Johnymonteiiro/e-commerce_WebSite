import {Send} from "@material-ui/icons";
import * as S from "./style";

export const Newsletter = () =>{
    return(
        <S.Container>
            <S.Title>Newsletter</S.Title>
            <S.Description>Get timely updates from your favorite products.</S.Description>
            <S.InputArea>
                <S.Input placeholder="Your e-mail"/>
                <S.Button>
                    <Send size={30}/>
                </S.Button>
            </S.InputArea>
        </S.Container>
    )
}