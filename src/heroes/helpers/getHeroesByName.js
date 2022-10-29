import { heroes } from "../data/heroes"


export const getHeroesByName = ( name = '') => {

    //quita espacio en blanco al final
        name = name.toLocaleLowerCase().trim()
        
        if ( name.length === 0) return []

        return heroes.filter(
            hero => hero.superhero.toLocaleLowerCase().includes(name)
        )
}
