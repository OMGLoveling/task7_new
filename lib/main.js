function main(number){
    let result="";
    let end ="No more bottles of beer on the wall, no more bottles of beer." +
        "Go to the store and buy some more, 99 bottles of beer on the wall.";
    if (number === 0)
    {
        result=""+end;
    }
    else if(number >1) {
        let k = 0;
        for (let i = number; i > 1; i--) {
                k = i ;
                result += i + " bottles of beer on the wall, " + i + " bottles of beer."+"Take one down and pass it around, "+(k-1)+" bottles of beer on the wall."
            }
            result+="1 bottle of beer on the wall, 1 bottle of beer."+
                "Take one down and pass it around, no more bottles of beer on the wall.";
            result+=end;

        }
        if(number ===1)
        {
            result+="1 bottle of beer on the wall, 1 bottle of beer."+
                "Take one down and pass it around, no more bottles of beer on the wall."+end;
        }
        return result;

    
}

module.exports = main;
