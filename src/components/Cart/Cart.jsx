/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ selectedCourse, remainingCredit, totalCredit, totalPrice }) => {
    return (
        <div className='bg-base-100 shadow-xl p-6 rounded-xl'>
            <h3 className='text-sky-500 font-medium text-[18px] py-2'>Credit Hour Remaining {remainingCredit} hr</h3>
            <hr />
            <h2 className='text-2xl font-semibold text-left py-2'>Course Name:</h2>
            <div className='text-left text-[16px] py-2'>
                <ol>
                {
                    selectedCourse.map((course, index) => (
                        
                        <li className='font-medium' key={course.id}>{index+1}. {course.course_name}</li>
                       
                        
                    ))
                }
                </ol>
            </div>
            <hr />
            <h3 className='py-2 text-lg font-medium text-left'>Total Credit Hour:  {totalCredit} </h3>
            <hr />
            <h3 className='py-2 text-lg font-medium text-left'>Total Price: {totalPrice} USD</h3>
           
        </div>
    );
};

export default Cart;