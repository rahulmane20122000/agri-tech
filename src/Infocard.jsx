import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const Infocard = (props) => {

    return (
        <>
         <div className='card1 '>
            <section className=" d-flex  align-items-center justify-content-center " >
                <div class="card">
                    <img class="card-img-top" src={props.imgsrc} alt="Card image cap" />

                    <div class="card-body d-flex flex-column align-items-center ">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">Name: {props.name}</p>
                        <NavLink  to={props.link}><Button><i class="fab fa-linkedin"></i>Linkedin</Button></NavLink>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default Infocard;
