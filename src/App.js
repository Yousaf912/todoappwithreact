import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './components/logo';
import Addtask from './components/addtask';
import Task from './components/Task';
import Erormessage from './components/erormessage';
import { useState } from 'react';

function App() {
  // let data1 = [
  //   {
  //     task: "lorem jsdjic cnjlkdsmncls cjnnsdidcc kjdcii sjkdcns kjdnc kdjnc"
  //   },
  //   {
  //     task: "lorem jsdjic cnjlkdsmncls cjnnsdidcc kjdcii sjkdcns kjdnc kdjnc"
  //   },
  //   {
  //     task: "lorem jsdjic cnjlkdsmncls cjnnsdidcc kjdcii sjkdcns kjdnc kdjnc"
  //   },
  // ]
  let data1=[];

  const [data, setData] = useState(data1);


  const addtask = (inptdata) => {
    console.log(inptdata);
    let newtaskobj = [...data, {
      task: inptdata,
    }]
    setData(newtaskobj)
  };

  const deltitem = (index) => {
    const updatedList = [...data];
    updatedList.splice(index, 1);
    setData(updatedList);
  };
  
  const editbtn=(value,i)=>{
    let newval= prompt("enter text",value.task);
   let newdata = [...data];
   newdata[i]={task:newval}
   setData(newdata)
  };

  const deletAll=()=>{
    setData([])
  }

  return (
    <div className="App">
      <Container>
        <Row className='d-md-flex flex-row-reverse'>
          <Col md={7} className='text-center  mt-5  p-2'>
            <div className='main-div pb-4 pt-3'>
              <Logo ></Logo>
              <Addtask addtask={addtask} deletAll={deletAll}></Addtask>
            </div>

            <div className='main-div2 p-2'>
              {data.length === 0 && <Erormessage></Erormessage>}
              <Task data={data} dltitem={deltitem} editbtn={editbtn}></Task>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
