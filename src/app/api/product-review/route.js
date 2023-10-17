import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// product review List
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.product_Review.findMany();
    return NextResponse.json({
      status: "All product review data",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// product review List Create

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.product_Review.create({ data: reqBody });
    return NextResponse.json({
      status: "product review created",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// product review  Update

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    let reqBody = await req.json();

    let { searchParams } = new URL(req.url);
    let product_review_id = searchParams.get("product_review_id");

    const prisma = new PrismaClient();
    const result = await prisma.product_Review.update({
      where: { id: parseInt(product_review_id) },
      data: reqBody,
    });

    return NextResponse.json({
      status: "product review updated",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
// product review  Delete

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let product_review_id = searchParams.get("product_review_id");

    const prisma = new PrismaClient();
    const result = await prisma.product_Review.delete({
      where: {
        id: parseInt(product_review_id),
      },
    });
    return NextResponse.json({
      status: "product review deleted",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

//Select single product meta
export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let product_review_id = searchParams.get("product_review_id");

    const prisma = new PrismaClient();
    const result = await prisma.product_Review.findUnique({
      where: {
        id: parseInt(product_review_id),
      },
    });
    return NextResponse.json({
      status: "single product review  data",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
