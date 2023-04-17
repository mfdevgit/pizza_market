export function setAdditionalOptions({ category, price, size, pizzaOptions }) {
    let options = {}
    if (category === 'pizzas') {
        options.price = price[pizzaOptions.size]
        options.size = pizzaOptions.size
        options.dough = pizzaOptions.dough
    } else {
        options = { price, size }
    }
    return options
}
