import { useState } from 'react'
import Logo from './top'
import Footer from './footer'
import './App.css'

function App() {

    const empleados = [
      { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
      { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
      { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
      { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
      { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
      { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
      { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
      { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
      { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
      { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
      { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
      { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
      { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
      { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
      { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
      { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
      { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
      { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
      { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
      { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
      { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
      { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
      { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
      { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
      { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
      { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
      { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
      { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
      { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
      { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
    ];
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const suma = () =>{
      const resSuma = num1 + num2;
      setResultado(resSuma);
    }
    
    const resta = () =>{
      const resResta = num1 - num2;
      setResultado(resResta);
    }

    const multi = () =>{
      const resMulti = num1 * num2;
      setResultado(resMulti);
    }

    const division = () =>{
      const resDivision = num1 / num2;
      setResultado(resDivision);
    }

  return (

    <div> 
     
      <Logo/>
      <div className="container">
       {empleados.map((empleado, index) =>  <div key={index} className="empleado">
          <h3>Ficha de Empleado</h3>
          <p><span>Nombre:</span> {empleado.name}</p>
          <p><span>Apellidos:</span> {empleado.lastName}</p>
          <p><span>Hobbies:</span> {empleado.hobbies.join(', ')}</p>
          <p><span>Edad:</span> {empleado.age} años</p>
        </div>)}
      </div>
     
      <div className="calculadora">
      <h3>Calculadora</h3>
        <label>Introduce el primer número: </label>
        <input type='number' onChange={(e) => setNum1(parseFloat(e.target.value))} value={num1}/>
        <label>Introduce el segundo número: </label>
        <input type='number' onChange={(e) => setNum2(parseFloat(e.target.value))} value={num2}/>
       <div>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <button onClick={multi}>x</button>
        <button onClick={division}>/</button>
        </div>
        <p><span>Resultado:</span> {resultado}</p>
      </div>
      <Footer/>
    </div>
       
  )
}

export default App
