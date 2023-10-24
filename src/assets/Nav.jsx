import React from 'react'
import logo from "../Images/logo.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
                <div>
                    <motion.div id='brand'
                        initial={{ y: -200, }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    >
                        <img src={logo} alt="brand" id='logo' /> <p id='name'>Pizza Joint</p>
                    </motion.div>
                    < motion.hr id='hr1'
                        initial={{ y: -200, }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    />
                </div>

        </div>

    )
}

export default Nav