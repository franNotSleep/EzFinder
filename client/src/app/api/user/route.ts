const SERVER_ROUTE = 'http://localhost:3001';

export async function POST(request: Request) {
  const body = await request.json() as { email: string, password: string };

  const res = await fetch(`${SERVER_ROUTE}/user/login`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return Response.json({ data });
}
