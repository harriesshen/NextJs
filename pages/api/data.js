export default function data(req, res) {
  const res = fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
  );
  res.status(200).json({ text: "hello" });
}
