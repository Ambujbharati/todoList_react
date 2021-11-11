import React from "react";

function TodoItem(props){
  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick(){
    setIsClicked(prevValue => {
      return !prevValue;
    });
  }

  return (
    <li style={{textDecoration: isClicked?"line-Through": "none"}} onClick={handleClick}>{props.text}</li>
  );
}


export default TodoItem;