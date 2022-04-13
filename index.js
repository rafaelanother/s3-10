function positions(firstPlace, secondPlace, lastPlace){

    function changeposition(arr, from, to){
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
    }

    let arry = [firstPlace, secondPlace, lastPlace]

    if(lastPlace === "daniel") {

        arry = changeposition (arry, 2, 1)
    }

    if(secondPlace === "daniel") {
        arry = changeposition(arry, 1, 0)
    }

    console.log("1º- colocado " + arry[0])
    console.log("2º- colocado " + arry[1])
    console.log("3º- colocado " + arry[2])

}

positions("ricardo", "daniel", "lucas")