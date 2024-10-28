"use client";
import { useSession } from "next-auth/react";
import React from "react";
import PageLogin from "../components/Login";
import { Clock, ThumbsUp, MessageCircle, BookOpen } from "lucide-react";

export default function BlogPage() {
  const { data: session } = useSession();

  if (session === null) {
    return <PageLogin />;
  }

  const blogPosts = [
    {
      id: 1,
      title: "10 Xu Hướng Công Nghệ Nổi Bật Năm 2024",
      excerpt:
        "Khám phá những công nghệ mới nhất đang định hình tương lai của chúng ta, từ AI cho đến quantum computing...",
      author: "Tech Explorer",
      date: "28 Oct 2024",
      readTime: "5 phút",
      likes: 234,
      comments: 45,
      image: "https://picsum.photos/200/300",
      category: "Công nghệ",
    },
    {
      id: 2,
      title: "Hướng Dẫn Tối Ưu Code React từ A-Z",
      excerpt:
        "Tìm hiểu các kỹ thuật và best practices để tối ưu hiệu suất ứng dụng React của bạn. Từ useMemo đến Code Splitting...",
      author: "React Master",
      date: "27 Oct 2024",
      readTime: "8 phút",
      likes: 156,
      comments: 32,
      image: "https://picsum.photos/200/300",
      category: "Lập trình",
    },
    {
      id: 3,
      title: "Xây Dựng Website với Next.js 14",
      excerpt:
        "Khám phá những tính năng mới nhất của Next.js 14 và cách áp dụng chúng vào dự án của bạn...",
      author: "Next.js Ninja",
      date: "26 Oct 2024",
      readTime: "6 phút",
      likes: 189,
      comments: 28,
      image: "https://picsum.photos/200/300",
      category: "Web Development",
    },
  ];

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tech Blog</h1>
          <p className="text-lg   ">
            Khám phá những xu hướng công nghệ mới nhất
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className=" rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-teal-600 transition-colors">
                  {post.title}
                </h2>
                <p className=" mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Author and Meta Info */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 " />
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4 " />
                      <span className="text-sm text-gray-500">
                        {post.likes}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 " />
                      <span className="text-sm ">{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="flex items-center gap-2 mt-4  transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">Đọc thêm</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
