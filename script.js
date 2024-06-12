'use strict';

const body = document.body;
const toggle = document.getElementById('toggle');
const navWrapper = document.getElementById('nav-wrapper');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const main = document.getElementById('main');
const nav = navWrapper.querySelector('nav');

//Toggle nav

function showNav() {
  body.classList.toggle('nav-open');
  const icon = toggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
}

function clickToClose(e) {
  e.target == modal || e.target.closest('#close')
    ? modal.classList.remove('show-modal')
    : '';
  e.target.classList.contains('nav-open') ||
  (e.target.closest('nav') && e.target !== nav)
    ? body.classList.remove('nav-open')
    : '';
}

// Show Modal
function showModal() {}

// event-listener
toggle.addEventListener('click', showNav);
open.addEventListener('click', () => modal.classList.add('show-modal'));
// close.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', clickToClose);
