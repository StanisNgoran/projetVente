// routes.js
import { Home } from "../pages/home";
import { DetailProduit } from "../components/produit/detailsProduit";
import { MonPanier } from "../components/panier/panier";

// quand tu crée une page c'est que lien  pour acceder à cette page est precisé
 export const routes = [
  {
    path: '/',
    element: < Home/>, //page d'acceuil
  
  },
  {
    path: '/details', //lien apparaissant dans l'url du navigateur
    element: <DetailProduit />, //pages detail
  },
   {
    path: '/mon-panier', //lien apparaissant dans l'url du navigateur
    element: <MonPanier />, //pages detail
  },
];


