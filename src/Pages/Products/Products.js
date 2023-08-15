import ProductList from '../../componants/Product_Filters/ProductList/PeoductList'
import SortProduct from '../../componants/Product_Filters/ProductSorting'
import FilterSection from '../../componants/Product_Filters/ProductFilters'
import './Product.css'

function Products() {


    return (
        <>
            <section className='product-layout-page'>
                <h1>Products For You</h1>
                <div className='product-and-filter-container'>

                        <div className='filter-section'>
                            <h2>Shop By Category</h2>
                            <hr />
                            <FilterSection />
                        </div>


                    {/* right section */}
                    <div className='right-product-container'>
                        <div className='sort-filter'>
                            <SortProduct />
                        </div>
                        <div className='main-product'>
                            <ProductList />
                        </div>
                    </div>
                </div>



            </section>

        </>

    )
}

export default Products
