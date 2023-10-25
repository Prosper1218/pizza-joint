import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../App';




const Home = () => {
    const { Lightheme } = useContext(ThemeContext)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 5, type: "spring", stiffness: 300 }}

        >

            <div>
                <p id='welcome' style={{ color: Lightheme ? "black" : "white" }}> Welcome to pizza joint</p>
                <Button />
                <br />
            </div>
        </motion.div>

    )
}



const Button = () => {

    const { Lightheme } = useContext(ThemeContext)

    return <div>
        <br />


        <Link to="/Base">
            <motion.button className="btn"
                style={{ border: Lightheme ? "1px solid black" : "1px solid white", color: Lightheme ? "black" : "white" }}
                whileHover={{ textShadow: Lightheme ? "0px 0px 8px rgb(0, 0, 0)" : "0px 0px 8px rgb(255,255,255)", boxShadow: Lightheme ? "0px 0px 8px rgb(255,255,255)" : "0px 0px 8px rgb(255,255,255)", }}
            >
                Create your pizza
            </motion.button>
        </Link>



        <br />
    </div>
}
export default Home