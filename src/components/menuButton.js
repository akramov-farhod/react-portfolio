import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useAnimate } from "framer-motion";

function menuButton({ children }) {
  const [scope, animate] = useAnimate();
  animate(scope.current, { opacity: 1 }, { duration: 1 });

  return <ul ref={scope}>{children}</ul>;
}

export default menuButton;
