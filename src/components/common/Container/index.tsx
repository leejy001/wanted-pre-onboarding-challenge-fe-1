import React from "react";
import { ContainerTitle, MainContainer } from "./style";

interface PropsType {
  title: string;
}

function Container({ title, children }: React.PropsWithChildren<PropsType>) {
  return (
    <MainContainer>
      <ContainerTitle>{title}</ContainerTitle>
      {children}
    </MainContainer>
  );
}

export default Container;
