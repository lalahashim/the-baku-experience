const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.display === 'block';

      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

      if (!isOpen) {
        answer.style.display = 'block';
      }
    });
});



const tourDetails = {
  oldCity: {
    title: 'Old City Walking Tour',
    content: `
      <p>Step back in time as you walk through Baku’s ancient Icherisheher. Explore the Maiden Tower, the Palace of the Shirvanshahs, and narrow stone-paved streets filled with stories.</p>
      <ul>
        <li><strong>Highlights:</strong> Maiden Tower, caravanserais, mosques</li>
        <li><strong>Guide Language:</strong> English, Russian, Italian</li>
        <li><strong>Duration:</strong> 3 hours</li>
        <li><strong>Price:</strong> from $30</li>
      </ul>
    `
  },
  modernBaku: {
    title: 'Modern Baku Highlights',
    content: `
      <p>Experience the architectural wonders of modern Baku, from the iconic Flame Towers to the futuristic Heydar Aliyev Center designed by Zaha Hadid.</p>
      <ul>
        <li><strong>Included:</strong> Transport, English-speaking guide</li>
        <li><strong>Duration:</strong> Half-day</li>
        <li><strong>Price:</strong> from $40</li>
      </ul>
    `
  },
  gobustan: {
    title: 'Gobustan & Mud Volcanoes',
    content: `
      <p>Visit Gobustan National Park and discover ancient rock carvings dating back thousands of years. Then witness the unique natural phenomenon of mud volcanoes.</p>
      <ul>
        <li><strong>Petroglyphs:</strong> UNESCO World Heritage site</li>
        <li><strong>Mud Volcanoes:</strong> Surreal landscapes & photo opportunities</li>
        <li><strong>Guide Language:</strong> English, Russian</li>
        <li><strong>Duration:</strong> 5 hours</li>
        <li><strong>Price:</strong> from $45</li>
      </ul>
    `
  },
  culinary: {
    title: 'Baku Culinary Tour',
    content: `
      <p>Delve into the flavors of Azerbaijani cuisine as you sample national dishes and explore local food culture. Visit bustling markets and cozy cafés, and learn the stories behind traditional meals.</p>
      <ul>
        <li><strong>Tastings:</strong> Plov, dolma, qutab, pakhlava</li>
        <li><strong>Activities:</strong> Market visit, tea ceremony</li>
        <li><strong>Guide Language:</strong> English, German</li>
        <li><strong>Duration:</strong> 4 hours</li>
        <li><strong>Price:</strong> from $50</li>
      </ul>
    `
  },
  absheron: {
    title: 'Absheron Peninsula Tour',
    content: `
      <p>Take a journey through the Absheron Peninsula’s ancient and mystical sites. From the eternal flames of Ateshgah to the natural fire at Yanar Dag, this tour reveals the spiritual and geological wonders of Azerbaijan.</p>
      <ul>
        <li><strong>Stops:</strong> Ateshgah Fire Temple, Yanar Dag, Mardakan Fort</li>
        <li><strong>Included:</strong> Entry fees, transportation, guide</li>
        <li><strong>Duration:</strong> Half-day</li>
        <li><strong>Price:</strong> from $40</li>
      </ul>
    `
  },
  nightTour: {
    title: 'Baku by Night Walking Tour',
    content: `
      <p>Discover the glowing beauty of Baku after sunset. This night walking tour lets you see the city's most iconic landmarks lit up in magical lights while enjoying a peaceful stroll along the Caspian Sea. It’s a romantic and relaxing way to end your day in Baku.</p>
      <ul>
        <li><strong>Evening Route:</strong> Old City, Baku Boulevard, Flame Towers light show</li>
        <li><strong>Included:</strong> English-speaking guide, tea break at a local café</li>
        <li><strong>Tour Length:</strong> 3 hours</li>
        <li><strong>Great For:</strong> Couples, photographers, solo travelers</li>
        <li><strong>Note:</strong> Light jacket recommended for breezy nights</li>
      </ul>
    `
  }
};

function openModal(tourKey) {
  const data = tourDetails[tourKey];
  if (!data) return;

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalText').innerHTML = data.content;
  document.getElementById('tourModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('tourModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('tourModal');
  if (event.target === modal) {
    closeModal();
  }
};
