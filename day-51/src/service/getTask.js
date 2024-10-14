export const getTask = async (apikey) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
      headers: {
        "X-Api-Key": apikey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return null;
  }
};
