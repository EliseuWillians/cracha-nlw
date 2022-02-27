const social_media_links = {
  github: 'EliseuWillians',
  youtube: 'channel/UCSW0Rtcs87ZB6A0bWcjYd7A',
  facebook: 'eliseu.willians',
  instagram: 'eliseuwillians',
  twitter: 'EliseuWillians'
}

function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${social_media_links[social]}`
  }
}

change_social_media_links()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${social_media_links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
    })
}

getGitHubProfileInfos()
