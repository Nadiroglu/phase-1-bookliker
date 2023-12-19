fetch("http://localhost:3000/books")
.then(res => res.json())
.then(data => {
  console.log(data)
})

const displayTitles = (bookObjects) => {
  let li = document.createElement('li')
  li.textContent = bookObjects.


}
// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

// require("./helpers.js");

// describe("", () => {
//   describe("", () => {
//     it("Test passing", () => {
//       return true;
//     });
//   });
// });
