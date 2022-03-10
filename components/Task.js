import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

function Task(props) {

  
  const [edit, setedit] = useState(null);
  const [editable, seteditable] = useState();

  const handleSubmit = (i) =>{
      
    let arr = [...props.todo];
    console.log(arr,editable,i);
    if(editable != ""){
        arr[i] = editable;
        props.setTask([...arr]);
        setedit(null);
    }
  }
  const handleDelete = (todoItem) => {
     const newList = props.todo.filter(function(element){
         return props.todo.indexOf(element) != props.todo.indexOf(todoItem);
     })
     props.setTask(newList);
  }
  return (
    <div>
        <Head>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <div className={styles.list}>
        {
            props.todo.map(function(item,ind){
            return (<div  key={ind}>
                    {edit===ind ? (
                        <input type="text" value={editable} onChange={(e)=>{
                            seteditable(e.target.value);
                        }}/>
                    ):(
                        <input type="text" value={item} readOnly/>
                    )}


                    {edit===ind ? (
                        <button className={styles.save} id={ind} onClick={()=>{
                            handleSubmit(ind);
                        }} >
                        <i className="fa fa-save"></i></button>
                    ):(
                        <button className={styles.edit} onClick={()=>{
                            setedit(ind);
                            seteditable(item);
                        }} >
                        <i className="fa fa-edit"></i>
                        </button>
                    )}

                    <button className="btn" onClick={()=>{
                        handleDelete(item);
                    }}><i className="fa fa-trash"></i></button>
            

                </div>)
            })
        }
        </div>
    </div>
  )
}

export default Task