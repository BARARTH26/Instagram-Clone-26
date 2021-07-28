import React from 'react';
import useFireStore from "../hooks/useFireStore";
import {motion} from "framer-motion"


const ImageGrid = () => {

    const {docs} = useFireStore("images")
    return(
        <div className="image-grid">
            {
                docs && docs.map((doc)=>{
                    return (
                        <motion.div className="image-wrap" key = {doc.id} layout whileHover={{opacity:1}}>
                            <motion.img 
                                src={doc.url}
                                alt = "plc"
                                initial = {{opacity:0}}
                                animate = {{opacity:1}}
                                transition = {{delay:1}}
                            />
                        </motion.div>
                    )
                })
            }

        </div>
    );
}

export default ImageGrid;