"use client";
import React, { useState } from "react";
import Link from "next/link";
import { translations } from "../../util/data";

export default function Page() {
  const [language, setLanguage] = useState("vn");
  const currentTranslations = translations[language];

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "vn" ? "en" : "vn"));
  };

  return (
    <div className={`min-h-screen pt-[2rem]`}>
      <div className="w-4/5 mx-auto">
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
              <button
                onClick={toggleLanguage}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
              >
                {language === "vn"
                  ? "Switch to English"
                  : "Chuyển sang Tiếng Việt"}
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold">
                {currentTranslations.socialContact}
              </h2>
              <p>
                <strong>Phone:</strong>{" "}
                <Link href="tel:0987654321" className="text-orange-500">
                  0987654321
                </Link>
              </p>
              <p>
                <strong>Zalo:</strong>{" "}
                <Link href="https://zalo.me" className="text-orange-500">
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
                <Link
                  href="https://www.facebook.com/groups/f8official"
                  className="text-orange-500"
                >
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
