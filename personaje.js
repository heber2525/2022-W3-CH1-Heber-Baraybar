import { Adviser } from './advisor.js';

import { Knight } from './knight.js';
import { King } from './king.js';
import { Squire } from './squire.js';
import { Character } from './character.js';

const jB = new King('Joffrey', 'Baratheon');
const jL = new Knight('Jaime', 'Lannister');
const dT = new Knight('Daenerys', 'Targaryen');
const tL = new Adviser('Tyrion', 'Lannister');
tL.patron = dT;
const b = new Squire('Bronn');
b.patron = jL;

jB.imagen = 'img/joffrey.jpg';
jL.imagen = 'img/jaime.jpg';
dT.imagen = 'img/daenerys.jpg';
tL.imagen = 'img/tyrion.jpg';
b.imagen = 'img/bronn.jpg';

export const personajes = [jB, jL, dT, tL, b];
