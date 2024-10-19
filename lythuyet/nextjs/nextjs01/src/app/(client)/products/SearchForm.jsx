"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchForm() {
  const seach = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName);

  const handeClick = () => {
    router.push(pathName);
    router.refresh();
  };

  return (
    <div>
      <h2>search Form</h2>
      <h3>minhthuan : {seach.get("minhthuan")}</h3>
      <button onClick={handeClick}>rest query</button>
    </div>
  );
}
