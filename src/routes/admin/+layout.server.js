import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    console.log(locals.user);
    if (!locals.user.admin) {
        throw redirect(303, "/");
    }
    else {
        return {
            user: locals.user
        }
    }
}