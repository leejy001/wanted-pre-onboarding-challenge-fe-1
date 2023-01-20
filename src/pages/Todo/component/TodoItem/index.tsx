import ImageButton from "components/common/ImageButton";
import StringByFormatting from "lib/StringByFomatting";
import React from "react";
import { TodoType } from "types/todo";
import { ItemWrapper } from "./style";

interface PropsType {
  item: TodoType;
  detailToggle: (event: React.MouseEvent, arg1: string) => void;
  editToggle: (event: React.MouseEvent, arg1: string) => void;
  removeToggle: (event: React.MouseEvent, arg1: string) => void;
}

function TodoItem({ item, detailToggle, editToggle, removeToggle }: PropsType) {
  return (
    <ItemWrapper key={item.id} onClick={(e) => detailToggle(e, item.id)}>
      <div>
        <p>{item.title}</p>
      </div>
      <div>
        <p>{StringByFormatting(new Date(item.createdAt))}</p>
      </div>
      <div>
        <ImageButton
          onClick={(e) => editToggle(e, item.id)}
          width={32}
          height={32}
          imgSrc={`${process.env.PUBLIC_URL}/asset/edit.png`}
        />
        <ImageButton
          onClick={(e) => removeToggle(e, item.id)}
          width={32}
          height={32}
          imgSrc={`${process.env.PUBLIC_URL}/asset/trash.png`}
        />
      </div>
    </ItemWrapper>
  );
}

export default TodoItem;
