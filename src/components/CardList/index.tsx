import { ReactNode } from "react";
import { StyledCardList } from "./style";

export interface iChildren {
  children: ReactNode;
}

const CardList = ({ children }: iChildren) => {
  return <StyledCardList>{children}</StyledCardList>;
};

export default CardList;
