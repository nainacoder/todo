import React from 'react';
import styled from 'styled-components';

function ToDoList(props) {



  return(
  <>
  <Icon>
      <IconStyle><i className='fa fa-times' aria-hidden="true" onClick={()=>{props.onDelete(props.id)}}/></IconStyle>
      
<li>{props.text}</li>
      </Icon>
  </>
  
      ) 
}

export default ToDoList;


const Icon = styled.div`
display:flex;
flex-direction:row;
justify-content:left;
align-items:center;
`

const IconStyle=styled.div`
width:20px;
height:20px;
display:flex;
justify-content:center;
align-items:center;
background-color:#8566aa;
border-radius:50%;
margin:0 50px;
color:aliceblue;
box-shadow:5px 5px 15px -5px rgba(0,0,0,0.3);
&:hover{
    background-color:red;
}
`

