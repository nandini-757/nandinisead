import PassportApplication from '../models/PassportApplication.js';

export const submitApplication = async (req, res) => {
  const { fullName, dob, address, documents, appointmentDate } = req.body;
  try {
    const application = new PassportApplication({
      userId: req.user.id,
      fullName,
      dob,
      address,
      documents,
      appointmentDate,
    });
    await application.save();
    res.status(201).json({ message: 'Application submitted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const trackStatus = async (req, res) => {
  try {
    const applications = await PassportApplication.find({ userId: req.user.id });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const reviewApplication = async (req, res) => {
  const { applicationId, status } = req.body;
  try {
    const application = await PassportApplication.findById(applicationId);
    if (!application) return res.status(404).json({ message: 'Application not found' });
    application.status = status;
    await application.save();
    res.json({ message: 'Application updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};