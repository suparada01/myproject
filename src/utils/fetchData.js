export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '6175775770msh183f7bcff16b302p115018jsn197aad5bb47a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '6175775770msh183f7bcff16b302p115018jsn197aad5bb47a',
  },
};
  


export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

  return data;
}