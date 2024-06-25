import {useState} from "react";

function Item ({item}) {

    const [close ,setClose]=useState(true)


    return(
        <>
            {close && (
                <li>
                    <span style={item.packed ? {textDecoration:'line-through'}:{}}>
                        {item.quantity}-
                        {item.description}
                        </span>
                    <button onClick={()=> setClose(!close)}>❌</button>
                </li>

            )}


        </>

    )
}

export default Item
