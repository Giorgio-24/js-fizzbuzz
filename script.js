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
 




for(var i = 1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        list.innerHTML += '<li>FizzBuzz</li>';
        console.log('FizzBuzz');
    } else if(i % 3 == 0) {
        list.innerHTML += '<li>Fizz</li>';
        console.log('Fizz');
    } else if( i % 5 == 0 ){
        list.innerHTML += '<li>Buzz</li>';
        console.log('Buzz');
    } else {
        list.innerHTML += `<li>${i}</li>`;
        console.log(i);
    }
}