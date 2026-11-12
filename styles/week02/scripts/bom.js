//Added code to prevent duplicate
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {

    if (input.value.trim() !== '') {

        const chapters = list.querySelectorAll('li');

        for (let chapter of chapters) {
            if (chapter.firstChild.textContent.trim().toLowerCase() === input.value.trim().toLowerCase()) {
                input.value = '';
                input.focus();
                return;
            }
        }

        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';

        input.focus();
    }

});
