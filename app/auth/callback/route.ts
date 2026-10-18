import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Handles the magic-link code exchange, then sends each role to its own area.
export async function GET(request: NextRequest) {
  const supabase = createClient();
  const code = request.nextUrl.searchParams.get("code");
  if (code) await supabase.auth.exchangeCodeForSession(code);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/login", request.url));

  const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", user.id).maybeSingle();
  const dest = profile?.role === "client_owner" ? "/portal" : profile ? "/admin" : "/login";
  return NextResponse.redirect(new URL(dest, request.url));
}
