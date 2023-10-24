"use strict";
    // FOR LOOPS

    const smallArray = ["first", "second", "third", "Draxler", "Vitinha"];
    for (let i = 0; i < smallArray.length; i++) {
        // i is initially assigned zero because index of the first element in an array is zero
        console.log(smallArray[i]);
    }

    for (let i = 0; i < 41; i++) {
        console.log(i);
    }



    // WHILE LOOPS

    let x = 0;
    while (x < 15) {
        console.log(x);
        x++;
    }

    let a = 0;
    const whileArray = [2, 3, true, undefined, "selective", "Albeciete", "Selacao", {carBrand: "Tesla", price: 30000, year: 1988, owner: "Elon Musk"}];
    while (a < whileArray.length) {
        console.log(whileArray[a]);
        a++;
    }