function lockedProfile() {

    let profiles = Array.from(document.getElementsByClassName('profile'));
    let hidden = document.querySelectorAll('div.profile div');

    for (let i = 0; i < profiles.length; i++) {
        let profile = profiles[i];
        let locked = profile.children[2];
        let unlocked = profile.children[4];
        let showMoreBtn = profile.children[profile.children.length - 1];

        showMoreBtn.addEventListener('click', () => {
            let hiddenDiv = hidden[i];

            if (unlocked.checked) {

                if (showMoreBtn.textContent === 'Show more') {
                    showMoreBtn.textContent = 'Hide it';
                    hiddenDiv.style.display = 'block';
                } else if (showMoreBtn.textContent === 'Hide it') {
                    hiddenDiv.style.display = 'none';
                    showMoreBtn.textContent = 'Show more';
                }
            }
        })
    }
}