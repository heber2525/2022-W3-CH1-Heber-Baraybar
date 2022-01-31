import { Adviser } from './advisor.js';
import { personajes } from './personaje.js';
import { Knight } from './knight.js';
import { King } from './king.js';
import { Squire } from './squire.js';
import { Character } from './character.js';

personajes.forEach((element) => {
  const template = `<li class="character col">
    <div class="card character__card">
      <img
        src="${element.imagen}"
        alt="Nombre y familia del personaje"
        class="character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">"${element.name} ${element.family}"</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: X años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li></li>
            <li>Arma: XXX</li>
            <li>Destreza: X</li>
            <li>Peloteo: X</li>
            <li>Asesora a: X</li>
            <li>Sirve a: X</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji"></i>
    </div>
  </li>`;
});
