"use client"; // Đảm bảo là client component
import React, { useEffect, useState } from "react";

import "../globals.css";
import { translations } from "@/app/utils/translations";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const path = usePathname();
  console.log(path);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, []);

  let currentTranslations = null;
  if (path === "/vn" || path === "/en") {
    currentTranslations = translations[path.replace("/", "")];
  } else {
    return <h1 className="text-6xl absolute top-2/4 left-2/4">404</h1>;
  }

  return (
    <div
      className={`absolute inset-0 ${darkMode ? "bg-black text-white" : ""}`}
    >
      <div className="w-4/5 m-auto ">
        <header>
          <Nav
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            path={path.replace("/", "")}
          />
        </header>

        <main className="flex flex-wrap">
          <aside className="w-full md:w-1/3 p-6 shadow-md">
            <div className="text-center mb-6">
              <img
                src="https://code-fullstack-exercise48.vercel.app/f8.jpg"
                alt="logo"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <p className="mt-4 text-xl font-semibold">
                {currentTranslations.title}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold">
                {currentTranslations.skills}
              </h2>
              <p>
                <strong>{currentTranslations.webDeveloper}</strong>{" "}
                {currentTranslations.webDeveloperSkills}
              </p>
              <p className="mt-4">
                <strong>{currentTranslations.otherSkills}</strong>{" "}
                {currentTranslations.otherSkillsDescription}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                {currentTranslations.histories}
              </h2>
              {currentTranslations.historiesContent.map((history, index) => (
                <p key={index} className="border-b py-2">
                  {history}
                </p>
              ))}
            </div>
          </aside>

          <section className="w-full md:w-2/3 md:pl-6 mt-8 md:mt-0">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-center">
                {currentTranslations.name}
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold">
                {currentTranslations.socialContact}
              </h2>
              <p>
                <strong>Phone:</strong>{" "}
                <Link href="#" className="text-orange-500">
                  0987654321
                </Link>
              </p>
              <p>
                <strong>Zalo:</strong>{" "}
                <Link href="#" className="text-orange-500">
                  https://zalo.me
                </Link>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:contact@fullstack.edu.vn"
                  className="text-orange-500"
                >
                  contact@fullstack.edu.vn
                </Link>
              </p>
              <p>
                <strong>Facebook:</strong>{" "}
                <Link href="#" className="text-orange-500">
                  https://www.facebook.com/groups/f8official
                </Link>
              </p>
              <p>
                <strong>Youtube:</strong>{" "}
                <Link
                  href="https://www.youtube.com/c/f8vnofficial"
                  className="text-orange-500"
                >
                  https://www.youtube.com/c/f8vnofficial
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold">
                {currentTranslations.selfProject}
              </h2>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold">
                {currentTranslations.myHobbies}
              </h2>
              <ul className="list-disc ml-5">
                {currentTranslations.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
