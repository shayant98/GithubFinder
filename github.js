class GitHub {
    constructor() {
        this.client_id = '3a3e3884deb38b79ae02'
        this.client_secret = '6ebea9dc0ea7b94bd0e863abb2b50a5872415e99'
        this.repos_count = 5
        this.repos_sort = 'created_asc'
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }

}