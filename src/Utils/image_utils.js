function getImageUrl(name) {
  const imageUrl = new URL(`../assets/svg/${name}`, import.meta.url).href;
  return imageUrl;
}

function getImageProjectUrl(name) {
  const imageUrl = new URL(`../assets/images/${name}`, import.meta.url).href;
  return imageUrl;
}

export { getImageUrl, getImageProjectUrl };