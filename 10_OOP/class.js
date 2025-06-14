class Toyotacar{

    constructor(brand){
        this.brand = brand
        console.log("creating new object");
        
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brand = brand 
    // }

}

let fortuner = new Toyotacar("Legender");
console.log(fortuner.brand);

// console.log(fortuner);
// console.log(typeof fortuner);

// fortuner.start()
// fortuner.setBrand("fortuner")

// console.log(fortuner.brand);


