import mongoose from "mongoose";

export const mongoConect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://joublinsuarez:tasksD123@cluster0.iolrqva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0s"
    );
    console.log("db connected");
  } catch (error) {
    console.log("error connecting to the database");
  }
};
