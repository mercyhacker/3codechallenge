import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("https://json-server-vercel-ashy-nine.vercel.app/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const deleteBot = (botId) => {
    fetch(`https://json-server-vercel-ashy-nine.vercel.app/bots/${botId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setBots(bots.filter((bot) => bot.id !== botId));
      setArmy(army.filter((bot) => bot.id !== botId));
    });
  };

  const display = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const remove = (bot) => {
    setArmy(army.filter((item) => item.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy botArray={army} handleDisplay={remove} deleteBot={deleteBot} />
      <BotCollection botArray={bots} handleDisplay={display} deleteBot={deleteBot} />
    </div>
  );
};

export default BotsPage;
