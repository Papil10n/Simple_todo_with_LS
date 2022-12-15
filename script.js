const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];

addTaskBtn.addEventListener("click", () => {
    if (inputVal.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('localItem'));
        if (localItems === null) {
            taskList = []
        } else {
            taskList = localItems;
        }
        taskList.push(inputVal.value);
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }
    showList();
});

const showList = () => {
    let outPut = '';
    let taskListShow = document.querySelector(".todoListItem");
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems === null) {
        taskList = []
    } else {
        taskList = localItems;
    }
    taskList.forEach((data, ind) => {
        outPut += `
        <div class='todoList'>
            <p class="pText">${data}</p>
            <button class="deleteTask" onClick="deleteItem(${ind})">X</button>
        </div>`
    });
    taskListShow.innerHTML = outPut;
};
showList();

const deleteItem = (index) => {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showList();
}

const clearTask = () => {
    localStorage.clear();
    showList();
} 