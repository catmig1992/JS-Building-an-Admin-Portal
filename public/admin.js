// Your Code Here
async function main() {
  let response = await fetch("http://localhost:3001/listBooks");

  let books = await response.json();

  books.forEach(renderBook);
}

function renderBook(book) {
  let root = document.querySelector("#root");

  let li = document.createElement("li");
  li.textContent = book.title;

  let quantityInput = document.createElement("input");
  quantityInput.value = book.quantity;

  let submitButton = document.createElement("button");
  submitButton.textContent = "Submit";

  submitButton.addEventListener("click", () => {
    fetch("http://localhost:3001/updateBook", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: book.id,
        quantity: quantityInput.value,
      }),
    });
  });

  li.append(quantityInput, submitButton);

  root.append(li);
}

main();

// async function main1() {
//   let response = await fetch("http://localhost:3001/listBooks", {
//     method: "GET",
//   });

//   let books = await response.json();

//   console.log(books);
// }
// main1();

// async function main2() {
//   let response = await fetch("http://localhost:3001/updateBook", {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       id: 3,
//       title: "Legends of Arathrae",
//     }),
//   });

//   let updatedBook = await response.json();

//   console.log(updatedBook);
// }
// main2();
