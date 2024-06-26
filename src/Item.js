
function Item ({item , onDeleteItem,onToggleHandle}) {

    return(
        <>
                <li>
                    <input type='checkbox' value={item.packed} onChange={()=> onToggleHandle(item.id)}/>
                    <span style={item.packed ? {textDecoration:'line-through'}:{}}>
                        {item.quantity}-
                        {item.description}
                        </span>
                    <button onClick={()=>onDeleteItem(item.id)}>❌</button>
                </li>
        </>
    )
}
export default Item
