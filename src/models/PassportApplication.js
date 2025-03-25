import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  documents: { type: [String], required: true },
  status: {
    type: String,
    enum: ['pending', 'verification', 'approved', 'rejected'],
    default: 'pending',
  },
  submittedDate: { type: Date, default: Date.now },
  appointmentDate: { type: Date },
});

export default mongoose.model('PassportApplication', applicationSchema);