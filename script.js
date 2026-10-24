const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addTask() {
    const text = inputbox.value.trim();

    if (text === '') {
        alert('You must write something!');
        return;
    }

    let li = document.createElement('li');
    li.textContent = text;
    listcontainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

    inputbox.value = '';
    savedata();
}

listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        savedata();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem('data', listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem('data') || '';
}

showTask();