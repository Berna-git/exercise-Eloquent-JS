class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    mas(Vec) {
        this.x = this.x + this.x;
        this.y = this.y + this.y;
    }
    // menos(j){
    //     let resultado = this.x + this.y - j;
    //     return resultado;
    // }
    // get longitud() {
        
    // }
}

let myVec = new Vec(2,2);
myVec.mas(new Vec(3,3));
console.log(new Vec(2,2)) 