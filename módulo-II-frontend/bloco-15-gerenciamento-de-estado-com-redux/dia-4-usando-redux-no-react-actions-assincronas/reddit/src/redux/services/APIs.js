export const getReddit = async (input) => {
  const data = fetch(`https://www.reddit.com/r/${input}.json`)
    .then(response => response.json())
    .then (json => json.data);
  return data;
}
