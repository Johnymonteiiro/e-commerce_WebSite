import React from "react";
import * as S from "./style";
function Post({ data }) {
  return (
    <S.Container>
      <S.Content>
        <S.ImageContainer>
          <S.Image src={data.img}/>
        </S.ImageContainer>
        <S.Info>
          <S.Title>{data.title}</S.Title>
          <S.Description>{data.description}</S.Description>
          <S.PriceArea>
            <S.Price>R$ {data.price}</S.Price>
            <S.Button>Buy Now</S.Button>
          </S.PriceArea>
        </S.Info>
      </S.Content>
    </S.Container>
  );
}

export default Post;
