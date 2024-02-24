export const GET = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json()
    return Response.json(data);
}