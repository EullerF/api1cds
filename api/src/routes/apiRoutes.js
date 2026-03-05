const router = require("express").Router();
const userController = require("../controllers/userController");
const organizadorController = require("../controllers/organizadorController");
const eventoController = require("../controllers/eventoController");
const ingressoController = require('../controllers/ingressoController');

// Rotas para usuário
router.post("/user", userController.createUser);
router.get("/user", userController.readUsers);
router.put("/user/:cpf", userController.updateUser);
router.delete("/user/:cpf", userController.deleteUser);
router.post("/login", userController.loginUser);

// Rotas para evento
router.post("/evento", eventoController.createEvento);
router.get("/evento", eventoController.getAllEventos);
router.put("/evento", eventoController.updateEvento);
router.delete("/evento/:id", eventoController.deleteEvento);

// Rotas para organizador
router.post("/organizador", organizadorController.createOrganizador);
router.get("/organizador",organizadorController.getAllOrganizadores);
router.put("/organizador/:id", organizadorController.updateOrganizador);
router.delete("/organizador/:id",organizadorController.deleteOrganizador);

// Rotas para ingresso
router.post('/ingresso', ingressoController.createIngresso);
router.get('/ingresso', ingressoController.getAllIngressos);
//router.get('/ingresso/evento/:id', ingressoController.getByIdEvento);
router.put('/ingresso', ingressoController.updateIngresso);
router.delete('/ingresso/:id', ingressoController.deleteIngresso);

module.exports = router;
