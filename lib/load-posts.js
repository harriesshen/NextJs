export async function loadPosts() {
  const res = await fetch("https://random-data-api.com/api/v2/users?size=1");
  const data = await res.json();
  return data;
}
