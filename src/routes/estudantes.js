const router = require('express').Router();
const EstudanteController = require('../controllers/estudante');

router.get('/get', EstudanteController.getListaEstudantes);
router.get('/get/:id', EstudanteController.getEstudante);
router.post('/post', EstudanteController.postEstudante);
router.put('/put', EstudanteController.putEstudante);
router.delete('/delete', EstudanteController.deleteEstudante)

module.exports = router;