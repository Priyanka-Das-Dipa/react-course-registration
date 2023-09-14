/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ selectedCourse, remainingCredit, totalCredit, totalPrice }) => {
    return (
        <div>
            <h3>Credit Hour Remaining {remainingCredit} hr</h3>
            {
                selectedCourse.map((course) => (
                    <li key={course.id}>{course.course_name}</li>
                    
                ))
            }
            <hr />
            <h3>Total Credit Hour: {totalCredit} </h3>
            <hr />
            <h3>Total Price: {totalPrice} USD</h3>
           
        </div>
    );
};

export default Cart;