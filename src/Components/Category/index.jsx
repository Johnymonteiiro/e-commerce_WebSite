
import * as S from "./style"
import data from "../../backend/cateegory.json"
import { CategoryItems } from "../CategoryItems"

export const Categories = ()=>{
    const newData = data.category
    return(
       <S.Container>
         {newData.map(data=> (
              <CategoryItems items={data} key={data.id}/>
            )  
         )}
       </S.Container>
    )
}