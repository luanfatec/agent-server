const shell = require("../../.init/lib-shell");
const messages = require("../helper/messages");

module.exports = class CpuController {

    loadCpuInfo(request, response) {
        return response.status(200).json({
            cpuInfo: shell.cat("/proc/cpuinfo")
        });
    }

    cpuUsed() {
        console.log('teste');
    }
}

/// echo senha |sudo -S cat /etc/shadow - Sem precisar digitar a senha...