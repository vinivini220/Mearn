import React from "react";
import useHover from "../hooks/useHover";

const HoverCard = ({ hoverKey, style, onClick, children, hoverState }) => {
  const localHover = useHover();
  const { getHoverHandlers, hoverTransform } = hoverState || localHover;

  return (
    <div
      onClick={onClick}
      {...getHoverHandlers(hoverKey)}
      style={{ ...style, ...hoverTransform(hoverKey) }}
    >
      {children}
    </div>
  );
};

export default HoverCard;
