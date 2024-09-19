const urlApi = "https://api-todo-ebon.vercel.app/api/v1";

export const getCallApi = async (enterEmail) => {
  try {
    const response = await fetch(`${urlApi}/api-key?email=${enterEmail}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getCallApi:", error);
    throw error;
  }
};

export async function getList(apiKey) {
  try {
    const response = await fetch(`${urlApi}/todos`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error in getList:", error);
    throw error;
  }
}

// delete
export async function getDelete(apiKey, id) {
  try {
    const response = await fetch(`${urlApi}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error in getList:", error);
    throw error;
  }
}

// update
export const getUpdate = async (apiKey, id, updatedTodo) => {
  console.log("Update todo ID:", id, "data:", updatedTodo);

  try {
    const response = await fetch(`${urlApi}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
      body: JSON.stringify(updatedTodo), // Gửi dữ liệu todo đã cập nhật
    });

    if (!response.ok) {
      throw new Error(
        `Error update ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error updating todo:", err);
    return { error: err.message };
  }
};