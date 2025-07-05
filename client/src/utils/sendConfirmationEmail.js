

const sendConfirmationEmail = async ({ name, email, orderId, total, items }) => {
  try {
    const response = await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        orderId,
        total,
        items,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("✅ Email sent:", result.message);
    } else {
      console.error("❌ Email failed:", result.message);
    }
  } catch (error) {
    console.error("❌ Error connecting to backend:", error.message);
  }
};

export default sendConfirmationEmail;
