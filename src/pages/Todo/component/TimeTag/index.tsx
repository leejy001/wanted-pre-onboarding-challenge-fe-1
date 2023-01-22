import useSetTime from "hooks/common/useSetTime";
import React from "react";
import { TagContainer } from "./style";

function TimeTag() {
  const [, , , , hour, minute, timeImg] = useSetTime();

  return (
    <TagContainer>
      <p>{hour > 12 ? `${hour - 12}:${minute} pm` : `${hour}:${minute} am`}</p>
      <img src={timeImg} alt="hour" />
    </TagContainer>
  );
}

export default TimeTag;
