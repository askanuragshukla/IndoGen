import { Typography } from "@mui/material";
import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function CardNews({ imagen,title }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
  
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <Typography variant="h6" style={{color:'black', textAlign:'center', fontWeight:700}}>{title}</Typography>
      
      {/* <div className={Styles.btnn}>
        <Button text="Demo" />
        <Button text="Code" />
      </div> */}
    </animated.div>
  );
}

export default CardNews;
