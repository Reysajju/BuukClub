import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, favoriteGenre, booksPerYear } = body;

        console.log("📝 Received form submission:", { name, email });

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            );
        }

        // Initialize Supabase Client
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
            console.error("❌ Supabase credentials missing");
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        const supabase = createClient(supabaseUrl, supabaseKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
            }
        });

        console.log("📤 Inserting into Supabase 'waitlist' table...");

        const { error } = await supabase
            .from('waitlist')
            .insert([
                {
                    name,
                    email,
                    favorite_genre: favoriteGenre || "Not specified",
                    books_per_year: booksPerYear || "Not specified",
                }
            ]);

        if (error) {
            console.error("❌ Supabase Error:", error.message);
            return NextResponse.json(
                { error: "Failed to save data" },
                { status: 500 }
            );
        }

        console.log("✅ Data saved successfully to Supabase");

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("💥 Internal Error:", error.message);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

