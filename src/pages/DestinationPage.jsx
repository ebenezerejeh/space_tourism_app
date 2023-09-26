import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import mars from './assets/destination/image-mars.png'
import moon from './assets/destination/image-moon.png'
import europa from './assets/destination/image-europa.png'
import titan from './assets/destination/image-titan.png'
import data from './data.json'





const DestinationPage = ()=> {
    const [planet, setPlanet] = useState(data);
    const [value, setValue] = useState(0);

    const view = [moon, mars, europa, titan]
    const { name, images, description, distance, travel} = planet.destinations[value];
    return (

    <>

            <div className="main_container_destination">

                    <NavBar/>
                    
                    <section className="planet_section_container">
                        <section className="planet_image_destination" >
                            <p className="planet_textOne">01 PICK YOUR DESTINATION</p>

                            <div className="planet_image_container">
                                <img className="planet_image_moon" src={view[value]}/>
                            </div>



                        </section>

                        <section className="planet_text_overall_container">
                                <section className="planet_name_destination">
                                    <nav className="planet_nav">
                                        <ul>
                                            {planet.destinations.map((item, index) => {
                                                const {name} = item;
                                                return(
                                                    
                                                <li  key= {index} className={`planet_nav_item ${index === value && 'p_nav_active'}`} 
                                                onClick={()=>setValue(index)}>
                                                        {name.toUpperCase()}</li>
                                                )
                                            })}
                                            
                                        </ul>


                                    </nav>


                                    <div className="planet_name_large_container">
                                    
                                        <p className="planet_name_large">{name.toUpperCase()}</p>
                                    
                                    </div>

                                    <div className="planet_detail_container">

                                        <p className="destination_text">{description} 
                                            </p>
                                    </div>




                                </section>

                                <div className="planet_distance_holder">
                                    <section className="planet_distance_destination">

                                        <div className="planet_distance_container">
                                            <p className="planet_distance_heading">AVG. DISTANCE</p>
                                            <p className="planet_distance_body">{distance.toUpperCase()}</p>

                                        </div>

                                        <div className="planet_travel_time_container">
                                            <p className="planet_distance_heading">EST. TRAVEL TIME</p>
                                            <p className="planet_distance_body">{travel.toUpperCase()}</p>
                                        </div>



                                    </section>
                                </div>
                            
                            </section>

                    </section>




                </div>
    </>
)}    

export default DestinationPage;