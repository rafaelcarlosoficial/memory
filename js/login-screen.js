 const onePlayer = document.querySelector('[data-one-player]');
 const twoPlayers = document.querySelector('[data-two-players]');
 
 onePlayer.addEventListener('click', () => {
 window.location.href = '../html/one-player.html';
 
 });
 
 twoPlayers.addEventListener('click', () => {
    window.location.href = '../html/two-players.html';
 });
 
 localStorage.clear();
 
 
 
 
 