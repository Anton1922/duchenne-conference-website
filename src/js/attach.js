'use strict';

const link = document.querySelector('.payment-download__link');
const upload = document.querySelector('.upload');
const undo = document.querySelector('.undo');
const attach = document.querySelector('.attach');
addEventListener('click', function (e) {
  const target = e.target;
  console.log('target', target);
  if (target.classList.contains('upload') || target.classList.contains('conference-program__download-link') || e.target.closest('.conference-program__download-link')) {
    attach.classList.add('active');
  }
  if (target.classList.contains('undo') || e.target.closest('.undo')) {
    e.preventDefault();
    attach.classList.remove('active');
  };
});