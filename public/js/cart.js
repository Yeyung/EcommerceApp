document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.increase').forEach(function(increaseBtn) {
        increaseBtn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const numberElement = document.querySelector(`.number[data-index="${index}"]`);
            const quantityElement = document.querySelector(`.quantity-number[data-index="${index}"]`);
            var product_id = document.getElementById('product_id').value;

            if (numberElement && quantityElement) {
                numberElement.textContent = parseInt(numberElement.textContent) + 1;
                quantityElement.textContent = numberElement.textContent;
                updateNumber(product_id,parseInt(numberElement.textContent))
            }
        });
    });

    document.querySelectorAll('.decrease').forEach(function(decreaseBtn) {
        decreaseBtn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const numberElement = document.querySelector(`.number[data-index="${index}"]`);
            const quantityElement = document.querySelector(`.quantity-number[data-index="${index}"]`);
            var product_id = document.getElementById('product_id').value;

            if (numberElement && quantityElement) {
                const newValue = parseInt(numberElement.textContent) - 1;
                if (newValue >= 0) {
                    numberElement.textContent = newValue;
                    quantityElement.textContent = newValue;
                    updateNumber(product_id,newValue)
                }
            }
        });
    });
});


function updateNumber(product_id,quantity){
    fetch('http://localhost:3000/carts/'+product_id,{
        method:'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity:quantity})
    }).
    then(data=>data.json()).
    then((data)=>{
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    }).catch((e)=>{
        console.log(e)
    })
}


 function delete_btn(product_id){
    fetch('http://localhost:3000/carts/'+product_id,{
        method:'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }).
    then(data=>data.json()).
    then((data)=>{
        window.location.reload();
    }).catch((e)=>{
        console.log(e)
    })
}