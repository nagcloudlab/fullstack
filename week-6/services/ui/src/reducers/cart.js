
function cartReducer(state = {}, action) {
    let { type } = action
    switch (type) {
        case 'LOAD_CART': {
            let { cart } = action
            return cart
        }
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
        case 'CART_ITEM_REMOVE': {
            let { item } = action
            let { id } = item;
            delete state[id] // mutable
            return { ...state };
        }
        case 'CART_ITEM_QTY': {
            let { item, qty } = action
            let { id } = item;
            let cartLine = state[id]
            if (cartLine)
                cartLine = { ...cartLine, qty: cartLine.qty + qty }

            if (cartLine.qty === 0) {
                delete state[id]
                return { ...state }
            }
            return {
                ...state, [id]: cartLine
            }
        }
        default:
            return state;
    }

}

export { cartReducer }