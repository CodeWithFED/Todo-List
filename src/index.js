let username;
let input = document.getElementById("mytext");
let btn = document.getElementById("mybtn");
btn.onclick = () => {
    username = input.value;
    let newElement = document.createElement('li'); // Removed 'getElementById()' from this line
    newElement.innerHTML = input.value;
    console.log(username);
    document.getElementById("list").appendChild(newElement); // Assuming you have a ul or ol with id "mylist" to append the new li
}