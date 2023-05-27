import React from "react";
import ItemData from "./ItemData";


function ListData({dataList, onDelete}) {
    return(
        <div className="data-list">
            {
                dataList.map((data)=>(
                    <ItemData 
                    key = {data.id}
                    id={data.id}
                    onDelete={onDelete}
                    {...data}/>  
                ))
            }
       </div>
    )
}

export default ListData;