import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RestoBar",
    })
    .then(() => {
      console.log("Connected to Database Successfully");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database ${err}`);
    });
};
