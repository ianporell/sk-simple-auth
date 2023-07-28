import { authenticateUser } from "$lib/auth.js";

export async function handle({ event, resolve }) {
    event.locals.user = authenticateUser(event);
    return resolve(event);
}