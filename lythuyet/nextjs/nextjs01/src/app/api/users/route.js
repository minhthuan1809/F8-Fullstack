import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// Quy ướng : tên HTTP method sẽ là tên hàm
export function GET(request) {
  const status = request.nextUrl.searchParams.get("status");
  console.log(request.headers);
  const apikey = request.headers.get("x-api-key");
  console.log(apikey);
  const user = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 1",
    },
  ];
  return NextResponse.json(
    {
      success: true,
      data: user,
      messade: "get user successfully",
    },
    {
      status: 201,
    }
  );
}

export async function POST(request) {
  const body = request.json();
  return NextResponse.json({ body });
}
