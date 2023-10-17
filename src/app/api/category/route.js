import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Category List Select
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.category.findMany();
    return NextResponse.json({ status: "All category data", data: result });
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
    const result = await prisma.category.create({ data: reqBody });
    return NextResponse.json({ status: "category created", data: result });
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
    let cat_id = searchParams.get("cat_id");

    const prisma = new PrismaClient();
    const result = await prisma.category.update({
      where: { id: parseInt(cat_id) },
      data: reqBody,
    });

    return NextResponse.json({ status: "category updated", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let cat_id = searchParams.get("cat_id");

    const prisma = new PrismaClient();
    const result = await prisma.category.delete({
      where: {
        id: parseInt(cat_id),
      },
    });
    return NextResponse.json({ status: "category deleted", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

//Select Category One
export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let cat_id = searchParams.get("cat_id");

    const prisma = new PrismaClient();
    const result = await prisma.category.findUnique({
      where: {
        id: parseInt(cat_id),
      },
    });
    return NextResponse.json({ status: "single category data", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
