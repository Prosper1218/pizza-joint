import React from 'react'
import logo from "../Images/logo.png";
import logosecond from "../Images/secondlogo.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import Slider from '../Components/Slider';

const Nav = () => {
    const { Lightheme } = useContext(ThemeContext)
    return (
        <div>
            <div>
                <motion.div id='brand'
                    initial={{ y: -200, }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                >
                    <Link to={"/"}>
                        <img src={Lightheme ? logosecond : logo} alt="brand" id='logo' />
                        <p id='name' style={{ color: Lightheme ? " #101010" : "white" }}>Pizza Joint</p>
                    </Link>

                    <Slider />
                </motion.div>


                < motion.hr id='hr1'
                    initial={{ y: -200, }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
                    style={{ backgroundColor: Lightheme ? "black" : "white" }}
                />
            </div>

        </div>

    )
}

export default Nav