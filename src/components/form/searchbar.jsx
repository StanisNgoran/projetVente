import { useId } from "react";
export function SearchBar({value,placeholder,onchange,className}){
    const id= useId()

    return  <>
            <input 
                id={id}
                className={className}
                value={value}
                placeholder={placeholder}
                onChange={onchange}
            />
    </>


}