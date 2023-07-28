import { redirect } from "@sveltejs/kit";
export async function POST({ cookies }) {
    cookies.delete("auth");
    throw redirect(303, "/");
}