// Your Code Here
async function main() {
  const response = await fetch("http://localhost:3001/listBooks");

  const result = await response.json();

  let listBooks = result;
  async function listBooks() {
    await fetch("http://localhost:3001/listBooks", {
      method: "GET",
    });
  }
}
main();
