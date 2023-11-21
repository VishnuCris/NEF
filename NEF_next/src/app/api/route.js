export async function GET() {
  const res = await fetch('http://192.168.1.4:3001/', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}