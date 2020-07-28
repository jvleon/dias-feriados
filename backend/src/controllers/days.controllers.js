const daysCtrl = {};

const Model = require('../models/Days');

daysCtrl.getDays = async (req, res) => {
  const days = await Model.find();
  res.json(days);
};

daysCtrl.getDay = async (req, res) => {
  const day = await Model.findById(req.params.id);
  res.json(day)
};

daysCtrl.updateDays = async (req, res) => {
  const { motivo, tipo, info, dia, mes } = req.body;
  await Model.findOneAndUpdate(req.params.id, {
    motivo,
    tipo,
    info,
    dia,
    mes
  });
  res.json({ message: `Dia ${req.params.id} actualizado.` })
};

module.exports = daysCtrl;