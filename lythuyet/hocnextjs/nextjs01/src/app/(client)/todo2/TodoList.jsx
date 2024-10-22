"use client";
import useSWR from "swr";
const todoFetcher = async () => {
  const response = await fetch(`${process.env.API_SERVER}/todos`);
  if (!response.ok) {
    throw new Error("lỗi");
  }
  return response.json();
};
export default function TodoList() {
  const { data, isLoading, error } = useSWR("/todos", todoFetcher, {
    fallbackData: [],
  });
  console.log(error);
  console.log("data", data);
  if (error) {
    return <h3>đã có lỗi </h3>;
  }
  return (
    <div>
      <ul>
        {isLoading
          ? "loading ..."
          : data?.map((value) => <li key={value.id}>{value.title}</li>)}
      </ul>
    </div>
  );
}
