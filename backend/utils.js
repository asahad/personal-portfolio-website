import mailjetPackage from "node-mailjet";
import dotenv from "dotenv";
dotenv.config();
// Configure Mailjet Mail
const api = "9590594c8522236fce667a79e398e751";
const api_secret = "18e78b93ce1a83bcbcab9242c36c739e";

const mailjetClient = mailjetPackage.connect(api, api_secret);

const sendFormSubmissionEmail = (userEmail, userName) => {
  const emailData = {
    Messages: [
      {
        From: {
          Email: "alhassansahad24@gmail.com",
          Name: "Winehub",
        },
        To: [
          {
            Email: userEmail,
            Name: userName,
          },
        ],
        Subject: "Form Submission Confirmation",
        TextPart: `Hello, ${userName}! Your form has been submitted successfully.`,
        HTMLPart: `<h1>Hello, ${userName}!</h1><p>Your form has been submitted successfully. We will get back to you soon.</p>`,
      },
    ],
  };

  mailjetClient
    .post("send", { version: "v3.1" })
    .request(emailData)
    .then(() => console.log("Form submission email sent."))
    .catch((error) =>
      console.error("Error sending form submission email:", error)
    );
};

export { sendFormSubmissionEmail };
