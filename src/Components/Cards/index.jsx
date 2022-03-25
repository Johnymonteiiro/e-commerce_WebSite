import React from 'react';
import { ProductItems } from '../ProductItems';
import data from "../../backend/prod.json";
import * as S from "./style";

export const Cards = ()=> {

    const newData = data.product;
    return (
        <S.Container>
            {newData.map((data) => {
              return (
                 <ProductItems key={data.id} data={data}/> 
              );
            })}
        </S.Container>
    )
}


