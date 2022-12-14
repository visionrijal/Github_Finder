// get document elements
let search = document.querySelector('.search input');
let profile = document.querySelector('.profile-card');




// ui and github instance
let github = new Github();
let ui = new UI();

// event listener
search.addEventListener('keyup',(e)=>{
    if(e.target.value !== ''&& e.keyCode == 13 ){
        profile.innerHTML='';
        github.getUser(e.target.value).then((userData)=>{
            ui.showProfile(userData.profile);
            ui.showRepos(userData.repos);
        })
    }else if(e.target.value == ''){
        profile.innerHTML='';
    }
})