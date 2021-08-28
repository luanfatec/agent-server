const route = require("./../.init/express-router");
const AuthController = require("./controllers/authController");
const CpuController = require("./controllers/CpuController");
const MenController = require("./controllers/MemController");

const menController = new MenController();
const cpuController = new CpuController();
const authController = new AuthController();

const importe = {
  menController: new MenController()
}

route.post("/", authController.checkLoginKey, importe.menController.memInfo);
route.post("/meminfo", authController.checkLoginKey, menController.memInfo);
route.post("/test", authController.checkLoginKey, menController.memInfo);

module.exports = route;