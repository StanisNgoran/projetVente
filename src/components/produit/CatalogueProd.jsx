import mixeur from "../../assets/imageProduit/mixeur.jpeg";
import montre from "../../assets/imageProduit/montreconnecte.jpeg";
import hp from "../../assets/imageProduit/ordihp.jpeg";
import paire from "../../assets/imageProduit/pairebasket.jpeg";
import robe from "../../assets/imageProduit/robe.jpeg";
import chocolat from "../../assets/imageProduit/chocolat.jpeg";
import samsung from "../../assets/imageProduit/samsung.jpeg";


//ceci est un exemple pour illustrer comment tes produit s'afficherons, a toi de concevoir ton API
export const PRODUIT = [
  {
    id: 1,
    nomproduit: 'Samsung A16',
    description: '128 GO 8go RAM 5000mhA',
    prix: 90000,
    image: samsung,
  },
  {
    id: 2,
    nomproduit: 'Mixeur6',
    description: 'Fruit, légume, moins bruyant',
    prix: 15000,
    image: mixeur,
  },
  {
    id: 3,
    nomproduit: 'Montre Connectée Oraimo',
    description: 'Oraimo watch',
    prix: 12000,
    image: montre,
  },
  {
    id: 4,
    nomproduit: 'Chaussure Nike T45',
    description: 'Confortable',
    prix: 6000,
    image: paire,
  },
  {
    id: 5,
    nomproduit: 'Robe de Grand Soir',
    description: 'Fait en soie',
    prix: 25000,
    image: robe,
  },
  {
    id: 6,
    nomproduit: 'Ordinateur HP',
    description: 'Core i7 12e gen, 16GO RAM, SSD 256Go',
    prix: 560000,
    image: hp,
  },
  {
    id: 7,
    nomproduit: 'Chocolat',
    description: 'Délicieux',
    prix: 3000,
    image: chocolat,
  },
];
