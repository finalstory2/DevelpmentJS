window.addEventListener('load', () => {
    var form = document.querySelector('#form');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = "none";
    form.addEventListener('submit', () => {

        var name = document.querySelector('#name').value;
        var surname = document.querySelector('#surname').value;
        var age = document.querySelector('#age').value;

        console.log('Captured submit');
        var UserData = [name, surname, age];

        box_dashed.style.display = "block";


        var indice;
        for (indice in UserData) {
            var paragraph = document.createElement('p');
            paragraph.append(UserData[indice]);
            box_dashed.append(paragraph);
        }
        return false;
    });
});