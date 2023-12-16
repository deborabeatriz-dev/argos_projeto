import { db } from "../db.js";

export const getEquipamentos = (_, res) => {
    const q = "SELECT * FROM equipamentos";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};