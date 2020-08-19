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

        function validation() {
            if (name.trim() == null) {
                alert('Name is undefined');
                if (name.trim().lenght == 0) {
                    alert('The name need one or more characters');
                }
            }

            if (surname.trim() == null) {
                alert('Name is undefined');
                if (surname.trim().lenght == 0) {
                    alert('The name need one or more characters');
                }
            }

            if (age == null) {
                alert('Name is undefined');
                if (age.trim().lenght <= 0) {
                    alert('The name need one or more characters');
                    if (isNaN(age)) {
                        alert('Age is not a number');
                    }
                }
            }
            return false
        }
        validation();


        var indice;
        for (indice in UserData) {
            var paragraph = document.createElement('p');
            paragraph.append(UserData[indice]);
            box_dashed.append(paragraph);
        }
        return false;
    });
});