var add_product_btn = document.getElementById('add_product_btn');

add_product_btn.addEventListener('click',function(){
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var price = document.getElementById('price').value;
    var stock_quantity = document.getElementById('stock_quantity').value;
    var category = document.getElementById('category_id').value;
    var region = document.getElementById('region_id').value;

    // console.log(name,description,price,stock_quantity)

    fetch('http://localhost:3000/add',{
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name,description,price,stock_quantity,category,region })
    }).
    then(data=>data.json()).
    then((data)=>{
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    }).catch((e)=>{
        console.log(e)
    })
})