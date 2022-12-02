import { useEffect, useState } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { IHero } from "../data/heroes";

interface IHeroListProps {
    publisher: string;
}

const HeroList = ({ publisher }: IHeroListProps) => {
    const [heroes, setHeroes] = useState<IHero[]>([]);

    useEffect(() => {
        setHeroes(getHeroesByPublisher(publisher));
    }, []);

    return (
        <ul>
            {heroes.map((hero: IHero) => (
                <li>{hero.superhero}</li>
            ))}
        </ul>
    );
};

export default HeroList;
