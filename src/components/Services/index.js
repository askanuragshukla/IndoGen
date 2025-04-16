import React from "react";

import {
  LinkR,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from "./ServiceElements";
import image1 from "../images/call.jpg";
import image2 from "../images/callcenter.jpg";
import image3 from "../images/fish.jpg";
import image4 from "../images/buy.jpg";
import image5 from "../images/loan.jpg";
import image6 from "../images/peep.jpeg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>हमारी सेवाएं</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>संसाधन</ServicesH2>
            <ServicesP>
              {" "}
              Agrigator मछली पालक संघ आपको गुणवत्तापूर्ण उन्नत मछली बीज, फिश
              फीड, दवाईयाँ, आर्गेनिक खाद को उपलब्ध कराने में सहायता करता है।{" "}
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image2} />
            <ServicesH2>विशेषज्ञता/तकनीकी सहयोग</ServicesH2>
            <ServicesP>
              Agrigator मछली पालक संघ आपको अनुभवी मछली पालन विशेषज्ञों से जोड़ता
              है जिनसे आप तालाब की तैयारी से लेकर मछली उत्पादन से सम्बंधित
              तकनीकी जानकारी प्राप्त कर मछली पालन व्यवसाय को लाभकारी बना सकते
              हैं I
            </ServicesP>
          </ServicesCard>
          <LinkR to="sell">
            <ServicesCard>
              <ServicesIcon src={image3} />
              <ServicesH2>उत्पाद विक्रय</ServicesH2>
              <ServicesP>
                Agrigator मछली पालन संघ आपको मछली के नवीनतम बाज़ार मूल्य की
                जानकारी प्रदान कर सही मूल्य पर उत्पाद बिक्री में सहायता प्रदान
                करता है।
              </ServicesP>
            </ServicesCard>
          </LinkR>
          <ServicesCard>
            <ServicesIcon src={image4} />
            <ServicesH2>मत्स्य पालन के नवीनतम अवसर</ServicesH2>
            <ServicesP>
              {" "}
              Agrigator मछली पालन संघ आपको मत्स्य पालन के नए व्यापार मॉडल एवं
              नवीनतम अवसरों की जानकारी देता है, जिसके माध्यम से व्यवस्थित रूप
              में एकीकृत खेती कर अधिक लाभ कमाया जा सकता है।
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image5} />
            <ServicesH2>ऋण और सब्सिडी</ServicesH2>
            <ServicesP>
              {" "}
              Agrigator मछली पालन संघ आपको मत्स्य पालन हेतु ऋण व सब्सिडी
              सम्बन्धी वर्तमान सरकारी योजनाओ की जानकारी, कृषक उत्पादक संघ (एफ पी
              ओ ) निर्माण एवं बैंक लोन के लिए बिज़नेस मॉडल तैयार कराने में सहायता
              प्रदान करता है
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image6} />
            <ServicesH2>जागरूकता कार्यक्रम</ServicesH2>
            <ServicesP>
              {" "}
              Agrigator मछली पालन संघ आपको एग्रीगेटर पाठशाला एवं यूट्यूब चैनल के
              माध्यम से मछली पालन सम्बन्धी सरकारी योजनाओ एवं नयी तकनीक की
              जानकारी देता है।
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
