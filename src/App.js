import {useState} from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import item from "./Item";

function App() {
    const [items,setItems] =useState([])
    function handleAddItems (item) {
        setItems((items)=>[...items , item])
    }
    function handelDeleteItem(id){
        setItems( items=>  items.filter(item => item.id !== id ))
    }
    function handleToggleItem (id) {
        setItems(items=> items.map(item=> item.id === id ? {...item , packed: !item.packed} : item))
    }
return(
    <div className='app'>
        <Logo/>
        <Form AddHandleItem={handleAddItems}/>
        <PackingList items={items} onDeleteItem={handelDeleteItem} onToggleHandle={handleToggleItem}/>
        <Stats/>
    </div>
  );
}

export default App;
