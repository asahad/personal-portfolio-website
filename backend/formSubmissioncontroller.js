import { sendFormSubmissionEmail } from './utils.js'; 
// Form Submission Controllers
// Handle Form Subsmission
// route-POST/form-submission
// access-public

const sendForm = async (req, res) => {
  const { name, email } = req.body;
  try {
    // Send confirmation email
    sendFormSubmissionEmail(email, name);

    res.status(200).json({
      message: "Form submitted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error processing form submission",
    });
  }
};


// Trial Endpoint
const trialEndpoint=async(req, res)=>{
  res.status(200).json({
    message: "This is working of course"
  })
}
export { sendForm, trialEndpoint };
