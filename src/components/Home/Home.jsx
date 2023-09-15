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
    const[totalPrice, setTotalPrice] = useState(0)

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
            // eslint-disable-next-line no-undef
            const totalRemainingCredit = 20 - count
            if(count > 20 && totalRemainingCredit < 0){
                alert('Your remaining credit hour can not be negative and total credit hour is should less then or equal to 20 credit!!')
            }
            else{
                
                setTotalCredit(count)
                setRemainingCredit(totalRemainingCredit)
                setTotalPrice(coursePrice)
                setSelectedCourse([...selectedCourse, course])
            }
        
        }
        
    } 

    return (
        <div className='container'>
            <div className='flex gap-5'>

                {/* card container */}
                <div className='w-4/3 grid grid-cols-3 gap-4'>
                    {
                        allCourse.map((course) => (
                            <div key={course.id} className="bg-base-100 shadow-xl text-center">
                                <figure className="px-8 pt-8">
                                    <img src={course.image} alt="Shoes" className="w-full" />
                                </figure>
                                <div className="card-body items-center text-justify py-4">
                                    <h2 className="card-title text-xl font-semibold">{course.course_name}</h2>
                                    <p>{course.course_description}</p>
                                    <div className='flex gap-4'>
                                        <div className='flex gap-2'>
                                            <img src={'https://i.ibb.co/RvMnKf3/dollar-sign-1.png'} alt="" />
                                            <h3> Price: {course.price}</h3>
                                        </div>
                                        <div className='flex gap-1'>
                                            <img src={'https://i.ibb.co/6DtncpQ/Frame.png'} alt="" />
                                            <h3>Credit: {course.credit}hr</h3>
                                        </div>
                                        
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

                <div className='w-2/3'>
                    <Cart selectedCourse={selectedCourse} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>
                </div>

            </div>

            
        </div>
    );
};

export default Home;