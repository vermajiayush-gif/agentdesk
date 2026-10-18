import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (list: { name: string; value: string; options: CookieOptions }[]) => {
        list.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        list.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  const { data: { user } } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;
  const toLogin = () => NextResponse.redirect(new URL("/login", request.url));

  if (!user) return toLogin();

  const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", user.id).maybeSingle();
  const role = profile?.role;
  const isStaff = role === "super_admin" || role === "staff";

  if (path.startsWith("/admin") && !isStaff) return NextResponse.redirect(new URL(role === "client_owner" ? "/portal" : "/login", request.url));
  if (path.startsWith("/portal") && role !== "client_owner" && !isStaff) return toLogin();
  return response;
}

export const config = { matcher: ["/admin/:path*", "/portal/:path*"] };
