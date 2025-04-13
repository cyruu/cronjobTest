import { sendCronTestMail } from "@/nodemailer/nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  await sendCronTestMail();
  return NextResponse.json({ msg: "Test cron mail" });
}
