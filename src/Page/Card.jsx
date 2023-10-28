import React from "react";
import main from "../Image/main.png";
import side from "../Image/side.png"
import main1 from "../Image/Medical prescription-amico (1) 1.svg"
import main2 from "../Image/large__1_-removebg-preview 2.svg"


function Card({children,reverse})  {
  return (
    <div className="container">
        <div className="main-img"> </div>
        <div className="main1-img"> </div>
        {/* <img src="{main1"className="main-img" alt="sorry"></img>
        <img src="{main2}"className="main1-img" alt="sorry"></img> */}
      {children}
      {reverse}
    </div>
  )
}

export default Card
