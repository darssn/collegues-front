import {Collegue} from '../models/Collegue';

const col1 = new Collegue();

col1.matricule = 'AAAA0';
col1.nom = 'Pierre';
col1.prenoms = 'Jean';
col1.email = 'PierreJean@XXXX.com';
col1.photoUrl = '/XXXX.img';
col1.dateDeNaissance = new Date('2000-01-01');



export {col1};
