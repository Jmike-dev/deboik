import mongoose from "mongoose";
const deboikStaffSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: true,
    },
    lastName: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
        // required: true,
    },
    role: {
        type: String,
        // required: true,
    },
});

const deboikStaff =
    mongoose.models.deboikStaff ||
    mongoose.model("deboikStaff", deboikStaffSchema);

export default deboikStaff;
