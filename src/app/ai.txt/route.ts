import { NextResponse } from "next/server";

export async function GET() {
    const content = `
This platform helps authors monetize via live book clubs. 
We charge a 30% commission. 
Contact support@antiamazon.club for press.

Key Features:
- Direct-to-Fan Monetization
- You own the email list
- Live Events via Discord/Zoom
- High-Ticket Sales ($20-$100+)

Pricing:
- $0 Upfront
- 30% Revenue Share (only when you get paid)

Mission:
To help authors escape the 70% Amazon tax and build sustainable businesses.
  `.trim();

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
