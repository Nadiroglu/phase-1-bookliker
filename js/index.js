// document.addEventListener("DOMContentLoaded", function() {});

fetch("http://localhost:3000/books")
.then(res => res.json())
.then(data => {
  console.log(data)
  for (books of data)
  displayTitles(books)
})

const displayTitles = (bookObjects) => {
  let li = document.createElement('li')
  li.textContent = bookObjects.title
  let ul = document.getElementById("list")
  ul.append(li)
  li.addEventListener('click', () => {
        
    showTitles(bookObjects);

})
    
}
const showTitles = (restObjects) => {
    let thumbNail = document.createElement('img')
    thumbNail.src = restObjects.img_url

    let description = document.createElement('p')
    description.textContent = restObjects.description

    let listUsers = document.createElement('ul')
    
    
    let users = document.createElement('li')
    users.textContent = restObjects.users
    listUsers.append(users)

    let div = document.getElementById("show-panel")
    div.append(thumbNail, description, listUsers)

}




