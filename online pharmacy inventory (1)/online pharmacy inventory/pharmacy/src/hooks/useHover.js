import { useState, useCallback } from "react";

export default function useHover() {
  const [hoveredKey, setHoveredKey] = useState("");

  const getHoverHandlers = useCallback(
    (key) => ({
      onMouseEnter: () => setHoveredKey(key),
      onMouseLeave: () => setHoveredKey(""),
    }),
    []
  );

  const isHovered = useCallback(
    (key) => hoveredKey === key,
    [hoveredKey]
  );

  const hoverTransform = useCallback(
    (key) => ({
      transform: hoveredKey === key ? "scale(1.05)" : "scale(1)",
      transition: "0.3s",
    }),
    [hoveredKey]
  );

  return { hoveredKey, setHoveredKey, getHoverHandlers, isHovered, hoverTransform };
}
