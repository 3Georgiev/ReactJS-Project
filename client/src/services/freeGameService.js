export const getFreeGames = async () => {
  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=browser";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "60dc261da9msh2a9ace07a1a12efp17b5b2jsn1fd63e36c012",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
