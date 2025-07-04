// permet d'afficher les details du produit lorsqu'il est cliqué avant d'etre ajouté au panier
import { useLocation } from "react-router-dom";
import { MainLayout } from "../../Layout/MainLayout";
import { Button } from "../form/bouton";
import { usePanier } from "../../hooks/usePanier";
import {toast} from "react-hot-toast";
export function DetailProduit(){
    const {ajouterAupanier}=usePanier()
    const{state}=useLocation() //recuperation des données du produit cliqué 

    const { nomproduit, prix, description, image } = state; //les differents données du produit cliqué
    return <>
    <MainLayout> 
        <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Carte Produit */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-4 flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt={nomproduit}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Détails produit */}
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{nomproduit}</h2>
              <p className="text-gray-600 mt-2">{description}</p>
              <p className="text-green-600 font-semibold text-xl mt-4">
                {prix} Fcfa
              </p>
            </div>

            <Button
              type="button"
              onClick={() =>{ajouterAupanier(state)
                toast.success("Produit Ajouté au panier")
              } }
              className="w-full mt-6 px-4 py-2 text-white bg-yellow-400 rounded-full hover:bg-yellow-500 transition"
            >
              Ajouter au Panier
            </Button>
          </div>
        </div>

        {/* Infos livraison */}
        <div className="md:w-1/3 bg-slate-100 border border-gray-200 rounded-xl shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-2">🚚 Livraison</h2>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Livraison en 48h</li>
            <li>Choix de la ville à la commande</li>
            <li>Livraison gratuite dès 50 000 Fcfa</li>
            <li>Suivi de colis disponible</li>
          </ul>
        </div>
      </div>
    </MainLayout>
       
     </>
}