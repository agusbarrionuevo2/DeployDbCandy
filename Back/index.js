const app = require("./src/app.js");
const { conn } = require("./src/db");
const port = process.env.PORT || 3001

// (async () => {
//   try {
    //Sincronizo todos los modelos con la base de datos.
    // await 
    // { force: true } -> Elimina todos los registros. { alter: true } -> Modifica columnas de la tabla realizando cambios en los registros de tal manera que coincidan con el modelo.
    conn.sync({ force: false }).then(()=> {
      console.log("All models were synchronized successfully.");
      app.listen(port, () => {
        console.log("Server listening at port", port);
      });
    })
//   } catch (error) {
//     console.log("Error:", error);
//   }
// })();
