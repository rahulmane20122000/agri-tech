import react from 'react';
import Infocard from './Infocard';
import web from '../src/img/02.jpg';

const About=()=>{
  return(
    <>
    <Infocard imgsrc={web} title='Web Developer' name='Rahul Mane' link='linkedin'/>
    <Infocard imgsrc={web} title='Web Developer' name='Rahul Mane' link='linkedin'/>
    <Infocard imgsrc={web} title='Web Developer' name='Rahul Mane' link='linkedin'/>
    </>
  );
}

export default About;
