import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// product List Select
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.product.findMany();
    return NextResponse.json({ status: "All product data", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// product List Create

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.product.create({ data: reqBody });
    return NextResponse.json({ status: "product created", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// product  Update

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    let reqBody = await req.json();

    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");

    const prisma = new PrismaClient();
    const result = await prisma.product.update({
      where: { id: parseInt(product_id) },
      data: reqBody,
    });

    return NextResponse.json({ status: "product updated", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
// product  Delete

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");

    const prisma = new PrismaClient();
    const result = await prisma.product.delete({
      where: {
        id: parseInt(product_id),
      },
    });
    return NextResponse.json({ status: "product deleted", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

//Select single product
export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");

    const prisma = new PrismaClient();
    const result = await prisma.product.findUnique({
      where: {
        id: parseInt(product_id),
      },
    });
    return NextResponse.json({ status: "single product data", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
