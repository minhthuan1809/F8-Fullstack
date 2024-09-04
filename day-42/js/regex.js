const linkWeb = /(http.?:\/\/[^\s]+)/g;
const checkSdt = /((^\+84|84|0)[3|9|8|7|2]\d{8})/g;
const email =
  /([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@(([a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,})/g;
const youtubeLinkRegex =
  /https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g;

// thêm nội dùng cho reder
export function html(post, boolen) {
  let finalContent = post.content
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(linkWeb, `<a href="$1" target="_blank"><u>$1</u></a>`)
    .replace(checkSdt, `<a href="tel:$1"><u>$1</u></a>`)
    .replace(email, `<a href="mailto:$1"><u>$1</u></a>`);

  let youtubeEmbeds = "";

  finalContent.replace(youtubeLinkRegex, (match, p1, p2) => {
    if (!youtubeEmbeds.includes(p2)) {
      // Kiểm tra nếu video chưa được thêm vào
      youtubeEmbeds += `<iframe width="420" height="315" src="https://www.youtube.com/embed/${p2}" frameborder="0" allowfullscreen></iframe><br/>`;
    }
    return ""; // Xóa link YouTube gốc trong nội dung để tránh lặp lại
  });
  let value = "";

  if (boolen) {
    value = ` <button data-blogs-id="${post._id}" class="btn-blogs-id text-green-600 hover:underline font-medium">Xem bài viết
                </button>`;
  }
  return `
    <section class="container mx-auto mb-8">
        <div class="bg-white p-6  m-auto rounded-xl shadow-lg border border-gray-200 transition-transform duration-300">
            <h2 class="text-cyan-600 text-2xl font-bold mb-3">${post.title
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")}</h2>
            <p class="text-gray-700"><b>Được đăng bởi: </b>${post.userId.name
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")}</p>
            <p class="text-gray-600 mb-4 mt-2 w-4/5 break-words" ><b>Bài viết:</b> ${finalContent}</p>
            ${youtubeEmbeds}
            <div class="flex justify-between items-center mb-4">
                <button data-id="${
                  post.userId._id
                }" class="data-id-blog text-green-600 hover:underline font-medium">Xem thêm về #${post.userId.name
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}
                </button>
               ${value}
                <b class="text-gray-500 text-sm text-right">Đăng vào ${new Date(
                  post.createdAt
                ).toLocaleString("vi-VN", {
                  dateStyle: "long",
                  timeStyle: "short",
                })}</b>
            </div>
        </div>
    </section>`;
}

// thêm nội dùng cho user
export function htmluser(blog, userName) {
  let finalContent = blog.content
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(linkWeb, `<a href="$1" target="_blank"><u>$1</u></a>`)
    .replace(checkSdt, `<a href="tel:$1"><u>$1</u></a>`)
    .replace(email, `<a href="mailto:$1"><u>$1</u></a>`);

  let youtubeEmbeds = "";
  finalContent = finalContent.replace(youtubeLinkRegex, (p2) => {
    if (!youtubeEmbeds.includes(p2)) {
      // Kiểm tra nếu video chưa được thêm vào
      youtubeEmbeds += `<iframe width="420" height="315" src="https://www.youtube.com/embed/${p2}" frameborder="0" allowfullscreen></iframe><br/>`;
    }
    return ""; // Xóa link YouTube gốc trong nội dung để tránh lặp lại
  });
  return `
            <div
                class="bg-white p-6  m-auto rounded-xl shadow-lg border border-gray-200 transition-transform duration-300">
                <h2 class="text-cyan-600 text-2xl font-bold mb-3">${blog.title
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}</h2>
                <p class="text-gray-700">Được đăng bởi: <span class="font-semibold">${userName
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}</span></p>
                <p class="text-gray-600 mb-4 break-words">${finalContent}</p>
                  ${youtubeEmbeds}
                <div class="flex justify-between items-center mb-4">
                    <button class="btn-blogs text-green-600 hover:underline font-medium" data-blogs-id = "${
                      blog._id
                    }">Xem thêm</button>
                    <p class="text-gray-500 text-sm text-right">Đăng vào: ${new Date(
                      blog.createdAt
                    ).toLocaleString("vi-VN", {
                      dateStyle: "long",
                      timeStyle: "short",
                    })}</span></p>
                </div>
            </div>
          `;
}
