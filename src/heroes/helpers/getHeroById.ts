import { heroes } from "../data/heroes";
import { IHero } from "../data/heroes";

export const getHeroById = (id: string): IHero | undefined => {
    return heroes.find((hero) => hero.id === id);
};
