import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const payload = {
    eventId: "c4a792cd-b389-44d8-bc02-419162c45864",
    sessionId: formData["sessionId"],
    triggeredAt: Date.now(),
  };
  try {
    const response = await fetch(
      `https://dev.personapay.tech/advertisers/campaign/conversion/coupon-webhook`,
      {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    const res = await response.json();
    console.log(res);
    return NextResponse.json(
      { message: "Success: conversion was sent" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
