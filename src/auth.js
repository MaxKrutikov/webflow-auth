// Authentication module
function login(username, password) {
    // TODO: Implement
}

module.exports = { login };

function checkCredentals(username, password) {  // опечатка в названии
    return username && password;
}

function login(username, password) {
    if (checkCredentials(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}
