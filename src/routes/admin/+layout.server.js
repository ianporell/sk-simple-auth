import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    if (!locals.user || !locals.user.admin) {
        throw redirect(303, "/");
    }
    else {
        return {
            user: locals.user
        }
    }
}