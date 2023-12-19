import { db } from "../db.js";

export const getEquipamentos = (_, res) => {
    const q = "SELECT * FROM equipamentos";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addEquipamentos = (req, res) => {
    const q =
    "INSERT INTO equipamentos(id, placa, modelo, ano) VALUES(?)";

    const values = [
        req.body.id,
        req.body.placa,
        req.body.modelo,
        req.body.ano,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    })
}

export const updateEquipamento = (req, res) => {
    const q =
      "UPDATE equipamentos SET `id` = ?, `placa` = ?, `modelo` = ?, `ano` = ? WHERE `id` = ?";
  
    const values = [
      req.body.id,
      req.body.placa,
      req.body.modelo,
      req.body.ano,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Equipamento atualizado com sucesso.");
    });
  };
  
  export const deleteEquipamento = (req, res) => {
    const q = "DELETE FROM equipamentos WHERE id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("equipamento deletado com sucesso.");
    });
  };

  export const getEquipamentoById = (req, res) => {
    const q = "SELECT * FROM equipamentos WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);

        if (data && data.length > 0);

        return res.status(200).json(data[0]);
        });
    };

  export const getEquipamentoByPlaca = (req, res) => {
    const q = "SELECT * FROM equipamentos WHERE placa = ?";
  
    db.query(q, [req.params.placa], (err, data) => {
        if (err) return res.json(err);
  
        return res.status(200).json(data[0]);
        });
    };

  export const getEquipamentoByModelo = (req, res) => {
    const q = "SELECT * FROM equipamentos WHERE modelo = ?";
      
    db.query(q, [req.params.modelo], (err, data) => {
        if (err) return res.json(err);
      
        return res.status(200).json(data[0]);
        });
    };
        
  export const getEquipamentoByAno = (req, res) => {
    const q = "SELECT * FROM equipamentos WHERE ano = ?";
      
    db.query(q, [req.params.ano], (err, data) => {
        if (err) return res.json(err);
      
        return res.status(200).json(data[0]);
        });
    };