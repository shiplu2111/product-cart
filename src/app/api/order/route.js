import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Cart List
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.order.findMany();
    return NextResponse.json({
      status: "All Order Data",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// Cart List Create

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const createResult = prisma.order.create({ data: reqBody });
    const updateResult = prisma.cart.updateMany({
      where: {
        userId: reqBody.userId,
      },
      data: {
        status: "ordered",
      },
    });

    const result = await prisma.$transaction([createResult, updateResult]);
    return NextResponse.json({
      status: "Order created",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// Cart item  Delete

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let cart_id = searchParams.get("cart_id");

    const prisma = new PrismaClient();
    const result = await prisma.cart.delete({
      where: {
        id: parseInt(cart_id),
      },
    });
    return NextResponse.json({
      status: "cart deleted",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
