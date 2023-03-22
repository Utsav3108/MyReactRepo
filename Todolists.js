import React from 'react'

const Todolists = (props) => {
  return (
    <>
    <div>
    <span><li>{props.value}</li></span>
    <button onClick={() => {
        props.onSelect(props.id);
    }}>X</button>
    </div>
    </>
  )
}

export default Todolists