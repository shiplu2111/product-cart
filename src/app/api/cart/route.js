import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Cart List
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");
    const prisma = new PrismaClient();
    const result = await prisma.cart.findMany({
      where: {
        userId: user_id,
      },
    });
    return NextResponse.json({
      status: "All cart data",
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
    const result = await prisma.cart.create({ data: reqBody });
    return NextResponse.json({
      status: "cart created",
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
