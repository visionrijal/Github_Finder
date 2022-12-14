const checkIfNull = (data) => {
  return data == null ? 'n/a' : data;
}
class UI {
  showProfile(profile) {
    document.querySelector('.profile').innerHTML = `
        <div class="container mt-4">
        <div class="card card-body">
          <div class="row">
            <div class="col-md-3">
              <img class=" img-fluid mb-2 rounded-circle" src="${profile.avatar_url}" alt="">
              <a href="${profile.html_url}" class="btn btn-primary d-block">view profile</a>
              </div>
            <div class="col-md-9 text-dark mt-3">
              <span class="badge bg-primary">public repos: ${checkIfNull(profile.public_repos)}</span>
              <span class="badge bg-secondary">public gists: ${checkIfNull(profile.public_gists)}</span>
              <span class="badge bg-warning">followers: ${checkIfNull(profile.followers)}</span>
              <span class="badge bg-success">following: ${checkIfNull(profile.following)}</span>
              <ul class="list-group mt-3">
              <li class="list-group-item">name: ${checkIfNull(profile.name)} </li>
                <li class="list-group-item">company: ${checkIfNull(profile.company)}</li>
                <li class="list-group-item">email: ${checkIfNull(profile.email)} </li>
                <li class="list-group-item">website: ${checkIfNull(profile.blog)} </li>
              </ul>
            </div>
          </div>
        </div>
      
   
      <h3 class="text-left mt-3">PUBLIC REPOS:</h3>
      <div class = "repos ">
        
      </div>
      </div>
        `
      ;
        
    }
    showRepos(repos){
      let output = '';
      repos.forEach((repo)=>{
        output+= `<div class = "card card-body mb-2">
                      <div class = "row">
                        <div class = "col-md-6 text-left">
                          <a href = "${repo.html_url}" class = "text-center text-decoration-none">${repo.name}</a>
                        </div>
                        <div class = "col-md-6">
                          <span class="badge bg-primary"> stars: ${repo.stargazers_count}</span>
                          <span class="badge bg-secondary"> watchers: ${repo.watchers_count}</span>
                          <span class="badge bg-warning"> forks: ${repo.forks_count}</span>
                        </div>
                      </div>
                    </div>`;
         document.querySelector('.repos').innerHTML = output;
      })

    }
}