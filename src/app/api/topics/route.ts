import connectdb from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { title, des } = await request.json();
  await connectdb();
  await Topic.create({ title, des });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectdb();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectdb();
  await Topic.findByIdAndDelete(id); // be careful about it findBy... not findOne...
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
