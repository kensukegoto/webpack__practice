const hi = require("./hello");

hi();
let prms = new Promise((resolve,reject) => {
    const name = "kensuke";
    console.log(`hello,${name}!`);
    resolve();
});

function hello (ms) {
    setTimeout(()=>{
        console.log("yeah!!");
    },ms)
}

async function test (){
    await hello(2000);
}

fetch('https://www3.nhk.or.jp/news/cameramanseye/data.json').then(json => {
    console.log(json);
})

test();

