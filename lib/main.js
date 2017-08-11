function main(number){
    let result="";
    if(number>=99)
    {
        result+="No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.";

    }
    else if(number>1)
    {
        result += number+" bottles of beer on the wall, "+number+" bottles of beer.Take one down and pass it around, no more bottles of beer on the wall.";
    }
    else if(number===1)
    {
        result += number+" bottle of beer on the wall, "+number+" bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.";
    }
    
    return result;
    
}

module.exports = main;
