function solve() {

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');

    let sections = document.querySelectorAll('section');
    let [inputSection, openSection, progressSection, completeSection] = sections;


    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        if (!task.value || !description.value || !date.value) {
            return;
        }

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = task.value;
        article.appendChild(h3);

        let p1 = document.createElement('p');
        p1.textContent = `Description: ${description.value}`;
        article.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date.value}`;
        article.appendChild(p2);

        let div = document.createElement('div');
        div.classList.add('flex');

        let startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start'
        startBtn.addEventListener('click', startButton)
        div.appendChild(startBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteButton)
        div.appendChild(deleteBtn);

        article.appendChild(div);
        openSection.lastElementChild.appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';

        function startButton() {
            startBtn.remove();

            let finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', finishButon);
            div.appendChild(finishBtn);

            progressSection.lastElementChild.appendChild(article);
        }

        function deleteButton() {
            article.remove();
        }

        function finishButon() {
            div.remove();
            completeSection.lastElementChild.appendChild(article)
        }
    }
}