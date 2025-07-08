document.querySelectorAll('.card-produk').forEach(card=>{
    const input = card.querySelector('.quantity input');
    const minus = card.querySelector('.minus');
    const plus = card.querySelector('.plus');

    plus.addEventListener('click',()=>{
        let value = parseInt(input.value);
        input.value = value + 1;
    });

    plus.addEventListener('click',()=>{
        let value = parseInt(input.value);
        if(value > 1){input.value = value - 1};
    });

    plus.addEventListener('click',()=>{
        let value = parseInt(input.value);
        if(isNaN(value)||value<1){
            input.value = 1
        }
    });
}