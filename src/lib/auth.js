// mock DB
const users = [
    {
        username: "jeff123",
        admin: false
    },
    {
        username: "ian123",
        admin: true
    }
]

export function authenticateUser({ cookies }) {
    const userToken = cookies.get("auth");

    return users.find(i => i.username == userToken);
}
