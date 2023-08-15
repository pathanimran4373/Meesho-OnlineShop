
import { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import  reducer  from '../Reducer/ProductReducer'

const ContextProvider = createContext();

const initialState = {
    isLoding: false,
    //get deta for product page
    Products: [],
    isError: false,
    isproductLoding: false,
    //get deta for product details
    GetProductDetail: {},
    showError: false,
};

const GlobaleContext = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);


    // globale api for product page 
    const API =  "https://api.pujakaitem.com/api/products";

    const Productapi = async (API) => {
        dispatch({ type: "LODING_CURSOR" });
        try {
            const response = await axios.get(API);

            const AllProducts = await response.data;
            // console.log(AllProducts)
            dispatch({ type: "GET_DETA", payload: AllProducts })
        } catch (error) {
            dispatch({ type: "SHOW_ERROR" })
        }

    };

    useEffect(() => {
        Productapi(API);
    }, []);

    //single page product function
const SingleProductapi = async (url) => {
    
    dispatch({ type: "IS_LODINGCURSOR" });
    try {
        const singleprod = await axios.get(url);
        const Getproductdetail = await singleprod.data;
        console.log(Getproductdetail)
        dispatch({ type: "GET_PRODUCTDETALS", payload: Getproductdetail })
    } catch (error) {
        dispatch({ type: "show_errordetails" })
    }
};


    return (
        <ContextProvider.Provider value={{ ...state,SingleProductapi }}>
            {children}
        </ContextProvider.Provider>

    );

};

export { GlobaleContext, ContextProvider }