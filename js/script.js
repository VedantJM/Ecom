var cart = document.getElementById("cart");
var courses = document.getElementById("list-courses");
var tablebody = document.querySelector("#list-cart tbody");

loadEventListeners();
function loadEventListeners() {
    cart.addEventListener('click', deleteCourse)
    courses.addEventListener('click', addCourse)
}
function addCourse(event){
    if(event.target.classList.contains("add-cart")){
        const course = event.target.parentElement.parentElement;
        const courseInfo = {
            img :course.querySelector('img').src,
            courseType: courses.querySelector('h3').textContent,
            price: courses.querySelector('#currentcost').textContent,
            id: courses.querySelector('.add-cart').getAttribute("data-id")
        }
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${courseInfo.img}" width=100/>
        </td> 
        <td>${courseInfo.courseType}</td>
        <td>${courseInfo.price}</td>
        <td>
            <a href="#" class="delete-course" data-id="${courseInfo.id}">X</a>
            </td>
        `;
        tablebody.appendChild(row);
    }
}

function deleteCourse(event){
    if (event.target.classList.contains("delete-course")){
        event.target.parentElement.parentElement.remove();
    }
}