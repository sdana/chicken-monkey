const ChickenMonkey = function() {
    for (let i=1; i<=100; i++) {
        if (i % 5 === 0){
            console.log("Chicken")
        }
        else if (i % 7 === 0){
            console.log("Monkey")
        }    
        else {
        console.log(i)
        }
    }
}
ChickenMonkey()