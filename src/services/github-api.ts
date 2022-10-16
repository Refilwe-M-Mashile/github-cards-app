const { Octokit } = require("octokit");

export const getUser = async (username: string) => {
    const results = await new Octokit().request('GET /users/{username}', {
        username: username
    })
    const { login, avatar_url, company } = results.data
    return { login, avatar_url, company }
}

getUser('Refilwe-M-Mashile')