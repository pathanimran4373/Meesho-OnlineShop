import React, { useContext } from 'react'
import { FaThLarge, FaList } from "react-icons/fa";
import { SearchContextProvider } from '../../GlobalContext/Context/FilterProducts'

const SortProduct = () => {

  const { GridView, setGridView, setListView,sorting } = useContext(SearchContextProvider);

  return (
    <div className='list-greed-section '>
      <div className='container-btn'>
        <button className={GridView ? "active sort-btn" : "sort-btn"} onClick={setGridView} ><FaThLarge  className='btn-icon'/></button>
        <button className={!GridView ? "active sort-btn" : "sort-btn"} onClick={setListView}><FaList className='btn-icon'/></button>
      </div>
      <div className='show-product-quantity'>
        {/* <p style={{color:"whitesmoke"}}>{`${Productpage.length()} `}Product Available</p> */}
      </div>
      <div className='drop-down-menu'>
        <form className='drop-down-item'>
          <label htmlFor='sort'>Sort by : </label>
          <select className='form-drop-down-menu' name='sort' id="sort" onClick={sorting}>
            <option value="lowest">price(lowest)</option>
            <option value="highest">price(highest)</option>
            <option value="a-z">price(a-z)</option>
            <option value="z-a">price(z-a)</option>
          </select>
        </form>

      </div>
    </div>
  )
}

export default SortProduct
