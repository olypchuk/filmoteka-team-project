const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: null,
  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('.team-modal-wrapper'),
  list: document.querySelector('.team-modal__list'),
  front: document.querySelector('.wrap-front'),
  back: document.querySelector('.wrap-back'),
};

refs.openModalBtn.addEventListener('click', onModalOpen);

refs.closeModalBtn = document.querySelector('[data-modal-close]');
refs.closeModalBtn.addEventListener('click', onModalClose);

const cardArr = [...refs.list.children];

function toggleModal() {
  refs.modal.classList.toggle('visually-hidden');
}

function onModalOpen() {
  refs.closeModalBtn.removeAttribute('disabled');
  refs.modalContent.style.opacity = 1;
  let delay = 250;
  toggleModal();
  cardArr.forEach(element => {
    delay += 250;
    setTimeout(() => {
      element.firstElementChild.style.transform = 'rotateY(360deg)';

      element.lastElementChild.style.transform = 'rotateY(180deg)';
    }, delay);
  });
}

function onModalClose() {
  refs.closeModalBtn.setAttribute('disabled', 'disabled');
  refs.modalContent.style.opacity = 1;
  let delay = 150;

  setTimeout(toggleModal, 2000);

  cardArr.forEach(element => {
    delay += 150;
    setTimeout(() => {
      refs.modalContent.style.opacity -= 0.05;
      element.firstElementChild.style.transform = 'rotateY(180deg)';

      element.lastElementChild.style.transform = 'rotateY(360deg)';
    }, delay);
  });
}
