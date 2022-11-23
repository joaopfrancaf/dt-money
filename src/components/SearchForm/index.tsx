import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm () {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transaçoes"></input>

            <button type="submit">
                <MagnifyingGlass size={20}/>
                buscar
            </button>
        </SearchFormContainer>
    )
}