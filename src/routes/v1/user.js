const express = require("express");

const db = require("../../database");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        throw new Error("Invalid id");
    }
    try {
        const result = await db.query(`SELECT * FROM test_users where id='${id}'`);
        const orders = await result.json();
        if (orders.lenght) {
            return res.json(orders);
        }
        throw new Error(`No user found for id: ${id}`);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
});

module.exports = router;