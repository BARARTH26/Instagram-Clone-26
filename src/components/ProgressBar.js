import React, { useState,useEffect } from "react";
import {motion} from "framer-motion";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({file,setFile})=>{

    const {progress,url} = useStorage();
    useEffect(()=>{
        if(url){
            setFile(url)
        }
    },[url,setFile])


    return(
        <motion.div 
        className="progress-bar" 
        initial={{width:0}} 
        animate={{width:progress + "%"}}>
            
        </motion.div>
    )
}

export default ProgressBar;