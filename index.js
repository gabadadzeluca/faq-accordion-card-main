// add classes to all elements
document.addEventListener('DOMContentLoaded', ()=>{
    
    const faq = document.querySelectorAll('.faq div');
    faq.forEach(element =>{
        addArrow(element);
        let question = element.firstElementChild;
        let answer = element.lastElementChild;
        question.classList.add('question');
        answer.classList.add('answer');
        console.log(question , answer); 
        // element.addEventListener('click', display);
    })  
});


// display the answer of a selected question
function display(e){
    const box = e.target;
    console.log(box);
    console.log("parent: ",box.parentElement);
    box.parentElement.lastElementChild.style.display = 'block';
}


// add arrow to each question
function addArrow(element){
    const arrow = document.createElement('div');
    arrow.classList.add("arrow-down");
    element.firstElementChild.appendChild(arrow);
}