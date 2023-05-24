import React from 'react';
import useContainer from './useCounter';
import Button from '@mui/material/Button';

const App = () => {
  const { count, increment, decrement } = useContainer(0);

  return (
    <>
     <h1>useCustomHooks</h1>
      <Button variant="contained" color="warning" size="string" style={{display:"flex" ,flexDirection: "column" ,Alignitem:"center",margin:"30px" ,padding:"10px"}}>
      Count: {count} 
      </Button>
      <Button variant="contained" onClick={increment} style={{margin:"10px"}}>Increment</Button>
      <Button variant="contained" onClick={decrement}>Decrement</Button>
      
   
    </>
  );
};

export default App;
