


function hi(){
    console.log("hi")
}


function hello(){
    console.log("hello")
}


// HOF
function withEmoji(f){
    return function(){
        f();
        console.log("🙋‍")
    }
}


// hi();

const hiWithEmoji=withEmoji(hi)
hiWithEmoji()

