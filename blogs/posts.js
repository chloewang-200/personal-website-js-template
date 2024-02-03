window.onload = function() {
    console.log("hey")
    const container = document.getElementById('blogPostsContainer');

    blogPostsData.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardImage = document.createElement('img');
        cardImage.src = post.image;

        
        const cardTitle = document.createElement('a');
        cardTitle.className = 'card-title';
        cardTitle.href = post.link;
        cardTitle.innerText = post.title;

        const cardDate = document.createElement('div');
        cardDate.className = 'card-date';
        cardDate.innerText = post.date;

        const cardIntro = document.createElement('div');
        cardIntro.className = 'card-intro';
        cardIntro.innerText = post.intro;

        const cardLink = document.createElement('a');
        cardLink.className = 'card-link';
        cardLink.href = post.link;
        cardLink.innerText = 'Read More ->';

        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardDate);
        card.appendChild(cardIntro);
        card.appendChild(cardLink);

        
        container.appendChild(card);
    });
};
