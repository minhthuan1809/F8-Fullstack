export const callApiLogin = async (email) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api-key?email=${email}`
    );
    if (!response.ok) {
      throw new Error("lỗi login");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
