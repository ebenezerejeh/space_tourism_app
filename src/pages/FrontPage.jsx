import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'






const FrontPage= ()=> {  


  return (

    <>

          <div className="main_container">
            
            <NavBar/>
            
            <div className="text_explore_container">
                <section className="home_text">
                  
                      <p className="home_textOne">SO, YOU WANT TO TRAVEL TO</p>
                      <p className="home_textTwo">SPACE</p>
                      <div className="home_textThree_container">
                          <p className="home_textThree">Let’s face it; if you want to go to space, you might as well genuinely go to
                          outer space and not hover kind of on the edge of it. Well sit back, and relax
                          because we’ll give you a truly out of this world experience!</p>
                          
                      </div>
                  
                </section>
                
                <div className="home_explore_container">
                  <div className="home_explore">
                  <button className="home_explore_button"> EXPLORE </button>
                  </div>
                </div>

            </div>



          </div>
    </> 
  
  )
}

export default FrontPage;