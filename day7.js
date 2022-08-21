var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all', true);

request.send();

request.onload = function(){

    var data = JSON.parse(request.response);
    console.log(data);

    1

    // var result = data.filter((element)=>{
    //     return element.region === "Asia";
    // })
    // console.log(result);


2


// var result = data.filter((element)=>{
//     return element.population < 200000;
// })
// console.log(result);
// }


3

// data.forEach(consoleData);
// function consoleData(name ){
//     console.log(name.capital)
//     console.log(name.flag)
//     console.log(name)


4

// let total=data.reduce(function(acc,curr){

// return acc+curr.population

// })
// console.log(total)


5


var result = data.filter((element)=>{
    return element.currencies
    
    
})
console.log(result);

}


