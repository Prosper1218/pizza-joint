import React from 'react'
import logo from "../Images/logo.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';





const Home = () => {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 5, type: "spring", stiffness: 300 }}

        >

            <div>
                <p id='welcome'> Welcome to pizza joint</p>
                <Button />
                <br />
            </div>
        </motion.div>

    )
}

const Button = () => {

    return <div>
        <br />


        <Link to="/Base">
            <motion.button className="btn"
                whileHover={{ textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)", }}
            >
                Create your pizza
            </motion.button>
        </Link>



        <br />
    </div>
}
export default Home