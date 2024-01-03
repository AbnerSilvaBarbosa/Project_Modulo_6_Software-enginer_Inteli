import express from "express"

class Health {

    constructor() {
        this.router = express.Router();
    }

    get loadRoutes() {

        this.router.get("/", (req, res) => {
            res.send("healthy :)");
        });

        return this.router;
    }
}

export const health = new Health();