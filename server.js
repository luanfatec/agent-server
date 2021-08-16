const app = require("./.init/express-app");

app.listen(3333, () => {
    console.log("Listening port 3333 on host 192.168.0.100...");
});