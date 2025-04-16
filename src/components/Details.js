
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Card from "./Card";
import CardNews from "./CardNews";
import { config } from "react-spring";
import Carroussel from "./Carroussel";
import React from "react";
import DALLECornSeedsfxf from './images/DALLECornSeedsfxf.webp'
import DallESpicesfxf from './images/DallESpicesfxf.webp'
import rice from './images/rice.webp'
import DALLEMoongnMasoorfxf from './images/DALLEMoongnMasoorfxf.webp'
import makhana from './images/makhanahd.avif'
import masoor from './images/akhamasoor.png'
import moong from './images/moongfxf.webp'


function Details() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={makhana} title="Makhana/Fox nuts" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={moong} title="Moong/Mung Beans" />
      )
      // and 
    },
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={masoor} title="Masoor/Red Lentil" />
      )
      // and Masoor/red Lentil
    },
    
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={rice} title="Rice" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={DALLECornSeedsfxf} title="Corn/Maize" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={DallESpicesfxf} title="Spices" />
      )
    }
    
    
  ];


  return (
    <div> <Carroussel
    cards={cards}
    height="500px"
    width="90%"
    margin="0 auto"
    offset={2}
    showArrows={false}
  /></div>
  )
}

export default Details