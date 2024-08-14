import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ botArray, handleDisplay, deleteBot }) => (
  <div className="ui segment inverted olive bot-army">
    <div className="ui five column grid">
      <div className="row bot-army-row">
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
  </div>
);

export default YourBotArmy;
