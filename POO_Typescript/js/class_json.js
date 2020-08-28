window.addEventListener('load', () => {
    var skate = {
        color: 'red',
        model: 'Santa cruz',
        wheels: 'Vortize',
        tricks: 'Steam',
        changeColor: function(new_color) {
            // skate.color = new_color;
            this.color = new_color;
        }
    }

    console.log(skate);
    skate.changeColor("blue");
    console.log(skate);
});