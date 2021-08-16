const route = require("./../.init/express-router");
const AuthController = require("./controllers/authController");
const CpuController = require("./controllers/CpuController");
const MenController = require("./controllers/MemController");

const menController = new MenController();
const cpuController = new CpuController();
const authController = new AuthController();

route.post("/", authController.checkLoginKey, cpuController.loadCpuInfo);
route.post("/meminfo", authController.checkLoginKey, menController.memInfo);

module.exports = route;