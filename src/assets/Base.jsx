import React, { useContext } from 'react'
import { motion } from "framer-motion";
import { useState, useRef, useEffect, createContext } from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { MyPizzaContext } from '../App';



const Base = () => {
    const [show, setshow] = useState(false)
    const [List, setList] = useState("li")
    const [Base, setBase] = useState(['Classic', 'Thin & Crispy', 'Thick Crust'])
    const { B, setB } = useContext(MyPizzaContext)

    // const Bases = [
    //     'Classic',
    //     'Thin & Crispy',
    //     'Thick Crust'
    // ]


    const AddBase = (base) => {
        setshow(true)
        List === "li" ? setList("li active") : setList('li')
        setB(base)
    }


    return (
        <div>
            {
                <motion.div style={{ marginTop: "4cm" }}
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 2 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 250, delay: 0.2 }}
                >

                    <p className='steps'>Step1: Choose your Base  </p>
                    {/* <hr id='hr2' /> */}
                    {
                        Base.map((base) => {

                            return <article key={base} style={{ display: 'flex', justifyContent: "center" }}>
                                <ul className='ul'  >
                                    <motion.li className={List} onClick={() => { AddBase(base) }} id='li'
                                        whileHover={{ scale: 1.2, x: 38 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        tabIndex='1'> {base}</motion.li>
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

    return (
        <motion.div
            initial={{ x: -700, }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 350 }}
        >
            <Link to='/Topping'>
                <motion.button className="btn"
                    whileHover={{ textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)", }}
                > Next</motion.button>
            </Link>
        </motion.div>
    )
}


export default Base

