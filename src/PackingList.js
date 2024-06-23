import Item from "./Item";

function PackingList ({dataItem}) {
    return(
        <div className='list'>
        <ul>
            {dataItem.map((item)=> (<Item item={item} key={item.id}/>) )}

        </ul>

        </div>
    )
}
export default PackingList
