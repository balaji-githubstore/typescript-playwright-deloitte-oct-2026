class Father {
    public fAge: number;

    constructor(fAge: number) {
        this.fAge = fAge;
        console.log("father constructor");
    }

    public fatherStyle(): void {
        console.log("father style");
    }
}

class Son extends Father {
    public sAge: number;

    constructor(fAge: number, sAge: number) {
        super(fAge);
        this.sAge = sAge;
        console.log("son constructor");
    }
    public sonStyle(): void {
        console.log("son style");
    }
}


const sobj = new Son(60,30);

console.log(sobj.fAge);
console.log(sobj.sAge);
sobj.fatherStyle();
sobj.sonStyle();