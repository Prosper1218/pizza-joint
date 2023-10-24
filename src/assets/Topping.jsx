import React from 'react'
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { MyPizzaContext } from '../App';




const Topping = () => {
    const [show, setshow] = useState(false)
    const [List, setList] = useState("li")
    const [Toppings, setToppings] = useState([
        'Mushrooms',
        'Pepper',
        'Onion',
        'Olives',
        'Extra Cheese',
        'Tomato',
    ])
    const { T, setT } = useContext(MyPizzaContext)




    const AddTopping = (Topping) => {
        setshow(true)
        List === "li" ? setList("li active") : setList('li')
        // console.log(Topping)
        setT(Topping)

    }
    // console.log(T)

    return (
        <div>
            {
                <motion.div style={{ marginTop: "4cm" }}
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 2 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 250, delay: 0.2 }}
                >

                    <p className='steps'>Step2: Choose Toppings</p>
                    {/* <hr id='hr2' /> */}
                    {
                        Toppings.map((Topping) => {

                            return <article key={Topping} style={{ display: 'flex', justifyContent: "center" }}>
                                <ul className='ul'>
                                    <motion.li className={List} onClick={() => { AddTopping(Topping) }} id='li'
                                        whileHover={{ scale: 1.2, x: 38 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        tabIndex='1'> {Topping}</motion.li>
                                </ul>
                            </article>
                        })

                    }

                </motion.div>
            }
            <br />
            <div style={{ position: "relative", left: "-1.3cm" }}>
                {
                    show && <Button />
                }
            </div>

        </div>
    )

}

const Button = () => {

    return <motion.div
        initial={{ x: -700, }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 350 }}
    >
        <Link to="/YourOrder">
            <motion.button className="btn" onClick={() => { }}
                whileHover={{ textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)", }}
            >Order</motion.button>
        </Link>
    </motion.div>
}






export default Topping