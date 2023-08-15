import { Link, useNavigate } from 'react-router-dom'
import logo from "../../../assets/images/logo.png"
import "./Header.css"


function Header() {

    
    const navigate = useNavigate()
    const handaleClick = () => {
        navigate("/login")
    }
    const handleCart = () => {
        navigate("/cart")
    }


    return (

        <>
            <section class="header-section">
                <header class="header">
                    <div class="headerLeft">
                        <div class="logocontainer">
                            <Link to="/"><img src={logo} alt='logo' /></Link>
                        </div>
                    </div>
                    <div class="searchinputContainer">
                        <div class="searchIcon">
                            <img src="https://tse2.explicit.bing.net/th?id=OIP.7E1azWCloFzN3dI9-RkF8gHaHa&pid=Api&P=0" alt='kj' />
                        </div>
                        <form action="" id="inputForm">
                            <input type="text" placeholder="Try Saree, kurti or search by product code" class="inputSerch" />
                        </form>
                    </div>

                    <div class="headerRight">
                        <div class="downloadContainer">
                            <div class="mobileicon">
                                <i class="fa-solid fa-mobile"></i>
                            </div>
                            <p>Download App</p>

                            <div class="downlodHoverBtnContainer">
                                <h2>Download form</h2>

                                <Link class="downloadBtn">
                                    <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt='img' />
                                </Link>
                                <Link class="downloadBtn">
                                    <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt='img' />
                                </Link>
                            </div>
                        </div>

                        <div class="becomeSupplierContainer">
                            <p>Become a Supplier</p>
                        </div>



                        <div class="profileAndCart">
                            <div onClick={handaleClick} class="profileContainer">
                                <div class="profileIcon">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <p>profile</p>
                            </div>

                            <div class="CartContainer">
                                <div class="cartIcon">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <p onClick={handleCart}>cart</p>
                            </div>
                        </div>
                    </div>


                </header>
               <Link to="/product" style={{textDecoration:"none"}}>
               <nav class="navbar">
                    <ul>
                        <li>Mobile
                            {/* <div class="subMenu">
                                <h4>All Women Ethnic</h4>
                                <p>View All</p>
                                <p>View All</p>

                            </div> */}
                        </li>
                        <li>Watch
                            {/* <div class="subMenu">
                                <h4>Topwear</h4>
                                <p></p>

                            </div> */}
                        </li>
                        <li>Headphone
                            {/* <div class="subMenu">
                                <h4>Topwear</h4>
                            </div> */}
                        </li>
                        <li>Laptop
                            {/* <div class="subMenu">
                                <h4>Boys & Girls 2+ Years</h4>
                            </div> */}
                        </li>
                        <li>Smart Phone
                            {/* <div class="subMenu">
                                <h4>Home Furnishing</h4>
                            </div> */}
                        </li>
                        <li>Computer
                            {/* <div class="subMenu">
                                <h4>Make up</h4>
                            </div> */}
                        </li>
                        <li>Accessories
                            {/* <div class="subMenu">
                                <h4>Jewellery</h4>
                            </div> */}
                        </li>
                        <li>Bags & Footwear
                            {/* <div class="subMenu">
                                <h4>Women Bags</h4>
                            </div> */}
                        </li>
                        <li>Electronics
                            {/* <div class="subMenu">
                                <h4>Mobile & Accessories</h4>
                            </div> */}
                        </li>


                    </ul>

                </nav>

               </Link>
            </section>


        </>

    )
}

export default Header
