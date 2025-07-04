import { LogInIcon,SparkleIcon, ShoppingCart } from "lucide-react";
import { Button } from "./form/bouton";
import { SearchBar } from "./form/searchbar";
import { Computer,BriefcaseMedical,Gamepad,Footprints } from "lucide-react";
import { NavLink,useNavigate } from "react-router-dom";
import { usePanier } from "../hooks/usePanier";
// import { motion } from "motion/react"
export function Navbar(){
    const {totalProduit}=usePanier()
    const navigate=useNavigate()
    return(
        <>
        {/* //Div principale qui contient les deux barres */}
        <div className="fixed top-0 left-0 right-0 z-30 mx-1"> 
            {/* partie de la barre de navigation  */}
             <div className="bg-white border border-gray-300 shadow-200 p-3 ">
                <div className="flex gap-1">
                    <div className="w-1/3 flex justify items-center space-x-1">
                        <Button 
                            type={"button"} 
                            onClick={()=>navigate('/')}
                            className={"flex mx-2"}>
                            <SparkleIcon/>
                            Logo
                        </Button>
                        
                    </div>

                    <div className="w-1/3 mr-4 sm:w-1/3 ">
                        <SearchBar
                            className="border border-gray-400 p-1 w-full rounded-xl sm:w-full sm:p-2"
                            placeholder="Rech..."
                        />
                    </div>

                    <div className="w-1/3 flex justify-end items-center space-x-0">

                        <Button 
                            type={"button"} 
                            onClick={()=>navigate('/mon-panier')}
                            className={"flex items-center mx-2 hover:text-red-400 "}>
                                {totalProduit}
                            <ShoppingCart/>
                            <span className="hidden sm:inline ml-1"> Panier</span>
                        </Button>

                        <Button 
                            type={"button"} 
                            className={"flex px-1 py-1 rounded-3xl bg-blue-400 text-white text-sm hover:bg-blue-500 sm:px-2 sm:py-2 sm:text-md"}>
                            <LogInIcon/>
                            S'inscrire
                        </Button>

                    </div>
                </div>
            </div>


            {/* ic c'est la barre des caregories */}
            <div className="bg-gray-700  shadow-sm h-12 ">
                <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide mx-2 p-2">
                        <div className="flex">
                            <NavLink to="" className="flex hover:text-red-400 text-white ">
                                <Computer/>
                                Informatique
                            </NavLink>
                        </div>
                        <div className="flex">
                            <NavLink to=""className="flex hover:text-red-400 text-white">
                                <Gamepad/>
                                Electronique
                            </NavLink>
                        </div>
                        <div className="flex">
                            <NavLink to=""className="flex hover:text-red-400 text-white">
                                <BriefcaseMedical/>
                                Santé
                            </NavLink>
                        </div>

                        <div className="flex">
                            <NavLink to=""className="flex hover:text-red-400 text-white">
                                🥋
                                Vetement
                            </NavLink>
                        </div>

                        <div className="flex">
                            <NavLink to=""className="flex hover:text-red-400 text-white">
                                👟👢
                                Chaussure
                            </NavLink>
                        </div>
                         <div className="flex">
                            <NavLink to=""className="flex hover:text-red-400 text-white">
                                <Footprints/>
                                Sport
                            </NavLink>
                        </div>

                </div>
                
            </div>
        </div>
           
        </>
    )
        



}