


//part 1
async function getFact(){
    let number =50;
    let URL = `http://numbersapi.com/${number}?json`;
    let data = await axios.get(URL)
    console.log(data)
}
getFact()
//part 2
async function getFacts(){
    let numbers =[20, 45, 70];
    let URL = `http://numbersapi.com/${numbers}?json`;
    let data = await axios.get(URL)
    console.log(data)

}
getFacts()
async function getFourFacts(){
    let fourFacts =[];
    let number = 70;
    let URL = `http://numbersapi.com/${number}?json`;
    for ( let i=0; i < 5; i++ ){
        fourFacts.push(axios.get(URL))
    }
    let data = await Promise.all(fourFacts)
    for (res of data){
        $("body").append(`<p>${res.data.text}</p>`)
    }
    
}
getFourFacts()




