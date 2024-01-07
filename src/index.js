let input = document.getElementById("mytext");
let btn = document.getElementById("mybtn");
let list = document.getElementById("list");
btn.onclick = () => {
    let newElement = document.createElement('li');
    newElement.innerHTML = `<span>${input.value}</span>` + ` <button type="button" class="rmbtn">Remove</button>`;
    list.appendChild(newElement);

    // Add event listener for the remove button of the newly added list item
    let removeBtn = newElement.querySelector('.rmbtn');
    removeBtn.onclick = () => {
        list.removeChild(newElement);
    }
}