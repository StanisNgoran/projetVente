import { Button } from "../form/bouton";
import { useNavigate } from "react-router-dom";
export function CardProduit({nomproduit,prix,description,image}){
    const navigate = useNavigate(); //permet de recuperer les données d'un porduit pour l'envoyer sur la page detail


// fonction permettant de recuperer le produit cliqué + la redirection vers details produit
  function handleAjouterClick() {
    // Naviguer vers /details avec les données du produit
    navigate("/details", {
      state: {
        nomproduit,
        prix,
        description,
        image,
      },
    });
  }
    return <>

        {/* Design d'une carte de produit  */}
        <div className="w-full max-w-xs bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
        {/* <!-- Badge Promo --> */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -20%
            </span>

            {/* <!-- Image produit --> */}
            <img
                src={image}
                alt="Nom du produit"
                className="w-full h-48 object-cover"
            />

            {/* <!-- Détails --> */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800">{nomproduit}</h3>
                <p className="text-sm text-gray-600">{description}</p>

                {/* <!-- Prix + Bouton --> */}
                <div className="flex items-center justify-between mt-1">
                    <span className="text-lg font-bold text-green-600"><strong>{prix}Fcfa</strong></span>
                

                </div>

                <div className="w-full ">
                    <Button 
                        type={"button"} 
                        onClick={handleAjouterClick}
                        className={"w-full px-2 py-1 text-sm sm:px-2 sm:py-2 sm:text-md text-white bg-yellow-400 rounded-full hover:bg-yellow-600 transition "}>
                        Ajouter

                    </Button>
                </div>
            </div>
    </div>

    </>
}