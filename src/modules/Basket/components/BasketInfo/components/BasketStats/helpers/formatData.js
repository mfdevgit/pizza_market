export const formatData = data => {
    switch (data[0]) {
        case 'totalProducts':
            return data[1]
        case 'totalPrice':
            if (data[2] === undefined) {
                return data[1] + ' ₽'
            } else {
                return [`${data[1]} ₽`, `${data[2]} ₽`]
            }
        case 'minTotalPrice':
            return 'от ' + data[1] + ' ₽'
        case 'minFreeShipping':
            return 'от ' + data[1] + ' ₽'
    }
}
