const { Router } = require('express');
const router = Router();
const aplicativoController = require('../controllers/aplicativoController');

router.get('/', aplicativoController.verTodosAplicativos);

router.get('/:id', aplicativoController.verAplicativoPorId);

router.get('/user/:id', aplicativoController.verAplicativosPorUsuario);

router.post('/', aplicativoController.criarAplicativo);

router.patch('/:id', aplicativoController.atualizarAplicativo);

router.delete('/:id', aplicativoController.deletarAplicativo);

module.exports = router;