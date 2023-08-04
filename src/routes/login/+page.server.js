import { redirect } from "@sveltejs/kit";
import { addUserToken } from "$lib/auth";
import { v4 as uuidv4 } from "uuid";

export async function load({ locals }) {
    return {
        user: locals.user
    }
}

export const actions = {
    login: async({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get("username");
        const cookie = uuidv4();
        cookies.set("auth", cookie, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		});
        addUserToken(username, cookie);

		throw redirect(303, "/");
    }
}