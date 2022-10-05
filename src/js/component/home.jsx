import React, { useState } from "react";



//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	function insertarTareas(e) {
		// setListaTareas(listaTareas => listaTareas.concat(tarea));
		if (e.key === 'Enter') {
			e.preventDefault();

			setListaTareas([...listaTareas, tarea]); //copia lo anterior y le agrega lo nuevo
			console.log(listaTareas);
			setTarea("");

		}
	}

	return (
		<div>
			<div className="container d-flex justify-content-center text-center">
				<input className="form-control w-50" type="text" placeholder="Tareas" aria-label="Disabled input example" value={tarea} onChange={(e) => setTarea(e.target.value)} onKeyDown={insertarTareas} />
			</div>
			<div className="container d-flex justify-content-center text-left">
				<ul className="list-group w-50">
					{listaTareas.map((item, i) => <li id ={i} class="list-group-item" key={i}>{item} </li>)};
				</ul>

			</div>
		</div>
	);
};

export default Home;
