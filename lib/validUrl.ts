export function isValidURL(url: string) {
  const regex =
    /^(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]$/;
  return regex.test(url);
}

export async function checkIfUrlExists(url: string) {
  return new Promise((resolve, rej) => {
    fetch(url, { method: 'HEAD' })
      .then((response) => resolve(response.status.toString()[0] === '2'))
      .catch((error) => rej(false));
  });
}
