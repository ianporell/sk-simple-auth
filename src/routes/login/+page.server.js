import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    return {
        user: locals.user
    }
}

export const actions = {
    login: async({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get("username");
        cookies.set("auth", username, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		});

		throw redirect(303, "/");
    }
}