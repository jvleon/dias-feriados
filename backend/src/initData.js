const fetch = require('node-fetch');

const Model = require('./models/Days');

const url = "http://nolaborables.com.ar/api/v2/feriados/2020";

const getData = async () => {
  try {
    const count = Model.estimatedDocumentCount(async(err, count) =>{
      if(count === 0) {
        const response = await fetch(url);
        const json = await response.json();
        json.map(async(item) => {
          const newDay = new Model(item);
          await newDay.save();
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getData;