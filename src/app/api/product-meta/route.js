import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// product meta List
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.product_Meta.findMany();
    return NextResponse.json({ status: "All product meta data", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// product meta List Create

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.product_Meta.create({ data: reqBody });
    return NextResponse.json({ status: "product meta created", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// product meta  Update

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    let reqBody = await req.json();

    let { searchParams } = new URL(req.url);
    let product_meta_id = searchParams.get("product_meta_id");

    const prisma = new PrismaClient();
    const result = await prisma.product_Meta.update({
      where: { id: parseInt(product_meta_id) },
      data: reqBody,
    });

    return NextResponse.json({ status: "product meta updated", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
// product meta  Delete

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let product_meta_id = searchParams.get("product_meta_id");

    const prisma = new PrismaClient();
    const result = await prisma.product_Meta.delete({
      where: {
        id: parseInt(product_meta_id),
      },
    });
    return NextResponse.json({ status: "product meta deleted", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

//Select single product meta
export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let product_meta_id = searchParams.get("product_meta_id");

    const prisma = new PrismaClient();
    const result = await prisma.product_Meta.findUnique({
      where: {
        id: parseInt(product_meta_id),
      },
    });
    return NextResponse.json({
      status: "single product meta  data",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
