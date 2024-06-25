import Item from "./Item";
import {useState} from "react";

function PackingList ({items , onDeleteItem ,onToggleHandle ,onClearList}) {

    const [sortBy , setSortBy] = useState('input')
    let sortedItems ;
//مرتب سازی بر اساس ورودی کاربر
    if (sortBy === 'input') sortedItems = items
//مرتب سازی بر اساس حروف الفبا local
    if (sortBy === 'description') sortedItems = items.slice().sort((a,b)=> a.description.localeCompare(b.description))
//مرتب سازی بر اسای تیک زده شده
    if (sortBy === 'packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));



    return(
        <div className='list'>
        <ul>
            {sortedItems.map((item)=> (<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleHandle={onToggleHandle}/>) )}
        </ul>

            <div className='action'>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} >
                    <option value="input">sort by input order</option>
                    <option value="description">sort by A-Z</option>
                    <option value="packed">sort by packed status</option>
                </select>

            <button onClick={onClearList} >Clear List</button>

            </div>
        </div>
    )
}
export default PackingList
