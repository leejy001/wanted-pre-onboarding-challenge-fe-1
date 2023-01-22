import ImageButton from "components/common/ImageButton";
import StringByFormatting from "libs/StringByFomatting";
import React from "react";
import { TodoItemType } from "types/todo";
import { ItemWrapper, DateWrapper } from "./style";

function TodoItem({
  item,
  detailToggle,
  editToggle,
  removeToggle
}: TodoItemType) {
  return (
    <ItemWrapper key={item.id} onClick={(e) => detailToggle(e, item.id)}>
      <div>
        <p>{item.title}</p>
      </div>
      <DateWrapper>
        <p>{StringByFormatting(new Date(item.createdAt))}</p>
      </DateWrapper>
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
