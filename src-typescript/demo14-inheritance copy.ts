class Father {
    public fAge: number;

    constructor(a:number)
    {
        this.fAge=a;
    }

    public fatherStyle(): void {
        console.log("father style");
    }
}

class Son extends Father {
    public sAge: number;

    constructor(a:number,b:number)
    {
        super(a);
        this.sAge=b;
    }

    public sonStyle(): void {
        console.log("son style");
    }
}


const sobj = new Son(70,30);

console.log(sobj.fAge);
console.log(sobj.sAge);
sobj.fatherStyle();
sobj.sonStyle();