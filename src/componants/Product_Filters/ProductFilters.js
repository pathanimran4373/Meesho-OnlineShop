import React, { useContext } from 'react'
import { SearchContextProvider } from "../../GlobalContext/Context/FilterProducts"
import { FaCheck } from "react-icons/fa"
import { FaSistrix } from "react-icons/fa";
const FilterSection = () => {
  const { SearchValueByInput, InputFilter: { text, category, company, color }, AllFilterProduct, clearAllFilter } = useContext(SearchContextProvider);


  //get unique category
  const getUniquedata = (data, property) => {
    let newVal = data.map((element) => {
      return element[property];
    });

    if (property === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]

    );
  };

  const categoryOnlydata = getUniquedata(AllFilterProduct, "category")
  const companyOnlydata = getUniquedata(AllFilterProduct, "company")
  const colorsOnlydata = getUniquedata(AllFilterProduct, "colors")

  return (
    <div className='filters-items'>
      {/* search by input */}
      <div className='filter-poduct-search-input'>
        <form className='filter-form' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='search...' name='text' value={text} onChange={SearchValueByInput} />
          {/* <FaSistrix  className='search-icon'/> */}
        </form>
      </div>

      {/* search by btn */}
      <div className='filter-by-btn-section'>
        <div className='filter-btn'>{
          categoryOnlydata.map((curElem, index) => {
            return (
              <button key={index} type='button' name='category' value={curElem} onClick={SearchValueByInput}>{curElem} </button>

            )
          })
        }
        </div>
        <hr />
      </div>

      {/* search by company category */}

      <div className='filter-by-company-category'>
        <h2>Shop By Brand</h2>
        <form className='searchBrandName'>
          <select name='company' id='company' className='company-filter-dropdown' onClick={SearchValueByInput}>
            {
              companyOnlydata.map((curData, index) => {
                return (
                  <option key={index} value={curData} name="company">{curData}</option>
                )
              })
            }
          </select>
        </form>
      </div>

      {/* colors */}
      <div className='colors-section'>
        <h2>Shop By Colors</h2>
        <div className='show-color'>
          {
            colorsOnlydata.map((curColor, index) => {

              if (curColor === "all") {
                return (
                  <button className='brandColor' key={index} type='button' value={color} onClick={SearchValueByInput}>All</button>
                )
              }
              return (
                <button key={index} type='button' value={curColor} name='color' style={{ backgroundColor: curColor }}
                  className='color-btn' onClick={SearchValueByInput}>
                  {color === curColor ? <FaCheck className="cheak-btn" /> : null}
                </button>
              )
            })
          }
        </div>
      </div>
      {/* clear all filter btn */}
      <div className='clear-btn'>
      <hr className='hrLine' />

        <button onClick={clearAllFilter}>Clear Filters</button>
      </div>

    </div>
  )
}

export default FilterSection
