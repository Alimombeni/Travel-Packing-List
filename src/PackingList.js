import Item from "./Item";

function PackingList ({items , onDeleteItem ,onToggleHandle}) {
    return(
        <div className='list'>
        <ul>
            {items.map((item)=> (<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleHandle={onToggleHandle}/>) )}
        </ul>
        </div>
    )
}
export default PackingList
