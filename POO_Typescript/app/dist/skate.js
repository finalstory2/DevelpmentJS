var TShirt = /** @class */ (function () {
    function TShirt(color, model, branch, size) {
        this.color = color;
        this.model = model;
        this.branch = branch;
        this.size = size;
    }
    TShirt.prototype.set_model = function (model) {
        this.model = model;
    };
    TShirt.prototype.get_model = function () {
        return this.model;
    };
    TShirt.prototype.set_size = function (new_size) {
        this.size = new_size;
    };
    TShirt.prototype.get_color = function () {
        return this.size;
    };
    return TShirt;
}());
var nike_blue = new TShirt(null, null, null, null);
var nike_red = new TShirt('red', 'bucana', 'nike', 20);
nike_blue.color = 'blue';
nike_blue.branch = 'nike';
nike_blue.set_size(10);
