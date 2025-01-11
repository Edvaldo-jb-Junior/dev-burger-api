import { Router } from "express"
import { v4 } from "uuid"
import Users from "./app/models/User.js"

const routes = new Router()

routes.get("/", async (request, response) => {
    const user = await Users.create({
        id: v4(),
        name: "junior",
        email: "junior@email.com",
        password_hash: "junior22"
    });

    return response.status(201).json(user);
});

export default routes;