import React, { useState } from "react";
import ToDoList from "./ToDoList";
import styled from "styled-components";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems =(id)=>{
    console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
return index!== id 
      })
    })
  }

  return (
    <>
      <Wrapper>
        <CenterDiv>
          <br />
          <Heading>TODO LIST</Heading>
          <br />
          <Input
            type="text"
            placeholder="Add a Item"
            value={inputList}
            onChange={itemEvents}
          />
          <Button onClick={listOfItems}> + </Button>
          <OrderList>
            <List>
              {/* {inputList} */}
              {items.map((itemVal, index) => {
                return <ToDoList key={index} id={index} text={itemVal} onDelete={deleteItems} />;
              })}
            </List>
          </OrderList>
        </CenterDiv>
      </Wrapper>
    </>
  );
};

export default App;


const Wrapper = styled.div`
width:100%;
height:100vh;
background:#6983aa;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
text-align:center;

`

const CenterDiv = styled.div`
width:25%;
height:80vh;
background-color:#f4f4f4;
box-shadow:5px 5px 25px -5px rgba(0,0,0,0.5);
border-radius:15px;
`
const Heading = styled.h1`
color :white;
background:transparent;
background-color:#8566aa;
padding:8px 0px;
margin-bottom:5px 5px 15px -5px rgba(0,0,0,0.3);
`
const Input = styled.input`
text-align:center;
height:30px;
top:10px;
border:none;
background:transparent;
fonst-size:20px;
font-weight:600;
width:60%;
border-bottom:2px solid #8566aa;
outline:none;
`

const Button =styled.button`
min-height:40px;
width:40px;
border-radius:50%;
border-color:transparent;
background-color:#8566aa;
color:#fff;
font-size:40px;
border:none;
outline:none;
margin-left:10px;
box-shadow:5px 5px 15px -5px rgba(0,0,0,0.3);
&:hover{
  background-color:green;
}
`

const OrderList = styled.ol`
margin-top:30px;
`
const List = styled.li`
padding-left: 0px;
text-align:left;
font-size:20px;
font-weight:500;
min-height:40px;
display:flex;
align-items:center;
color:#8566aa;
`