import React from "react";
import main from "../Image/main.png";
import side from "../Image/side.png"


function Card({children,reverse})  {
  return (
    <div className="container">
        <img src="{main}"className="main-img" alt="sorry"></img>
        <img src="{side}"className="main1-img" alt="sorry"></img>
      {children}
      {reverse}
    </div>
  )
}

export default Card
