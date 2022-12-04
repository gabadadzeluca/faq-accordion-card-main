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
    })  
});

// display the answer of a selected question
function display(){
    faq.forEach(element=>{
        if(element != this){
            element.lastElementChild.style.display = 'none';
            // arrow element
            element.firstElementChild.firstElementChild.classList.remove('arrow-up');
            element.firstElementChild.firstElementChild.classList.add('arrow-down');
        }
    })
    let content = this.lastElementChild;
    let arrow = this.firstElementChild.firstElementChild;

    if(content.style.display === 'block'){
        content.style.display = 'none';
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    }else{
        this.classList.toggle('open');
        content.style.display = 'block';
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    }
}

// add arrow to each question
function addArrow(element){
    const arrow = document.createElement('div');
    arrow.classList.add('arrow-down');
    element.firstElementChild.appendChild(arrow);
}

