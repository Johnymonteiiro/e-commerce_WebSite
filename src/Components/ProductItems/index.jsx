import {ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined} from "@material-ui/icons";
import * as S from "./style";
export const ProductItems = ({data}) =>{
    return(
        <S.Container>
            <S.Image src={data.img}/>
            <S.Info>
                <S.Icon>
                  <ShoppingCartOutlined/>
                </S.Icon>
                <S.Icon>
                  <SearchOutlined/>
                </S.Icon>
                <S.Icon>
                  <FavoriteBorderOutlined/>
                </S.Icon>
            </S.Info>
        </S.Container>
        
    )
}