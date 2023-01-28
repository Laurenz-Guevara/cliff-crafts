const API = 'https://europe-west1-cliff-crafts.cloudfunctions.net/api';

export async function fetchFromAPI(endpointURL: any, opts: any) {
  const { method = null, body = null } = {
    method: 'POST',
    body: null,
    ...opts,
  };

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}
