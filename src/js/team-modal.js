(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
    const markup = `  <div class="team-modal-wrapper">
    <button
      tupe="button"
      class="team-modal__btn-close"
      data-modal-close
      data-id="teamModalClose"
    >
      <svg class="team-modal__btn-close-icon" width="15" height="15">
        <use href="images/icons.svg#icon-close"></use>
      </svg>
    </button>

    <h2 class="team-modal-wrapper__title">Our team</h2>
    <ul class="team-modal__list">
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Andrew Pichkorsky</h3>
        <p>Team Lead</p>
        <a href="#">Find on Github -> </a>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Anastasia Lytwyak</h3>
        <p>Scrum-master</p>
        <a href="#">Find on Github -> </a>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Orest Chornyi</h3>
        <p>Developer</p>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Eduard Oshurkow</h3>
        <p>Developer</p>
        <a href="#">Find on Github -> </a>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Alexander Lypchuk</h3>
        <p>Developer</p>
        <a href="#">Find on Github -> </a>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Nikita Panasewich</h3>
        <p>Developer</p>
        <a href="#">Find on Github -> </a>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Yevhen Krenychnyi</h3>
        <p>Developer</p>
        <a href="#">Find on Github -> </a>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Andrew Hrynevetskyi</h3>
        <p>Developer</p>
        <a href="#">Find on Github -> </a>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Anna Nesterenko</h3>
        <p>Developer</p>
        <a href="#">Find on Github -> </a>
      </li>
      <li class="team-modal__item">
        <img src="#" alt="" />
        <h3>Max Ivanyuk</h3>
        <p>Developer</p>
        <a href="#">Find on Github -> </a>
      </li>
    </ul>
  </div>`;

    refs.modal.insertAdjacentHTML('beforeend', markup);
  }
})();
