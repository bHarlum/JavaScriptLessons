

function adder(){
    total = 0;
    for(arg in arguments){
        total += arg;
    }
    return total;
}

console.log(adder(1,4));