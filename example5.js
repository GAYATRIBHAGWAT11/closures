function x(){
for(var i=1;i<=5;i++)
    setTimeout(function(){
        console.log(i);
    },i*3000)
    console.log("namaste javascript");
    }
    x()