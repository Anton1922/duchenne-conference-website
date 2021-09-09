'use strict';

/***Smooth scroll to anchors***/
const anchors = document.querySelectorAll('a[href*="#"]');


for (let i = 0; i < anchors.length; i++) {
  const anchor = anchors[i];

  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const sectionID = anchor.getAttribute('href').substr(1);
    console.log('sectionID', sectionID);
    
    document.getElementById(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}
