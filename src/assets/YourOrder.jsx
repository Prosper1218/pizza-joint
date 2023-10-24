import React from 'react'
import { motion } from "framer-motion";
import Topping from "./Topping"
import { useContext } from 'react';
import { MyPizzaContext } from '../App';




const YourOrder = () => {
    const { B, T } = useContext(MyPizzaContext)
    // console.log(B, T)
    return (
        <div>

            <motion.div style={{ marginTop: "4cm" }}
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 2 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 250, delay: 0.2 }}
            >

                <p className='steps'>Your Ordered :)</p>

                <p id='li'> You Ordered a "{B}" Pizza with "{T}" Toppings</p>
                <p style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>   ---</p>


            </motion.div>
        </div>
    )
}

export default YourOrder
