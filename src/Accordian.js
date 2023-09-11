import React, { useState } from 'react';
import MyAccordian from './MyAccordian';
import {questions} from './Api';
const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <>
        <section className='main-div'>
        <h1>React Inteview Questions and answers</h1>{
         data.map((curelem)=>{
            const {id}=curelem;
            return <MyAccordian key={id} {...curelem}/>
         })
        }
        </section>
        </>
    );
}
export default Accordian;
