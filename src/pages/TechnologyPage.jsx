import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import vehicleL from './assets/technology/image-launch-vehicle-landscape.jpg'
import vehicleP from './assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportP from './assets/technology/image-spaceport-portrait.jpg'
import spaceportL from  './assets/technology/image-spaceport-landscape.jpg'
import spacecapsuleP from './assets/technology/image-space-capsule-portrait.jpg'
import spacecapsuleL from './assets/technology/image-space-capsule-landscape.jpg'


import data from './data.json'


    const TechnologyPage = () => {
        const [planet, setPlanet] = useState(data);
        const [value, setValue] = useState(0);

        const viewP = [vehicleP, spaceportP, spacecapsuleP];
        const viewL = [vehicleL, spaceportL, spacecapsuleL];

        const { name, description } = planet.technology[value];

        return (

            <>

                <div className="main_container_tech">
                    
                    <NavBar/>


                    <section className="tech_heading_container">
                        <p className="tech_heading_textOne">03 SPACE LAUNCH 101</p>
                    
                    
                    </section>

                    <section className="tech_details_container">
                        <div className="techPersonel_image_container">
                            <img src={viewL[value]} className="techPersonel_image" />
                            <img src={viewP[value]} className="techPersonel_image2" />
                    
                        </div>
                    
                        <div className="tech_text_container">
                            <div className="tech_tab_list">
                                <ul>
                                    {planet.technology.map((item, index)=>{
                                        const { name } = item;
                                        return (
                                            
                                            <li key ={index} className="tech_tab_list_item"
                                            onClick={()=>setValue(index)}>
                                            <button className={`tech_list_btn btn_1 ${ index === value && 'tech_btn_active'}`}>{index+1}</button></li>
                                        )


                                    })}
                                    
                                    
                                </ul>
                    
                            </div>

                            <div className="tech_text_headbody">
                    
                                        <div className="tech_text_heading">
                                            <p className="tech_heading_title">THE TERMINOLOGY...</p>
                                            <p className="tech_heading_name">{name.toUpperCase()}</p>
                                
                                        </div>
                                
                                
                                        <div className="tech_text_body">
                                            <p>{description}
                                            </p>
                                
                                        </div>

                            </div>
                                        
                        </div>
                                            
                    </section>
                    
                </div>
                
            </>

        )
            }
        export default TechnologyPage;







