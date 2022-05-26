const BASE_URL = "https://api.artic.edu/api/v1/artworks";

export function getArt() {
  return fetch(`${BASE_URL}`).then((response) => response.json());
}
