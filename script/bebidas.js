document.addEventListener('DOMContentLoaded', function () {
    const beverages = [
        {
            name: 'Cola cola lata',
            valor: '6,90',
            price: 6.90,
            image: './img/refri-1.png'
        },
        {
            name: 'Guaraná lata',
            valor: '5,90',
            price: 5.90,
            image: './img/refri-1.png'
        }
    ];

    const beverageContainer = document.getElementById('bebidas-container');

    beverages.forEach(beverage => {
        const beverageElement = document.createElement('div');
        beverageElement.className = 'p-2 flex w-full gap-2 items-center';
        beverageElement.innerHTML = `
            <img src="${beverage.image}" alt="${beverage.name}" class="w-24 h-24 rounded-md">
            <div class="w-full">
                <p class="font-bold">${beverage.name}</p>
                <div class="flex items-center gap-2 justify-between mt-3">
                    <p class="font-bold text-lg">R$ ${beverage.valor}</p>
                    <button class="bg-green-600 px-5 rounded add-to-cart-btn hover:scale-125 duration-200"
                        data-name="${beverage.name}" 
                        data-price="${beverage.price.toFixed(2)}">
                        <i class="fa fa-cart-plus text-lg text-white"></i>
                    </button>
                </div>
            </div>
        `;
        beverageContainer.appendChild(beverageElement);
    });
});