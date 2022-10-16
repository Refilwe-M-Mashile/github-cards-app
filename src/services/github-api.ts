const { Octokit } = require("octokit");

export const getUser = async (username: string) => {
    const results = await new Octokit().request('GET /users/{username}', {
        username: username
    })
    const { id, login, avatar_url, company } = results.data
    return { id, login, avatar_url, company }
}
export const getUsers = (users: Object) => {
    return users
}
getUser('Refilwe-M-Mashile')