const phones = [
    { name: 'iPhone', price:900},
    { name: 'iPod', price:2000},
    {name: 'Sumsung', price: 1000},
];
let cheapest = phones[0];
for(const phone of phones) {
    if(phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);

