import emailjs from "@emailjs/browser";

export const sendEmail = async (value) => {
  try {
    const data = await emailjs.send(
      "service_wrb2tqx",
      "template_ivaioyk",
      {
        to_email: value.to_email,
        from_name: value.user_name,
        message: value.message,
      },
      {
        publicKey: "xTjvzrik9XPQIn2xt",
      }
    );

    if (data.status !== 200) {
      throw new Error("Lỗi gửi mail!");
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error; // Để xử lý lỗi bên ngoài
  }
};
