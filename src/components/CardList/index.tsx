import { ReactNode } from "react";
import { StyledCardList } from "./style";

export interface iCardListProps {
  children: ReactNode;
}

const CardList = ({ children }: iCardListProps) => {
  return <StyledCardList>{children}</StyledCardList>;
};

export default CardList;
