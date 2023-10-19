const express = require('express');
const db = require("../database/models")
const router = express.Router()
const mainController = require('../controllers/mainController.js');

//TODO
/* 
// Esta parte se ajusta para enviar eventos SSE manualmente

router.get("/events", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    
    // Escucha cambios en la base de datos y envía eventos SSE
    db.Avisos.addChangeListener((change) => {
    
      res.write("data: " + JSON.stringify({ event: "update", data: change }) + "\n\n");
      
    });
    
  });
  */

router.get("/", mainController.index);
router.get("/historial", mainController.history);


router.get("/nuevo",mainController.new)
router.post("/nuevo",mainController.agregar)
router.get("/editar/:ticket", mainController.editarForm);
router.post("/editar/:ticket", mainController.editar);
router.post("/eliminar/:ticket", mainController.eliminar);
router.get("/restore/:ticket", mainController.restore);

module.exports = router