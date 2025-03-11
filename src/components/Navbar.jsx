import React, { useEffect, useState } from 'react';
import ShopSphere from '../assets/ShopSphere_logo.png'
import ShopSphere_initial from '../assets/ShopSphere_initial.png'
import { FaSearch, FaChevronDown, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getCategorizedProducts, searchProd } from '../action';
import { Link, useNavigate } from 'react-router-dom';
import cartImg from "../assets/cart.png"
import { useRef } from 'react';
const Navbar = () => {
  const windowWidth = String(Math.floor(useRef(window.innerWidth).current) / 2) + "px";
  console.log(windowWidth)
  const [isDropdownOpen, setIsDropdownOpen] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false });
  const cart = useSelector(state => state.cart)
  const wishlist = useSelector(state => state.wishlist)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleDropdown = (num) => setIsDropdownOpen({ ...isDropdownOpen, [num]: false });
  const toggleDropdownOpen = (num) => setIsDropdownOpen({ ...isDropdownOpen, [num]: true });
  const toggleDropdownSmall = (num) => setIsDropdownOpen({ ...isDropdownOpen, [num]: !isDropdownOpen[num] });
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const getFilteredCategories = (prefix) => cat.filter((category) => category.startsWith(prefix));
  const [cartNum, setCartNum] = useState(0)
  const [wlNum, setwlNum] = useState(0)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector(state => state.categories);
  const [cat, setCat] = useState([]);
  const navigate = useNavigate();
  const onCategory = (val, num) => {
    console.log("selected category " + val)
    toggleMenu()
    dispatch(getCategorizedProducts(val))
    navigate(`/category/${val}`);
    toggleDropdown(num)
  }
  const search = (e) => {
    console.log(e.target.value)
    dispatch(searchProd(e.target.value))
    navigate(`/${e.target.value}`)
  }
  useEffect(() => {
    console.log("categories " + categories)
    setCat(categories);
  }, [categories]);
  useEffect(() => {
    setCartNum(cart.reduce((acc, num) => {
      return (acc + num.quantity);
    }, 0))
  }, [cart]);
  useEffect(() => {
    setwlNum(wishlist.length)
  }, [wishlist]);

  const CategoryList = ({ keyword, val }) => {
    return (
      <ul className="space-y-2">
        {keyword.map((key) =>

          getFilteredCategories(key).map((cat) => (



            (


              <li
                key={cat}

                className="px-4 py-2 hover:bg-[#F7569B] hover:text-white rounded transition-all duration-300 cursor-pointer"
                onClick={() => onCategory(cat, val)}

              >
                {cat.replace("womens-", "").replace("mens-", "").replace("-", " ")}
              </li>
            )))
        )
        }
      </ul>
    )
  }
  const CategoryListSmall = ({ keyword, val }) => {
    return (
      <ul className="space-y-2">
        {keyword.map((key) =>

          getFilteredCategories(key).map((cat) => (



            (

              <Link to={`/category/${cat}`}>
                <li
                  key={cat}

                  className=" py-2 hover:bg-[#F7569B] hover:text-white rounded transition-all duration-300 cursor-pointer"
                  onClick={() => onCategory(cat, val)}

                >
                  {cat.replace("womens-", "").replace("mens-", "").replace("-", " ")}
                </li></Link>
            )))
        )
        }
      </ul>
    )
  }
  return (
    <>
      <div className='hidden  min-lg:flex justify-between items-center shadow'>
        <div className='flex justify-start'>
          <Link to="/"> <img src={ShopSphere} width={120} /></Link>
          <div
            className="relative group flex items-center mx-4"
            onMouseEnter={() => toggleDropdownOpen(1)}
            onMouseLeave={() => toggleDropdown(1)}
          >
            <button className="bg-white text-black px-4 py-2 hover:text-[#F7569B] transition-all duration-300">
              Men
            </button>

            {isDropdownOpen[1] && (
              <div className="absolute left-0 top-[100%] w-48 bg-white text-black shadow-md rounded-b-lg z-10 py-4">
                {/* Men */}
                <div  >

                  <CategoryList keyword={["mens"]} val={1} />
                </div>


              </div>
            )}
          </div>
          <div className="relative group flex items-center mx-4 " onMouseEnter={() => toggleDropdownOpen(2)}  // Keep open when hovering
            onMouseLeave={() => toggleDropdown(2)}>
            {/* Dropdown Button */}
            <button className="bg-white text-black px-4 py-2 hover:text-[#F7569B] transition-all duration-300">

              Women
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen[2] && (
              <div className="absolute left-0 top-[100%] w-48 bg-white text-black shadow-md rounded-b-lg z-10 py-4">

                <div >
                  <CategoryList keyword={["womens", "tops"]} val={2} />
                </div>


              </div>
            )}
          </div>
          <div className="relative group flex items-center mx-4" onMouseEnter={() => toggleDropdownOpen(3)}  // Keep open when hovering
            onMouseLeave={() => toggleDropdown(3)}>
            {/* Dropdown Button */}
            <button className="bg-white text-black px-4 py-2 hover:text-[#F7569B] transition-all duration-300">
              Beauty
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen[3] && (
              <div className="absolute left-0 top-[100%] w-48 bg-white text-black shadow-md rounded-b-lg z-10 py-4">

                <div >
                  <CategoryList keyword={["beauty", "fragrances", "skin-care"]} val={3} />
                </div>
              </div>
            )}

          </div>
          <div className="relative group flex items-center mx-4" onMouseEnter={() => toggleDropdownOpen(4)}  // Keep open when hovering
            onMouseLeave={() => toggleDropdown(4)}>
            {/* Dropdown Button */}
            <button className="bg-white text-black px-4 py-2 hover:text-[#F7569B] transition-all duration-300">
              Accessories
            </button>
            {isDropdownOpen[4] && (
              <div className="absolute left-0 top-[100%] w-48 bg-white text-black shadow-md rounded-b-lg z-10 py-4">
                {/* Men */}
                <div >
                  <CategoryList keyword={["kitchen-accessories", "mobile-accessories", "sports-accessories"]} val={4} />
                </div>
              </div>
            )}
          </div>
          <div className="relative group flex items-center mx-4 " onMouseEnter={() => toggleDropdownOpen(5)}  // Keep open when hovering
            onMouseLeave={() => toggleDropdown(5)}>
            {/* Dropdown Button */}
            <button className="bg-white text-black px-4 py-2 hover:text-[#F7569B] transition-all duration-300">
              Home Decor
            </button>
            {isDropdownOpen[5] && (
              <div className="absolute left-0 top-[100%] w-48 bg-white text-black shadow-md rounded-b-lg z-10 py-4">

                <div >
                  <CategoryList keyword={["furniture", "home-decoration"]} val={5} />
                </div>
              </div>
            )}
          </div>
          <div className="relative group flex items-center mx-4 " onMouseEnter={() => toggleDropdownOpen(6)}  // Keep open when hovering
            onMouseLeave={() => toggleDropdown(6)}>
            {/* Dropdown Button */}
            <button className="bg-white text-black px-4 py-2 hover:text-[#F7569B] transition-all duration-300">
              Electronics
            </button>
            {isDropdownOpen[6] && (
              <div className="absolute left-0 top-[100%] w-48 bg-white text-black shadow-md rounded-b-lg z-10 py-4">

                <div >
                  <CategoryList keyword={["smartphones", "tablets"]} val={6} />
                </div>
              </div>
            )}
          </div>

          {/* <div className='flex items-center justify-center'>
                        <div className='mx-4 bg-white text-black px-4 py-2  '>
                            Men
                        </div>
                        <div className='mx-4 bg-white text-black px-4 py-2  '>
                            Women
                        </div>
                        <div className='mx-4 bg-white text-black px-4 py-2  '>
                            Accessories
                        </div>
                        <div className='mx-4 bg-white text-black px-4 py-2  '>
                            Electronics
                        </div>
                    </div> */}
        </div>
        <div className='flex justify-center items-center'>
          <div className="flex justify-center items-center ms-6 relative">
            <input
              className="flex items-center justify-between w-[300px] bg-white rounded-xl  shadow pl-10 pr-4 py-2 text-black"
              placeholder="Search Product"
              onInput={search}
            />
            <div
              className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
            >
              <FaSearch className="m-1" style={{ color: "#F7569B" }} />
            </div>
          </div>
        </div>
        <div className='flex justify-end items-center'>
          <Link to="/login"><p className='font-bold mx-4'>Login / SignUp</p></Link>
          <Link to="/cart"><div className={`border-[1px] border-red-500 bg-red-500 text-white  rounded-full absolute z-2 p-1 mx-8 ${cartNum > 0 ? 'visible' : 'hidden'}`}>{cartNum}</div><MdOutlineShoppingCart className='mx-4' size={22}  ></MdOutlineShoppingCart></Link>
          <Link to="/wishlist"><div className={`border-[1px] border-red-500 bg-red-500 text-white  rounded-full absolute z-2 p-1 mx-8 ${wlNum > 0 ? 'visible' : 'hidden'}`}>{wlNum}</div><IoMdHeartEmpty className='mx-4' size={22} /></Link>
        </div>
      </div>
      <div className='flex flex-col py-2  min-lg:hidden '>
        <div className={`${isMenuOpen ? 'visible' : 'hidden'} fixed inset-0 flex bg-black bg-opacity-20 z-50`} onClick={toggleMenu}>
          <div className="bg-white rounded-lg shadow-lg w-[45%]" onClick={(e) => e.stopPropagation()} >

            <div className='flex flex-col'>

              {/* Header Banner */}
              <div className='flex justify-between items-center bg-[#F7A8C4] p-2'>
                <img src={cartImg} width={100} className='mx-2' />
                <p className='text-xs min-sm:text-base  p-2'>
                  Hurry up! Flat 5% OFF on your first Order<br />
                  <Link to="/login"><span className='text-red-500'> SIGN UP. LOGIN</span></Link>
                </p>
              </div>

              {/* Category List */}
              <div className='flex flex-col'>
                {[
                  { label: "Men", keywords: ["mens"] },
                  { label: "Women", keywords: ["womens", "tops"] },
                  { label: "Beauty", keywords: ["beauty", "fragrances", "skin-care"] },
                  { label: "Accessories", keywords: ["kitchen-accessories", "mobile-accessories", "sports-accessories"] },
                  { label: "Home Decor", keywords: ["furniture", "home-decoration"] },
                  { label: "Electronics", keywords: ["smartphones", "tablets"] },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start mx-4"
                    onClick={() => toggleDropdownSmall(index)}
                  >
                    {/* Dropdown Button */}
                    <button className="bg-white text-black py-2 w-full">
                      <div className='flex items-center justify-between'>
                        <p>{item.label}</p>
                        <FaChevronRight
                          className={`mx-2 transform transition-transform ${isDropdownOpen[index] ? "rotate-90" : "rotate-0"
                            }`}
                        />
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen[index] && (
                      <div className="overflow-hidden transition-all duration-300">
                        <div className="w-full bg-white text-black py-4">
                          <CategoryListSmall
                            keyword={item.keywords}
                            val={index}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
        <div className='flex justify-between items-center shadow'>
          <div className='flex justify-start mx-2 items-center'>
            <MdMenu size={24} onClick={toggleMenu} />
            <Link to="/"><img src={ShopSphere_initial} width={40} className='p-2' /></Link>
          </div>
          <div className='flex justify-end items-center'>
            <Link to="/cart"><div className={`border-[1px] border-red-500 bg-red-500 text-white  rounded-full absolute z-2 p-1 mx-8 ${cartNum > 0 ? 'visible' : 'hidden'}`}>{cartNum}</div><MdOutlineShoppingCart className='mx-4' size={24}  ></MdOutlineShoppingCart></Link>
            <Link to="/wishlist"><div className={`border-[1px] border-red-500 bg-red-500 text-white  rounded-full absolute z-2 p-1 mx-8 ${wlNum > 0 ? 'visible' : 'hidden'}`}>{wlNum}</div><IoMdHeartEmpty className='mx-4' size={24} /></Link>
          </div>
        </div>
        <div className='mx-auto flex justify-center items-center w-full'>

          <div className=' my-4'>
            <div className="items-center relative w-full">
              <div className="flex-grow">
                <input
                  className={`flex items-center  max-w-[500px] bg-white rounded-xl  shadow pl-10 pr-4 py-2 text-black`}
                  style={{ width: windowWidth }}
                  placeholder="Search Product"
                  onInput={search}
                />
              </div>
              <div
                className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
              >
                <FaSearch className="m-1" style={{ color: "#F7569B" }} />
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Navbar;
{/* <div className="relative group flex items-center mx-4">

<button className="bg-white text-black  px-4 py-2   hover:bg-[#F7569B]">
    Category
</button>
<ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black   w-48 z-10">
<button className="bg-white text-black  px-4 py-2   hover:bg-[#F7569B]">
         Men
     </button>
    {cat.map((category) => {
        return(
            <>
        
     <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black   w-48 z-10">
        
        {category.name.includes("Men")?(
        
            <li className="px-4 py-2 hover:bg-[#F7569B] cursor-pointer">{category.name}</li>
        ):null}
        </ul>
</>)})}
</ul>
</div> */}