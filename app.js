const github = new GitHub;
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // get input text
    userText = e.target.value

    if (userText != '') {
        // make http to call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert
                    ui.showAlert('user not found', 'alert alert-danger')
                    ui.clearProfile();
                } else {
                    // show profile
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
})