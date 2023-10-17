import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();

    const aggregations = await prisma.order.aggregate({
      _avg: {
        grandTotal: true,
      },
      _count: {
        grandTotal: true,
      },
      _max: {
        grandTotal: true,
      },
      _min: {
        grandTotal: true,
      },
    });

    const countryGroup = await prisma.order.groupBy({
      by: ["country"],
    });

    return NextResponse.json({
      status: "All Order Report",
      data: aggregations,
      countryGroup,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
