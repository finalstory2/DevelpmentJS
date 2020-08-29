class TShirt{
    
    public color: string | null;
    private model: string | null;
    public branch: string | null;
    private size: number | null;

    constructor(color: string | null, model:string | null,
        branch:string  | null , size: number | null) {
        this.color = color;
        this.model = model;
        this.branch = branch;
        this.size = size;
    }

    public change_size(new_size: number){
        this.size = new_size;
    }

}

let nike_blue = new TShirt(null,null,null,null);
let nike_red = new TShirt('red', 'bucana', 'nike', 20);

nike_blue.color = 'blue';
nike_blue.branch = 'nike';
nike_blue.change_size(10);
console.log(nike_blue);



