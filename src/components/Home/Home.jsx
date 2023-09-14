/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    // set data to the state using useState 
    const[allCourse, setAllCourse] = useState([])
    const[selectedCourse, setSelectedCourse] = useState([])
    const[remainingCredit, setRemainingCredit] = useState(0)
    const[totalCredit, setTotalCredit] = useState(0)
    const[totalPrice, setTotalPrice] = useState()

    // data fetch using useEffect
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    },[])

    //button handle create
    const handleSelectCourse = (course) =>{
        const isExist = selectedCourse.find(item=>item.id === course.id)
        let count = course.credit
        let coursePrice = course.price
        if(isExist){
            return alert('The course is already Exist')
        }
        else{
            selectedCourse.forEach((item) => {
                count += item.credit
                coursePrice += item.price
            })
            const totalRemainingCredit = 20 - count
            setTotalCredit(count)
            setRemainingCredit(totalRemainingCredit)
            setTotalPrice(coursePrice)
            setSelectedCourse([...selectedCourse, course])
        }
        
    } 
    // console.log(selectedCourse)

    return (
        <div className='container'>
            <div className='home-container'>
                {/* card container */}
                <div className='card-container'>
                    {
                        allCourse.map((course) => (
                            <div key={course.id} className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-8 pt-8">
                                    <img src={course.image} alt="Shoes" className="w-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl">{course.course_name}</h2>
                                    <p>{course.course_description}</p>
                                    <div className='flex gap-4'>
                                        <h3>$  Price: {course.price}</h3>
                                        <h3>Credit: {course.credit} hr</h3>
                                    </div>
                                    <div className="card-actions">
                                    <button onClick={()=>handleSelectCourse(course)}  className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* cart container */}

                <div className='cart-container'>
                    <Cart selectedCourse={selectedCourse} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>
                </div>

            </div>

            
        </div>
    );
};

export default Home;