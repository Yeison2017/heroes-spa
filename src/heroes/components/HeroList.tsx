import { useEffect, useState } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { IHero } from "../data/heroes";
import HeroCard from "./HeroCard";

interface IHeroListProps {
    publisher: string;
}

const HeroList = ({ publisher }: IHeroListProps) => {
    const [heroes, setHeroes] = useState<IHero[]>([]);

    useEffect(() => {
        setHeroes(getHeroesByPublisher(publisher));
    }, []);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {heroes.map((hero: IHero) => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    );
};

export default HeroList;
