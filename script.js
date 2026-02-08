document.addEventListener("DOMContentLoaded", () => {
    // Nav Links
    const navDiscord = document.getElementById('nav-discord');
    const navInvite = document.getElementById('nav-invite');
    
    if(navDiscord) navDiscord.href = botConfig.discordLink;
    if(navInvite) navInvite.href = botConfig.inviteLink;
    
    // Hero Buttons
    const heroAdd = document.getElementById('hero-add');
    const heroSupport = document.getElementById('hero-support');
    
    if(heroAdd) heroAdd.href = botConfig.inviteLink;
    if(heroSupport) heroSupport.href = botConfig.supportServer;
});
