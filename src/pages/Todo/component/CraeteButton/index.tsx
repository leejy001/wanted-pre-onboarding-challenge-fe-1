import React from "react";
import { Button } from "./style";

interface PropsType {
  handleToggle: () => void;
}

function CreateButton({ handleToggle }: PropsType) {
  return (
    <Button onClick={handleToggle}>
      <img src={`${process.env.PUBLIC_URL}/asset/create.png`} />
    </Button>
  );
}

export default CreateButton;
