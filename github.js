

class Github {
  constructor() {
    this.client_id = '597b4c14cc6cdb5b31ab';
    this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
    
  }

  async getUser(user) {
    
    

    const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
      "method": "get",
      "headers": {
        "Authorization": "Token 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"
      }
    });

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos`, {
      "method": "get",
      "headers": {
        "Authorization": "Token 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"
      }
    });


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();



    return {
      profile,
      repos
    }
  }
}