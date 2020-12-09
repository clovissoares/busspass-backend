const router = require('express').Router();
const VeiculoController = require('../controllers/veiculos');

router.get('/get', VeiculoController.getListaVeiculos);
router.get('/get/:id', VeiculoController.getVeiculo);
router.post('/post', VeiculoController.postVeiculo);
router.put('/put/:id', VeiculoController.putVeiculo);
router.delete('/delete/:id', VeiculoController.deleteVeiculo);

module.exports = router;