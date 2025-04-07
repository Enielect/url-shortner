function isValidURL(url: string) {
  const regex =
    /^(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]$/;
  return regex.test(url);
}

async function checkIfUrlExists(url: string) {
  return new Promise((resolve, rej) => {
    fetch(url, { method: "HEAD" })
      .then((response) => resolve(response.status.toString()[0] === "2"))
      .catch((error) => rej(false));
  });
}

async function isUrl(url: string) {
  return await checkIfUrlExists(url);
}
