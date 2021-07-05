var numberList = [];

for(i = 1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        numberList = 'FizzBuzz'.push;
        console.log('FizzBuzz')
    } else if(i % 3 == 0) {
    numberList = 'Fizz'.push;
    console.log('Fizz')
    } else if( i % 5 == 0 ){
        numberList = 'Buzz'.push;
        console.log('Buzz')
    } else {
        numberList = i.push;
        console.log(i)
    }
}