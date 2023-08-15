import React, { useContext } from 'react'
import { SearchContextProvider } from '../../../GlobalContext/Context/FilterProducts'
import GridProduct from './GreedView'
import ListView from './ListView'




const ProductList = () => {
    const {GridView } = useContext(SearchContextProvider)

    if (GridView === true) {
        return <GridProduct/>;

    }
    if (GridView === false) {
        return <ListView/>;

    }
 

}




export default ProductList
