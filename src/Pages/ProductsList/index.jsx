
import {NavBar} from "../../Components/NavBar";
import {Announcement} from "../../Components/index";
import {Newsletter} from "../../Components/Newsletter";
import {Footer} from "../../Components/Footer";
import {Cards} from "../../Components/Cards";
import * as S from "./style";

export const ProductsList = ()=>{
    return(
        <S.Container>
           <NavBar/>
           <Announcement/>
           <S.Title>Shirts</S.Title>
           <S.FilterContainer>
            <S.Filter>
                <S.FilterText>Filter Products:</S.FilterText>
                <S.Select>
                    <S.Option disabled selected>Color</S.Option>
                    <S.Option>White</S.Option>
                    <S.Option>Black</S.Option>
                    <S.Option>Blue</S.Option>
                    <S.Option>Yellow</S.Option>
                    <S.Option>Orange</S.Option>
                    <S.Option>Red</S.Option>
                </S.Select>
                <S.Select>
                    <S.Option disabled selected>Size</S.Option>
                    <S.Option>XS</S.Option>
                    <S.Option>S</S.Option>
                    <S.Option>M</S.Option>
                    <S.Option>L</S.Option>
                    <S.Option>XL</S.Option>
                </S.Select>
            </S.Filter>
            <S.Filter>
            <S.FilterText>Sort Products:</S.FilterText>
            <S.Select>
                    <S.Option disabled selected>Newest</S.Option>
                    <S.Option>Price (asc)</S.Option>
                    <S.Option>Price (desc)</S.Option>
                </S.Select>
            </S.Filter>
           </S.FilterContainer>
           <Cards/>
           <Newsletter/>
           <Footer/>
        </S.Container>
    )
}