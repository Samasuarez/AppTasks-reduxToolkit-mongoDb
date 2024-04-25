import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const tasksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category:{
    type : String,
    require: true,
  }
});
tasksSchema.plugin(mongoosePaginate);
const taskModel = model("tasks", tasksSchema);
export default taskModel;
