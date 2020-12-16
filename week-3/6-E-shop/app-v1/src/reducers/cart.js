
// let p={
//     name:'Nag',
//     age:37
// }

// delete p.name;

function cartReducer(state = {}, action) {

    let { type } = action
    switch (type) {
        case 'BUY': {
            let { item } = action
            let { id } = item
            let cartLine = state[id]
            if (cartLine) {
                cartLine = { ...cartLine, qty: cartLine.qty + 1 }
            } else {
                cartLine = { item, qty: 1 }
            }
            return { ...state, [id]: cartLine }
        }
        case 'CART_REMOVE': {
            let { item } = action
            let { id } = item;
            delete state[id] // mutable
            return { ...state };
        }
        case 'CART_QTY': {
            let { item, qty } = action
            let { id } = item;
            let cartLine = state[id]
            if (cartLine)
                cartLine = { ...cartLine, qty: cartLine.qty + qty }
            return {
                ...state, [id]: cartLine
            }
        }
        default:
            return state;
    }

}

export { cartReducer }