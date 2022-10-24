import { heroes } from '../data/heroes'

export const getgHeroById = (id) => {

    return heroes.find( hero => hero.id === id)
}
