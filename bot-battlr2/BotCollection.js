import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ botArray, handleDisplay, deleteBot }) => (
  <div className="ui four column grid">
    <div className="row">
      {botArray.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleDisplay={handleDisplay}
          deleteBot={deleteBot}
        />
      ))}
    </div>
  </div>
);

export default BotCollection;
