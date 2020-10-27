var cart = document.getElementById("cart");
var courses = document.getElementById("list-courses");
var tablebody = document.querySelector("#list-cart tbody");

loadEventListeners();
function loadEventListeners() {
    cart.addEventListener('click', function (){
        alert("hello")
    })
courses.addEventListener('click', function(event){
    if(event.target.classList.contains("add-cart")){

        const course = event.target.parentElement.parentElement;
        var img =  course.querySelector('img');
        var CourseType = courses.querySelector('h3').textContent;
        var price = courses.querySelector('#currentcost').textContent;
        var id = courses.querySelector('.add-cart').getAttribute("data-id");

        var row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${img}" width=100/>
        </td> 
        <td>${CourseType}</td>
        <td>${price}</td>
        <td>
            <a href="#" class="delete-course" data-id="${id}"></a>
            </td>
        `;
        tablebody.appendChild(row);
    }
})
}