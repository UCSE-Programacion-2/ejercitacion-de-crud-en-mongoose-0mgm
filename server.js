const express = require('express');
const { mongoose, connectDB, closeDB, Equipo } = require('./src/mongoose');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

/**
 * Nota: A diferencia del driver nativo de MongoDB, Mongoose no requiere que inyectes 
 * la base de datos o la colección en cada request (middleware `req.db`). 
 * Simplemente puedes utilizar el modelo `Equipo` que importaste de `./src/mongoose` 
 * en cualquier parte del código (Ej: Equipo.find(), Equipo.findById(), etc).
 */

/**
 * TODO: Implementar un endpoint GET /equipos
 * 1. Debe buscar y traer todos los documentos de la colección 'equipos' usando el modelo Equipo de Mongoose.
 * 2. Debe retornar el arreglo con status 200.
 */
app.get('/equipos', async (req, res) => {
    // Tu código aquí
});

/**
 * TODO: Implementar un endpoint GET /equipos/buscar
 * 1. Debe obtener el parámetro de consulta 'tecnico' (req.query.tecnico).
 * 2. Debe usar expresiones regulares u operadores de MongoDB para buscar aquellos
 *    equipos cuyo 'tecnico' contenga el nombre buscado (insensible a mayúsculas: $regex / $options: 'i').
 *    Tip: Puedes pasar una expresión regular en la consulta de Mongoose.
 * 3. Debe retornar el arreglo filtrado con status 200.
 * IMPORTANTE: ¡Esta ruta debe ir ANTES que la ruta GET /equipos/:id!
 */
app.get('/equipos/buscar', async (req, res) => {
    // Tu código aquí
});

/**
 * TODO: Implementar un endpoint GET /equipos/:id
 * 1. Debe obtener el id de los parámetros de la URL.
 * 2. Validar que el id sea un ObjectId válido usando mongoose.Types.ObjectId.isValid().
 *    Si no lo es, responde con status 400 y el mensaje { error: "ID inválido" }.
 * 3. Si es válido, utiliza Equipo.findById(id) para buscar el documento.
 * 4. Si lo encuentra, retornarlo con status 200.
 * 5. Si no lo encuentra, retornar un status 404 y { error: "Equipo no encontrado" }.
 */
app.get('/equipos/:id', async (req, res) => {
    // Tu código aquí
});

/**
 * TODO: Implementar un endpoint POST /equipos
 * 1. Debe extraer equipo, tecnico, continente y campeonatos_mundiales del req.body.
 * 2. Intenta instanciar un nuevo Equipo() y utilizar el método save() del documento, o utiliza Equipo.create().
 * 3. Si hay errores de validación de Mongoose (falta algún campo o tipo incorrecto), debes atraparlos 
 *    y retornar status 400 con un JSON: { error: error.message }.
 * 4. Si se guarda exitosamente, debe retornar el nuevo equipo y status 201.
 */
app.post('/equipos', async (req, res) => {
    // Tu código aquí
});

/**
 * TODO: Implementar un endpoint PUT /equipos/:id
 * 1. Valida que el ID de los parámetros sea un ObjectId válido. Si no lo es, retorna 400.
 * 2. Utiliza Equipo.findByIdAndUpdate() con los parámetros apropiados para actualizar el documento.
 *    (Recuerda pasar las opciones { new: true, runValidators: true } si corresponde).
 * 3. Si no se encontró el documento, retorna 404.
 * 4. Si fue exitoso, retorna status 200 y opcionalmente el equipo actualizado.
 * 5. Si hay errores de validación (por ejemplo, tipos incorrectos), retorna 400.
 */
app.put('/equipos/:id', async (req, res) => {
    // Tu código aquí
});

/**
 * TODO: Implementar un endpoint DELETE /equipos/:id
 * 1. Valida que el ID sea un ObjectId válido (400 si no).
 * 2. Utiliza Equipo.findByIdAndDelete() para eliminar el documento con ese ID.
 * 3. Si no se encontró el documento (el método devuelve null), retorna 404.
 * 4. Si se eliminó correctamente, retorna status 200.
 */
app.delete('/equipos/:id', async (req, res) => {
    // Tu código aquí
});

// Iniciar el servidor solo si este archivo se ejecuta directamente
if (require.main === module) {
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    });
}

// Exportamos 'app', 'closeDB' y 'connectDB' para poder hacer testing
module.exports = { app, closeDB, connectDB };
