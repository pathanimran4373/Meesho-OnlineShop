import { createContext,useReducer, useEffect, useContext } from 'react'
import reducer from '../Reducer/FilterReducer'
import { ContextProvider } from './ProductContext';

 export const SearchContextProvider = createContext();

const initialState = {
    ProductpageData:[],
    AllFilterProduct:[],
    GridView:true,
    sorting_value:"",
    InputFilter:{text:"", category:"all", company:"all", color:"all"},
};

  const SearchGlobaleContext = ({ children }) => {

    const {Products} = useContext(ContextProvider)
// console.log(Products)

 const [state, dispatch] = useReducer(reducer, initialState);

//set greed view
const setGridView =()=>{
    return dispatch({type:"SET_GREEDVIEW"})
    
};
const setListView =()=>{
    return dispatch({type:"SET_LISTVIEW"})
    
};

//sorting product by value a to z

const sorting = (event)=>{
    let userValue = event.target.value;
    dispatch({type:"GET_SORT_VALUE", payload:userValue})
}

// get input and filter
const SearchValueByInput =(event)=>{
let name = event.target.name;
let value = event.target.value;

return dispatch({type:"INPUTFILTER_VALUE", payload:{name,value}})
};

// filter product by name and company

useEffect(()=>{
    dispatch({type:"SEARCH_VALU_BYINPUT"});
    dispatch({type:"SORTING_PRODUCT"});
},[Products,state.sorting_value,state.InputFilter]);
   
//clear all filter function

const clearAllFilter =()=>{
    dispatch({type:"CLEAR_ALL_FILTER"});
}
//get api show product page
    useEffect(() => {
        dispatch({type:"SHOW_ALLPRODUCT",payload:Products});
    }, [Products]);


    return (
        <SearchContextProvider.Provider value={{ ...state,setGridView,setListView,sorting,SearchValueByInput,clearAllFilter }}>
            {children}
        </SearchContextProvider.Provider>

    )

}

export default SearchGlobaleContext