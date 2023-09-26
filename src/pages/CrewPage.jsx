import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import douglas from './assets/crew/image-douglas-hurley.png'
import mark from './assets/crew/image-mark-shuttleworth.png'
import victor from './assets/crew/image-victor-glover.png'
import ansari from './assets/crew/image-anousheh-ansari.png'
import data from './data.json'



const CrewPage =()=> {
    const [planet, setPlanet] = useState(data);
    const [value, setValue] = useState(0);

    const view = [douglas, mark, victor, ansari]
    
    
    const { name, role, bio} = planet.crew[value];

    return (
        
        <>

            <div className="main_container_crew">
                    
                    <NavBar/>


                    <section className="crew_heading_container">
                            <p className="crew_heading_textOne">02 MEET YOUR CREW</p>


                    </section>

                    <section className="crew_details_container">
                        <div className="crewPersonel_image_container">
                            <img src={view[value]} 
                            className="crewPersonel_image" />
                            
                        </div>

                        <div className="crew_text_container">
                            <div className="crew_tab_list">
                                <ul>

                                    {planet.crew.map((item, index) =>{
                                        const {name} = item;

                                        return (

                                            <li key = {index} className="crew_tab_list_item"
                                            onClick={()=>setValue(index)}>
                                                <button className = {`crew_list_btn btn_2 ${ index === value && `crew_btn_active`}`}><span>{name}</span>.</button></li>

                                        )                                    })}
     
     
     
     
                                     </ul>

                            </div>

                            <div className="crew_text_heading">
                                <p className="crew_heading_title">{role.toUpperCase()}</p>
                                <p className="crew_heading_name">{name.toUpperCase()}</p>

                            </div>

                            
                            <div className="crew_text_body">
                                <p>{bio}
                                </p>

                            </div>


                        </div>




                    </section>





                </div>
    

    </>
)}

export default CrewPage;