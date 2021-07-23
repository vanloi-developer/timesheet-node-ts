import { Application } from "./app";

function start() {
    const application = new Application()
    application.init()
    application.start()
}

start()