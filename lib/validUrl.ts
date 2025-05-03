export function isValidURL(url: string) {
  const regex =
    /^(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]$/;
  return regex.test(url);
}

// for now I will fashe this check becasue I am getting error for authentication proteted sites.
// export async function checkIfUrlExists(url: string): Promise<boolean> {
//   try {
//     const response = await fetch(url, {
//       method: 'HEAD',
//       // Remove no-cors mode to access response status
//       headers: {
//         'User-Agent': 'Mozilla/5.0', // Add a user agent to avoid being blocked
//       },
//     });
//     console.log(response, 'response');
//     return response.status >= 200 && response.status < 300;
//   } catch (error) {
//     console.error('URL check failed:', error);
//     return false; // Return false on any error instead of rejecting
//   }
// }
