// src/lib/checkLicense.js
export async function verifyLicense(licenseKey: string) {
  return fetch('https://xorw-hdid-z2mo.n7c.xano.io/api:Cx5BT875/check-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ licenseKey: licenseKey }),
  })
    .then((response) => response.json())
    .then((data) => data.isValid)
    .catch((error) => {
      console.error('Licence error:', error);
      return false;
    });
}
