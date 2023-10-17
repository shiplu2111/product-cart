import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

// Category List Select
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.user.findMany();
    return NextResponse.json({ status: "All user data", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.user.create({ data: reqBody });
    return NextResponse.json({ status: "user created", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    let reqBody = await req.json();

    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");

    const prisma = new PrismaClient();
    const result = await prisma.user.update({
      where: { id: parseInt(user_id) },
      data: reqBody,
    });

    return NextResponse.json({ status: "user updated", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");

    const prisma = new PrismaClient();
    const result = await prisma.user.delete({
      where: {
        id: parseInt(user_id),
      },
    });
    return NextResponse.json({ status: "user deleted", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

//Select Category One
export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");

    const prisma = new PrismaClient();
    const result = await prisma.user.findUnique({
      where: {
        id: parseInt(user_id),
      },
    });
    return NextResponse.json({ status: "single user data", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
