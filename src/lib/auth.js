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
];

const tokens = []

export function authenticateUser({ cookies }) {
    const userToken = cookies.get("auth");

    return users.find(i => i.username == getUserFromToken(userToken)) ?? null;
}

export function getUserFromToken(token) {
    const foundToken = tokens.find(i => i.token === token);
    return foundToken ? foundToken.username : null;
}

export function addUserToken(username, token) {
    tokens.push({
        username: username,
        token: token
    });
}

export function deleteUserToken(username) {
    const index = tokens.findIndex(i => i.username === username);
    if (index !== -1) {
        tokens.splice(index, 1);
    }
}
