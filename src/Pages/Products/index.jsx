import { Remove,Add} from "@material-ui/icons";

import { NavBar } from "../../Components/NavBar";
import { Announcement } from "../../Components/index";
import { Newsletter } from "../../Components/Newsletter";
import { Footer } from "../../Components/Footer";
import * as S from "./style";

export const Products = () => {
  return (
    <S.Container>
      <NavBar />
      <Announcement />
      <S.Wrapper>
        <S.ImgContainer>
          <S.ImgContent>
             <S.Image src="https://http2.mlstatic.com/D_NQ_NP_729539-MLB43497878706_092020-W.jpg" />
          </S.ImgContent>
        </S.ImgContainer>
        <S.InfoContainer>
          <S.Title>T-Shirt</S.Title>
          <S.Description>
            The white African style T-shirt for every event and social
            enviroment. You can choose your favorite color and size in few
            minute.
          </S.Description>
          <S.Price>R$ 80</S.Price>
          <S.FilterContainer>
            <S.Filter>
              <S.FilterTitle>Color</S.FilterTitle>
              <S.FilterColor color="red" />
              <S.FilterColor color="darkblue" />
              <S.FilterColor color="yellow" />
              <S.FilterColor color="black" />
            </S.Filter>
            <S.Filter>
              <S.FilterTitle>Size</S.FilterTitle>
              <S.FilterSize>
                  <S.FilterOption>XS</S.FilterOption>
                  <S.FilterOption>S</S.FilterOption>
                  <S.FilterOption>M</S.FilterOption>
                  <S.FilterOption>L</S.FilterOption>
                  <S.FilterOption>XL</S.FilterOption>
              </S.FilterSize>
            </S.Filter>
          </S.FilterContainer>
          <S.AddContainer>
              <S.AmoutContainer>
                  <Remove/>
                  <S.Amount>1</S.Amount>
                  <Add/>
              </S.AmoutContainer>
              <S.Buttom>Add to Cart</S.Buttom>
          </S.AddContainer>
        </S.InfoContainer>
      </S.Wrapper>
      <Newsletter />
      <Footer />
    </S.Container>
  );
};
