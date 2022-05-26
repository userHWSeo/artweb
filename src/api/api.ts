// 시카오 아트 인스튜드 미술품 API
const BASE_URL = "https://api.artic.edu/api/v1/artworks";

export function getArt() {
  return fetch(`${BASE_URL}`).then((response) => response.json());
}
