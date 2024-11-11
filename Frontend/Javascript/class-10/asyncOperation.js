// Async Operations Chapter :

// Synchronous code
// console.log("Start");
// console.log("Middle");
// console.log("End");

// Asynchronous code with setTimeout
// console.log("Start");
// setTimeout(() => console.log("Middle"), 2000); // Executes after 2 seconds
// console.log("End");

// Fetch()

const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

//   Using Async/Await with Fetch:

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData(); // invoke
