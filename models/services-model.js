const { Schema, model, Mongoose } = require("mongoose");

const serviceSchema = new Schema({

      name: { type:String, required:true },
      description: { type:String, required:true },
      price: { type:String, required:true },
      provider: { type:String, required:true },
      img: { type:String, required:true },
      link: { type:String, required:true }
});
const Service = new model("Service", serviceSchema);

module.exports = Service;