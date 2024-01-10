// Form Submission Controllers
// Handle Form Subsmission
// route-POST/form-submission
// access-public

const sendForm = async (req, res) => {
  const formData = req.body;
  res.status(200).json({
    message: "Form submitted Successfully",
  });
};


// Trial Endpoint
const trialEndpoint=async(req, res)=>{
  res.status(200).json({
    message: "This is working of course"
  })
}
export { sendForm, trialEndpoint };
