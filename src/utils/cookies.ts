import { cookies } from "next/headers";

interface CookieOptions {
  path?: string;
  maxAge?: number;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
}

export async function setCookie(
  name: string,
  value: string,
  options?: CookieOptions
) {
  const cookieStore = await cookies();

  cookieStore.set({
    name,
    value,
    path: options?.path || "/",
    maxAge: options?.maxAge,
    httpOnly: options?.httpOnly ?? true,
    secure: options?.secure ?? true,
    sameSite: options?.sameSite || "lax",
  });
}

export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);

  return cookie?.value;
}
