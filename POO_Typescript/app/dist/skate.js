var TShirt = /** @class */ (function () {
    function TShirt(color, model, branch, size) {
        this.color = color;
        this.model = model;
        this.branch = branch;
        this.size = size;
    }
    TShirt.prototype.change_size = function (new_size) {
        this.size = new_size;
    };
    return TShirt;
}());
var nike_blue = new TShirt(null, null, null, null);
var nike_red = new TShirt('red', 'bucana', 'nike', 20);
nike_blue.color = 'blue';
nike_blue.branch = 'nike';
nike_blue.change_size(10);
console.log(nike_blue);
