
import {toast} from "react-hot-toast";
import { usePanier } from "../../hooks/usePanier";
import { MainLayout } from "../../Layout/MainLayout";

export function MonPanier() {
  const { elementDuPanier, supprimerDupanier } = usePanier();

  return (
    <MainLayout>
      <div className="border border-gray-300 rounded-lg shadow-sm p-4">
        <h2 className="text-xl font-bold mb-4">Mon Panier</h2>
        {elementDuPanier.length === 0 ? (  
          <p>Votre panier est vide.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {elementDuPanier.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 border-b pb-2"
                >
                  <img
                    src={item.image}
                    alt={item.nomproduit}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.nomproduit}</p>
                    <p className="text-sm text-gray-600">{item.prix} Fcfa</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={()=>{supprimerDupanier();
                 toast.success("Vidé avec succès")}
              }
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Vider le panier
            </button>
          </>
        )}
      </div>
    </MainLayout>
  );
}
