// Como hemos puesto "type": "module" podemos usar import
import express from "express";

const app = express();

// Para que node pueda entender lo que el cliente envía
app.use(express.json());

//Vamos a crear un arreglo que contenga las tareas
const todoListArray = [];
// Esto está creando la ruta y luego vamos a recibir dos cosas
//* request => Es la información que vamos a recibir de quien haga la petición
//* response => Es lo que vamos a responder al usuario
app.get("/", (request, response) => {
  // vamos a responder que cuando el usuario entre a la raiz, esta respuesta sea un json
  response.json({
    total: todoListArray.length,
    tasks: todoListArray,
  });
});

app.post("/create-task", (request, response) => {
  const task = request.body;
  task.created_at = new Date();
  task.id = todoListArray.length + 1;

  todoListArray.push(task);

  response.json({
    tarea: task,
  });
});
//? req, res, request, response : son nombre que pueden variarse
app.put("/update-task/:id", (req, res) => {
  // viene en el Params
  //! Todo lo que venga de params es String
  const Id = req.params.id;
  // Lo que el cliente envie estará en el body
  const data = req.body;
  // buscar la tarea
  const taskIndex = todoListArray.findIndex(
    (todoTask) => todoTask.id === Number(Id)
  );

  todoListArray[taskIndex] = {
    ...todoListArray[taskIndex],
    ...data,
  };

  return res.json({
    tarea: todoListArray[taskIndex],
  });
});

// Para poder ver esto desde un navegador vamos a habilitar un puerto de nuestra pc
app.listen(6001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);
