import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from './componentes/MainContainer'; 

function App() {

  const [componente, setComponente]=useState('TablaUsuarios');
  const [params, setParams]=useState({});
  const actualizarContainer = (val, params) => {	
    setComponente(val);    	
    setParams(params);	
  }

  useEffect(()=>{                 //inicializador
    actualizarContainer("TablaUsuarios", {funcionClick: actualizarContainer});
  },[])

  return (
    <div className="App">
      <main>
        <MainContainer componente={componente} params={params} />
      </main>
    </div>
  );
}

export default App;
