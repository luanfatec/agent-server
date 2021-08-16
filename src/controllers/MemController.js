const shell = require("./../../.init/lib-shell");

module.exports = class MenController {

    memInfo(request, response, next) {
        return response.status(200).json({
            memInfo: shell.exec(`cat /proc/meminfo |grep MemTotal | cut -d':' -f2 | sed -e "s/ //g" |sed "s/kB//g"`),
        });
    }
}