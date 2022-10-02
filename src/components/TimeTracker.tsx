import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

interface Props {
  time: string | undefined;
}
const TimeTracker = ({ time }: Props) => {
  let timeAgo = "";
  if (time) {
    const standardDate = parseISO(time);
    const timeStamp = formatDistanceToNow(standardDate);
    timeAgo = `${timeStamp} ago`;
  }
  return <div>{timeAgo}</div>;
};

export default TimeTracker;
