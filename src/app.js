
import express from "express";

import routes from "./routes";

import "./database";

import { resolve } from "node-path";

class app {
    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use("product-file", express.static(resolve(__dirname, "..", "uploads")));
    }

    routes() {
        this.app.use(routes);
    }
}

export default new app().app;