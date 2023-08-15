const cartReducer = (state, action) => {

    if (action.type === "ADD_PRODUCT_IN_CART") {

        let { id, color, amount, product } = action.payload;

        let cartItems;
        cartItems = {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        };
        return {
            ...state,
            cart: [...state.cart, cartItems]
        }

    }
//dispaly total item in navabr
if (action.type === "CART_TOTAL_ITEM"){
    let updateItemVal = state.cart.reduce((initialVal,curElem)=>{
        let {amount} =curElem;
        initialVal = initialVal + amount;
        return initialVal;
    },0);
    return {
        ...state,
        totalItem:updateItemVal,
    };
}
    // increment and decrement quantity on cart page
    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let decAmount = curElem.amount - 1;
                if (decAmount <= 1) {
                    decAmount = 1;
                }
                return {
                    ...curElem,
                    amount: decAmount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: updatedProduct }
    }
    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let incAmount = curElem.amount + 1;
                if (incAmount >= curElem.max) {
                    incAmount = curElem.max;
                }
                return {
                    ...curElem,
                    amount: incAmount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: updatedProduct }
    }
    // total price with shiping fees
    if (action.type === "CART_TOTAL_ITEM_PRICE"){
        let totalAmount = state.cart.reduce((initialVal,curElem)=>{
            let { price,amount} = curElem;
            initialVal = initialVal + price * amount ;
            return initialVal;
        },0);
        return {
            ...state,
            totalAmount,
        };
    }
    // remove btn function
    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curItem) => curItem.id !== action.payload,
        );
        return {
            ...state,
            cart: updatedCart,
        };
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }
    return state;
};
export default cartReducer