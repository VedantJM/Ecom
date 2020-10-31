var cart = document.getElementById("cart");
var courses = document.getElementById("list-courses");
var tablebody = document.querySelector("#list-cart tbody");
var emptyCartButton = document.getElementById("empty-cart");
loadEventListeners();
function loadEventListeners() {
    cart.addEventListener('click', deleteCourse);
    courses.addEventListener('click', addCourse);
    emptyCartButton.addEventListener('click', emptyCart);
    document.addEventListener('DOMContentLoaded', readLocalStorage)
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
        saveCourseToLocalStorage(courseInfo);
    }
}

function deleteCourse(event){
    if (event.target.classList.contains("delete-course")){
        event.target.parentElement.parentElement.remove();
    }
}
localStorage.clear();
function emptyCart() {
    while (tablebody.firstChild){
        tablebody.removeChild(tablebody.firstChild);
    }
}

function saveCourseToLocalStorage(course){
    let courses = getCoursesLocalStorage();
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(course));
}

function readLocalStorage(){
    let courses = getCoursesLocalStorage;
    console.log(courses);
    courses.forEach(function(course){
        let row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${course.img}" /></td>
        <td>${course.courseType}</td>
        <td>${course.price}</td>
        <td>
            <a href="#" class="delete-course" data-id="${course.id}">X</a>
            </td>
        `;
        tablebody.appendChild(row);
    })
   
}

function getCoursesLocalStorage(){
    let courses;
    if (localStorage.getItem('courses')== null){
        courses=[];
    }else{
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}