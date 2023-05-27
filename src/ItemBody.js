import React from "react";

function ItemBody({title, desc}){
    return(
        <>
            <h3>{title}</h3>
            <p>{desc}</p>
        </>
    )
}

export default ItemBody;