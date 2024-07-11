document.addEventListener('DOMContentLoaded', function() {
    console.log("In")
    fetch('http://localhost:3000/products',{
        method:'get',
    }).then((data)=>{
        return JSON.stringify(data);
    }).then((data)=>{
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    }).catch((e)=>{
        console.log(e);
    });
});