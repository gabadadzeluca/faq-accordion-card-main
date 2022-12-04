const faq = document.querySelectorAll('.faq div');

// add classes to all elements
document.addEventListener('DOMContentLoaded', ()=>{
    faq.forEach(element =>{
        addArrow(element);
        let question = element.firstElementChild;
        let answer = element.lastElementChild;
        question.classList.add('question');
        answer.classList.add('answer');
        element.addEventListener('click', display);
        console.log(element);
    })  
});

// display the answer of a selected question
function display(){
    faq.forEach(element=>{
        if(element != this){
            element.lastElementChild.style.display = 'none';
        }
    })
    let content = this.lastElementChild;
    console.log(content);
    if(content.style.display === 'block'){
        content.style.display = 'none';
    }else{
        this.classList.toggle('open');
        content.style.display = 'block';
    }
}

// add arrow to each question
function addArrow(element){
    const arrow = document.createElement('div');
    arrow.classList.add('arrow-down');
    element.firstElementChild.appendChild(arrow);
}