/* for(i = 1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        document.write('  FizzBuzz');
        console.log('FizzBuzz')
    } else if(i % 3 == 0) {
        document.write('  Fizz');
        console.log('Fizz')
    } else if( i % 5 == 0 ){
        document.write('  Buzz');
        console.log('Buzz')
    } else {
        document.write('  ' + i);
        console.log(i)
    }
} */
 

var listElement = document.getElementById('list');

var list = ''; 

for(var i = 1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        list += '<li class= FizzBuzz>FizzBuzz</li>';
        console.log('FizzBuzz');
    } else if(i % 3 == 0) {
        list += '<li class= Fizz>Fizz</li>';
        console.log('Fizz');
    } else if( i % 5 == 0 ){
        list += '<li class= Buzz>Buzz</li>';
        console.log('Buzz');
    } else {
        list += '<li>' + i + '</li>';
        console.log(i);
    }
}

listElement.innerHTML = list;