import React, { useState } from "react";
import '../../styles/index.css';



//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	

	//comienza funcion de crear tareas
	function insertarTareas(e) {
		// setListaTareas(listaTareas => listaTareas.concat(tarea));
		if (e.key === 'Enter') {
			e.preventDefault();
			if (tarea == "") {
				
				
				alert(`No has ingresado una tarea`);
								
			  }else{
			setListaTareas([...listaTareas, tarea]); //copia lo anterior y le agrega lo nuevo
			console.log(listaTareas);
			setTarea("");
		}
			

		}
	}
//finaliza funcion de crear tareas

//comienza funcion de eliminar tareas
function eliminarTareas(id) {
	
	//el id corresponde al elemento sobre el que hago click
	console.log(id);                                  // aca le estoy indicando que me incluya en la lista todos los elementos, menos el que tiene la id del elemento sobre el que hago click
	setListaTareas(listaTareas.filter((item, index) => index !== id)) 
	console.log(listaTareas);
	
}
//finaliza funcion de eliminar tareas
	return (
		<div>
			<h1>TODOS</h1>
			
			<div className="container d-flex justify-content-center text-center">
				<input className="form-control w-50" type="text" placeholder="Tareas" aria-label="Disabled input example" value={tarea} onChange={(e) => setTarea(e.target.value)} onKeyDown={insertarTareas} required/>
			</div>
			<div className="container d-flex justify-content-center text-left">
				<ul className="list-group w-50">
					
					{listaTareas.map((item, id) => <li className="list-group-item" key={id}>{item}<button type="button" className="btn btn-info float-end nuevoBoton" onClick={() => eliminarTareas(id)}>X</button> </li>)}
					
				</ul>

			</div>
		</div>
	);
};

export default Home;
