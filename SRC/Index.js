//importando o pacote express
const { request } = require ('express');
const express = require ('express');
const { uuid } = require ('uuidv4');
const cors = require ('cors');

const app = express();
app.use(express.json());
app.use(cors());
const repositories = [];

//preparar para usar o express;
const app = express();
app.use(express.json());

const repositories = [];
// 1 paramentro o nome da rota 
// 2 parametro ação que vou fazer 'função'
//java script arrow function
app.get('/',(request,response)=>{
 return response.json(repositories);
});


app.post('/',(request,response)=>{
    const {name , email, cpf, peso, altura } = request.body;
    const newStudent = { id: uuid(), name, email, cpf, peso, altura };
    repositories.push(newStudent);
    return response.json({newStudent});
  });

    app.put('/:id', (request, response) => {
    const { id } = request.params;
    const { name, email, cpf, peso, altura } = request.body;
    
    const studentResearch = repositories.findIndex ( studentIndex => studentIndex.id == id );
    if (studentResearch < 0 ){
       return response.status(404).json({"error":"Student not found"});
    }
     const newStudent = {id, name, email, cpf, peso, altura};
     repositories[studentResearch] = newStudent;
     return response.json(newStudent);
    });
    
    app.delete('/:id', (request, response) => {
      const { id } = request.params;
      const studentResearch = repositories.findIndex(studentIndex => studentIndex.id == id );
    if (studentResearch < 0 ){
       return response.status(404).json({ "error": `Student ${id} not found` });
    }
      repositories.splice(studentResearch,1);
      return response.json({"Message" : `Student ${id} removed`});
    
    });

    
    module.exports = app.listen(3333, () => {
        console.log("Server running");
    });

