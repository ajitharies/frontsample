// import React, { useContext, useRef, useState } from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { ShopContext } from '../../Context/ShopContext'
// import nav_dropdown from '../Assets/nav_dropdown.png'

// const Navbar = () => {

//   let [menu,setMenu] = useState("shop");
//   const {getTotalCartItems} = useContext(ShopContext);

//   const menuRef = useRef();

//   const dropdown_toggle = (e) => {
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   }

//   return (
//     <div className='nav'>
//       <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
//         <img src={logo} alt="logo" />
//         <p>URBNkix</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         {localStorage.getItem('auth-token')
//         ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
//         :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
//         <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


// import React, { useContext, useRef, useState } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import search_icon from '../Assets/search_icon.png'; // import search icon
// import { ShopContext } from '../../Context/ShopContext';
// import nav_dropdown from '../Assets/nav_dropdown.png';

// const Navbar = () => {
//   let [menu, setMenu] = useState("shop");
//   const { getTotalCartItems } = useContext(ShopContext);

//   const menuRef = useRef();

//   const dropdown_toggle = (e) => {
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   }

  

//   return (
//     <div className='nav'>
//       <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
//         <img src={logo} alt="logo" />
//         <p>URBNkix</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("womens") }}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
//         <li onClick={() => { setMenu("kids") }}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         {localStorage.getItem('auth-token')
//           ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}>Logout</button>
//           : <Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
//           <Link to="/search" style={{ marginRight: '10px' }}>
//           <img src={search_icon} alt="search" />
//         </Link>
//         <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//       </div>
//     </div>
//   )
//   }

// export default Navbar;


import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import search_icon from '../Assets/search_icon.png'; // import search icon
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';
import login_icon from '../Assets/login_icon.png'
import order_icon from '../Assets/order_icon.png'

const Navbar = () => {
  let [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    // Reset the menu state after 500 milliseconds
    setTimeout(() => {
      setMenu(null);
    }, 0);
  };

  return (
    <div className='nav'>
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>URBNkix</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => handleMenuClick("shop")}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => handleMenuClick("mens")}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => handleMenuClick("womens")}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => handleMenuClick("kids")}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}>Logout</button>
          : <Link to='/login' style={{ textDecoration: 'none' }}><img src={login_icon} alt="login" /></Link>}
          <Link to="/order"><img src={order_icon} alt="order" /></Link>
          <Link to="/search" style={{ marginRight: '10px' }}>
          <img src={search_icon} alt="search" />
        </Link>
        <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
