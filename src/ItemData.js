import React from "react";
import ItemBody from "./ItemBody";
import ItemImage from "./ItemImage";
import DeleteButton from "./DeleteButton";


function ItemData({title, desc, image, id, onDelete}){
    return(
        <>              
            <ul>
                <li>
                    <div className="container">
                        <ItemBody title={title}/>
                        <div className="content">
                            <ItemBody className="desc" desc={desc}/>
                            <ItemImage image={image}/>
                        </div>
                        <DeleteButton id={id} onDelete={onDelete}/>
                     </div>
                </li>
            </ul>
        </>
    )
}

export default ItemData;