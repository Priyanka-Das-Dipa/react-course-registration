/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ selectedCourse }) => {
    return (
        <div>
            <h2>This Is Cart</h2>
            {
                selectedCourse.map((course) => (
                    <li key={course.id}>{course.course_name}</li>
                ))
            }
           
        </div>
    );
};

export default Cart;