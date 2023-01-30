function addList(e) {
    if (e.code === 'Enter') {
        let item = document.querySelector('.lists');

        newItem = document.createElement('li');
        let newTask = document.querySelector('#newTask');
        
        newItem.innerHTML = newTask.value;
        item.append(newItem);
        newTask.value = "";
    }
}