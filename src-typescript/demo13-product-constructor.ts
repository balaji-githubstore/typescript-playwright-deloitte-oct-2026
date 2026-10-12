
export class Product
{
    public id:number;
    public name:string;

    constructor(id:number,name:string)
    {
        this.id=id;
        this.name=name;
    }

    public clickUsingId():void
    {
        console.log(this.id);
        console.log(this.name);
        console.log("clicked..")
    }
}
