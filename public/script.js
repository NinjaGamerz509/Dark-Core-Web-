document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/config');
        const config = await response.json();

        // Update Links
        const inviteLinks = document.querySelectorAll('.invite-link');
        const discordLinks = document.querySelectorAll('.discord-link');

        inviteLinks.forEach(link => {
            link.href = config.discord.inviteBot;
        });

        discordLinks.forEach(link => {
            link.href = config.discord.supportServer;
        });

        // Update Bot Name Strings
        document.getElementById('nav-bot-name').textContent = config.botName;
        document.querySelectorAll('.bot-footer-name').forEach(el => {
            el.textContent = config.botName;
        });

        // Render Features
        const featureContainer = document.getElementById('feature-list');
        featureContainer.innerHTML = ''; // Clear placeholder

        config.features.forEach(feature => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            `;
            
            // Click animation matching hover
            card.addEventListener('click', () => {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });

            featureContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading configuration:', error);
    }
});
