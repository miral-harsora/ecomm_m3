import { ADD_TO_CART, ADD_TO_WISHLIST, GET_CATEGORIES, GET_CATEGORIZED_PRODUCTS, GET_PRODUCTS, GET_SINGLE_PRODUCT, REMOVE_FROM_CART, REMOVE_FROM_WL, SEARCH_PROD } from "./actionType"

const INIT_STATE = {
    products: [],
    categories: [],
    filtered: [],
    product: [],
    cart: [],
    wishlist: []
}

export const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS:{
            console.log(action.payload.httpResponse)
            const prod=action.payload.httpResponse.products.filter((product)=>(product.category!="motorcycle" && product.category!="vehicle" && product.category!="groceries"))
            console.log("prod="+JSON.stringify(prod)+"prod length"+prod.length)
            return { ...state, products: prod }}
        case GET_CATEGORIES:{
            return { ...state, categories: action.payload.httpResponse.filter((cat)=>(cat!="motorcycle" && cat!="vehicle")) }}
        case GET_CATEGORIZED_PRODUCTS:{
         
            return { ...state, filtered: state.products.filter((product) => product.category == action.payload) }}
        case SEARCH_PROD:{
            const search = state.products.filter(product => product.title.includes(action.payload))
            console.log(search)
            return { ...state, filtered: state.products.filter(product => product.title.includes(action.payload)) }}
        case GET_SINGLE_PRODUCT:{
            const single = state.products.filter(product => product.id == action.payload)
            console.log("single " + single)
            return { ...state, product: state.products.filter(product => product.id == action.payload) }}
        case ADD_TO_CART:{
            if (state.cart.some(item => item.id === action.payload.id)) {
                // Product exists: update the quantity
                return {
                  ...state,
                  cart: state.cart.map(item =>
                    item.id === action.payload.id
                      ? { ...item, quantity: item.quantity + action.payload.quantity }
                      : item
                  )
                };
              } else {
                // Product doesn't exist: add it to the cart
                return {
                  ...state,
                  cart: [...state.cart, action.payload]
                };
              }}
              
        case ADD_TO_WISHLIST:{
            const wishlist_items = [...state.wishlist, action.payload]
            return { ...state, wishlist: wishlist_items }}
        case REMOVE_FROM_WL:{
            const remove_from_wl = state.wishlist.filter((wl) => wl.id != action.payload.id)
            return { ...state, wishlist: remove_from_wl }}
        case REMOVE_FROM_CART:{
            const remove_from_cart = state.cart.filter((c) => c.id != action.payload.id)
            return { ...state, cart: remove_from_cart }}
        default:
            return state
    }
}