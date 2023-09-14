/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    // set data to the state using useState 
    const[allCourse, setAllCourse] = useState([])
    const[selectedCourse, setSelectedCourse] = useState([])

    // data fetch using useEffect
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    },[])

    //button handle create
    const handleSelectCourse = (course) =>{
        setSelectedCourse([...selectedCourse, course])
    } 
    // console.log(selectedCourse)

    return (
        <div className='container'>
            <div className='home-container'>
                {/* card container */}
                <div className='card-container'>
                    {
                        allCourse.map((course) => (
                            <div className="card">
                                <div className='card-img'>
                                    <img key={course.id} src={course.image} alt="" />
                                </div>
                                <h3>{course.course_name}</h3>
                                <p>{course.course_description}</p>
                                <div className='price-credit'>
                                    <h3>$ Price: {course.price}</h3>
                                    <h3>Credit: {course.credit} hr</h3>
                                </div>
                                <button onClick={()=>handleSelectCourse(course)} className='btn'>Submit</button>
                            </div>
                        ))
                    }
                </div>
                {/* cart container */}

                <div className='cart-container'>
                    <Cart selectedCourse={selectedCourse}></Cart>
                </div>

            </div>

            
        </div>
    );
};

export default Home;