import { headers } from "next/headers";
import DemoSever from "./_components/DemoSever";
import DemoClient from "./_components/DemoClient";
export default function HomePage() {
  const user = headers().get("x-user");
  return (
    <div>
      <h1>Home</h1>
      <h2>User: {user}</h2>
      <DemoSever>
        <DemoClient />
      </DemoSever>
    </div>
  );
}
