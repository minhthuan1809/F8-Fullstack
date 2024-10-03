import emailjs from "@emailjs/browser";
export const sendEmail = async (value) => {
  try {
    const data = await emailjs.sendForm(
      "service_ml75s2u",
      "template_rjstv8i",
      value,
      {
        publicKey: "xTjvzrik9XPQIn2xt",
      }
    );
    if (!data.status === 200) {
      throw new Error("lỗi gửi mail! ");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
