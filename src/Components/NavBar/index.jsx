import { BiSearchAlt2 } from "react-icons/bi";
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import * as S from './style'

export const NavBar = ()=>{
    return(
        <S.Container>
            <S.Wrapper>
                <S.Left>
                    <S.Language>Pt</S.Language>
                    <S.SearchArea>
                        <S.Input placeholder="type your search..."/>
                        <BiSearchAlt2 style={{color:"gray", fontSize:30}}/>
                    </S.SearchArea>
                </S.Left>
                <S.Center>
                    <S.LogoName>Shopping|Betânia</S.LogoName>
                </S.Center>
                <S.Rigth>
                    <S.MenuItems>Register</S.MenuItems>
                    <S.MenuItems>Sign in</S.MenuItems>
                    <S.MenuItems>
                     <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlined color="action" />
                      </Badge>
                    </S.MenuItems>
                </S.Rigth>
            </S.Wrapper>
        </S.Container>
    )
}