import * as S from "./style";

export const CategoryItems = ({ items }) => {
  return (
    <S.Container>
      <S.Image src={items.img}/>
      <S.Info>
        <S.Title>{items.title}</S.Title>
        <S.Button>Buy Now</S.Button>
      </S.Info>
    </S.Container>
  );
};
