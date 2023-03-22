import React, {useState} from 'react'
import Todolists from './Todolists';

const App = () => {

  const [InputList, setInputList] = useState("");
  const [Item, setItemList] = useState([]);

  const ItemEvent = (event) => {
    setInputList(event.target.value);
  }

  const list_of_items = () =>
  { 
    setItemList((oldItem) => {
      return [...oldItem,InputList]
    })
    setInputList("");
  }

  const deleteItems = (id) => {
    console.log("deleted!")
    setItemList((oldItem) => {
      return oldItem.filter((arrelem, index) => { 
        return index !== id;
      });
    });
  };

  return (
    <div className="main">
      <center>
      <div className="center">
      <h1>ToDo list</h1>

      <span><input placeholder='Write you todo' onChange={ItemEvent} value={InputList}></input></span>
      <button onClick={list_of_items}> + </button>

      <ol>
      {
        Item.map((item_val, index) => {
          return <Todolists value={item_val} key={index} id={index} onSelect={deleteItems} />
        })
      }
      </ol>

      </div>
      </center>
    </div>
  )
}

export default App