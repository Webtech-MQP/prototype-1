import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.send("Welcome to the api");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});


export default router;