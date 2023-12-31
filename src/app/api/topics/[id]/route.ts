import connectdb from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topic";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const { newtitle: title, newdes: des, edited: edited } = await request.json();
  await connectdb();
  await Topic.findByIdAndUpdate(id, { title, des, edited });
  return NextResponse.json({ message: "Topic edited" }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectdb();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 201 });
}
