import { redirect } from "@sveltejs/kit";
import { deleteUserToken } from "$lib/auth";
export async function POST({ cookies }) {
    deleteUserToken(cookies.get("auth"));
    cookies.delete("auth");
    throw redirect(303, "/");
}