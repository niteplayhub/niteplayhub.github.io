// Carousel auto-scroll (horizontal)
setInterval(function() {
  const track = document.getElementById('carouselTrack');
  if (track) {
    track.scrollLeft += 2;
    if (track.scrollLeft + track.offsetWidth >= track.scrollWidth) {
      track.scrollLeft = 0;
    }
  }
}, 30);

// Search realtime
function searchVideos() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = (title.includes(query)) ? '' : 'none';
  });
}

// Modal video detail
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Hindari klik pada tombol
    if (e.target.classList.contains('watch-btn')) return;
    const img = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('p').textContent;
    const stars = card.querySelector('.stars').innerHTML;
    const videoUrl = card.querySelector('.watch-btn').href;
    document.getElementById('modalBody').innerHTML = `
      <img src="${img}" alt="${title}" style="width:100%;border-radius:14px;">
      <h2>${title}</h2>
      <div style="margin:.5em 0 1.1em 0;">${stars}</div>
      <p style="color:#ffc8c8;">${desc}</p>
      <a href="${videoUrl}" target="_blank" class="btn watch-btn" style="margin-top:.7em;">Watch Video</a>
    `;
    document.getElementById('videoModal').style.display = 'flex';
  });
});
function closeModal() {
  document.getElementById('videoModal').style.display = 'none';
}
