// Your Code Here
async function main() {
  let response = await fetch("http://localhost:3001/listBooks", {
    method: "GET",
  });

  let books = await response.json();

  console.log(books);
}
main();
