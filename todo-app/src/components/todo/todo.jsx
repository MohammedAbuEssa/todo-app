import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.jsx';
import List from '../List/list.jsx';
import Header from '../Header/index.jsx';
import { SettingContext } from '../../context/Settings/index.jsx';
import { v4 as uuid } from 'uuid';
import './ToDo.module.scss'; 

const ToDo = () => {
  const setting = useContext(SettingContext)
  const [defaultValues] = useState({
    difficulty: setting.difficulty,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    // console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <div className='toDo'>
      <Header incomplete={incomplete}/>
      <div className='main'>
      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input className="custom-range-input" onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
      <List list={list} setting={setting} />
    </div>
    </div>
  );
};

export default ToDo;