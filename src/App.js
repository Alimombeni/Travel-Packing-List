import {useState} from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 5, packed: true },
];

function App() {
    const [items,setItems] =useState([])

    function handleAddItems (item) {
        setItems((items)=>[...items , item])

    }

return(
    <div className='app'>
        <Logo/>

        <Form AddHandleItem={handleAddItems}/>
        <PackingList dataItem={initialItems} items={items}/>
        <Stats/>
    </div>
  );
}

export default App;
