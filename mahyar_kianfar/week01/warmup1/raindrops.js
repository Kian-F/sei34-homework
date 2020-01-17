
const raindrops = function (num){
    if(num%3 === 0 ){
    console.log('Pling');
    }
    else if (num%5 === 0){
        console.log('Plang');
        
    }else if (num%7 === 0){
        console.log('Plong');
        
    }else {
        console.log(num);
         
    }
    
}
raindrops(28);
raindrops(1755);
raindrops(34);