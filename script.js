const fetchGithubUser = async () => {
    let username = document.getElementById("searchInput").value;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message == "Not Found") {
        alert(data.message);
    } else {
        document.getElementById("userDetails").innerHTML = `
        <div class="profile">
        <div class="profile-image">
            <a href="${data.github_profile_url}">
                <img class="profile-image-icon" src="${data.avatar_url}" />
            </a>
        </div>
    
            <div class="profile-details">
                <h2 class="name">${data.name}</h2>
                <p class="username">@${data.login}</p>
                <p class="bio">${data.bio ? data.bio : 'Conta sem bio!'}</p>

                <div class="stats">
                    <div>
                        <div class="stats-name">Repositórios</div>
                        <div class="stats-name">${data.public_repos}</div>
                    </div>
                    <div>
                        <div class="stats-name">Seguidores</div>
                        <div class="stats-name">${data.followers}</div>
                    </div>
                    <div>
                        <div class="stats-name">Seguindo</div>
                        <div class="stats-name">${data.following}</div>
                    </div>
                </div>

                <div class="media">
                    <p>
                        <span class="media-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <span class="media-name">${data.location ? data.location : 'Não Disponível'}</span>
                    </p>
                    <p>
                        <span class="media-icon">
                            <i class="fas fa-link"></i>
                        </span>
                        <span class="media-name">${data.blog ? data.blog : 'Não Disponível'}</span>
                    </p>
                    <p>
                        <span class="media-icon">
                            <i class="fab fa-twitter"></i>
                        </span>
                        <span class="media-name">${data.twitter_username ? data.twitter_username : 'Não Disponível'}</span>
                    </p>
                    <p>
                        <span class="media-icon">
                            <i class="fas fa-building"></i>
                        </span>
                        <span class="media-name">${data.company ? data.company : 'Não Disponível'}</span>
                    </p>
                </div>
            </div>
        </div>
        `;
    }
}