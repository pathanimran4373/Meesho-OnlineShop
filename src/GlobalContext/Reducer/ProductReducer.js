const ProductsReducer = (state, action) => {

    switch (action.type) {
        case "LODING_CURSOR":
            return {
                ...state,
                isLoding: true,

            };

        case "GET_DETA":

          
            return {
                ...state,
                isLoding: false,
                //get deta for product page
                Products: action.payload,
                
            };

        case "SHOW_ERROR":
            return {
                ...state,
                isLoding: false,
                isError: true,
            };

        case "IS_LODINGCURSOR":
            return {
                ...state,
                isproductLoding: true,
            };

        case "GET_PRODUCTDETALS":
            return {
                ...state,
                isproductLoding: false,
                //get data for single page product details
                GetProductDetail: action.payload,
            };

        case "show_errordetails":
            return {
                ...state,
                isproductLoding: false,
                showError: true
            };

        default: return state;

    };
};
export default ProductsReducer