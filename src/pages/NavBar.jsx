import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import logo from './logo.svg'
import icon from './assets/shared/icon-hamburger.svg'
import close from './assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'




const NavBar = () =>{

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [sideBar, setSideBar] = useState(true);


  const openSideBar = () => {
    setSideBar(false);
  }

  const closeSideBar = () => {
    setSideBar(true);
  }



    return (
        <>

            <nav>
              <img src={logo} className="nav_logo"/>
              <div className="nav_line">
                
              </div>
              <div className="nav_links">
                <ul>
                  <NavLink to='/' className={({ isActive })=> (isActive ? setActive1(true) : setActive1(false)  ) }>
                  <li className={`nav_link_item ${active1 && 'nav_link_item_activee'}` }>HOME</li></NavLink>

                  <NavLink to='/destination' className={({ isActive })=> (isActive ? setActive2(true) : setActive2(false)  ) }>
                  <li className={`nav_link_item ${active2 && 'nav_link_item_activee'}` }>DESTINATION</li></NavLink>

                  <NavLink to='/crew' className={({ isActive })=> (isActive ? setActive3(true) : setActive3(false)  ) }>
                  <li className={`nav_link_item ${active3 && 'nav_link_item_activee'}` }>CREW</li></NavLink>


                  <NavLink to='/technology' className={({ isActive })=> (isActive ? setActive4(true) : setActive4(false)  ) }>
                  <li className={active4 ? 'nav_link_item nav_link_item_activee' : 'nav_link_item' }>TECHNOLOGY</li></NavLink>
                  
                </ul>

                <ul>
                  
                  <NavLink to='/' className={({ isActive })=> (isActive ? setActive1(true) : setActive1(false)  ) }>
                  <li className= { active1 ? "nav_link_item_desktop activee" : "nav_link_item_desktop" }>00 HOME</li></NavLink>


                  <NavLink to='/destination' className={({ isActive })=> (isActive ? setActive2(true) : setActive2(false)  ) }>
                  <li className= { active2 ? "nav_link_item_desktop activee" : "nav_link_item_desktop" }>01 DESTINATION</li></NavLink>


                  <NavLink to='/crew' className={({ isActive })=> (isActive ? setActive3(true) : setActive3(false)  ) }>
                  <li className= { active3 ? "nav_link_item_desktop activee" : "nav_link_item_desktop" }>02 CREW</li></NavLink>



                  <NavLink to='/technology' className={({ isActive })=> (isActive ? setActive4(true) : setActive4(false)  ) }>
                  <li className= { active4 ? "nav_link_item_desktop activee" : "nav_link_item_desktop" }>03 TECHNOLOGY</li></NavLink>

                </ul>
              </div>

              <div className={sideBar ? "sidebar" : "sidebar show_sidebar"}>
                <div className="sidebar_header">
                    <img className="sidebar_close_button" onClick={closeSideBar} src={close} alt="close button"/>
                </div>
                <ul className="sidebar_list">
                    <NavLink to='/' className="ham_nav_list"><li className="sidebar_list-item">00 HOME</li></NavLink>
                    <NavLink to='/destination'  className="ham_nav_list"><li className="sidebar_list-item" >01 DESTINATION</li></NavLink>
                    <NavLink to='/crew' className="ham_nav_list"><li className="sidebar_list-item">02 CREW</li></NavLink>
                    <NavLink to='/technology' className="ham_nav_list"><li className="sidebar_list-item">03 TECHNOLOGY</li></NavLink>

                </ul>


            </div>
              
              <button className="nav_ham_button" onClick={openSideBar}><img src={icon}/></button>

              
            
            </nav>
        
        
        </>

    )

}

export default NavBar;




