export interface IHero {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  heroImageUrl: string;
}

export const heroes: IHero[] = [
  {
    id: "dc-batman",
    superhero: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    characters: "Bruce Wayne",
    heroImageUrl: "https://i.ibb.co/j4T9Lfj/dc-batman.jpg",
  },
  {
    id: "dc-superman",
    superhero: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    characters: "Kal-El",
    heroImageUrl: "https://i.ibb.co/37CcyF1/dc-superman.jpg",
  },
  {
    id: "dc-flash",
    superhero: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen",
    heroImageUrl: "https://i.ibb.co/8YW1fJ6/dc-flash.jpg",
  },
  {
    id: "dc-green",
    superhero: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    characters:
      "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
    heroImageUrl: "https://i.ibb.co/5rgfy45/dc-green.jpg",
  },
  {
    id: "dc-arrow",
    superhero: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "More Fun Comics #73",
    characters: "Oliver Queen",
    heroImageUrl: "https://i.ibb.co/7ykQ6H1/dc-arrow.jpg",
  },
  {
    id: "dc-wonder",
    superhero: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "All Star Comics #8",
    characters: "Princess Diana",
    heroImageUrl: "https://i.ibb.co/TYGJRX1/dc-wonder.jpg",
  },
  {
    id: "dc-martian",
    superhero: "Martian Manhunter",
    publisher: "DC Comics",
    alter_ego: "J'onn J'onzz",
    first_appearance: "Detective Comics #225",
    characters: "Martian Manhunter",
    heroImageUrl: "https://i.ibb.co/RgyYbzk/dc-martian.jpg",
  },
  {
    id: "dc-robin",
    superhero: "Robin/Nightwing",
    publisher: "DC Comics",
    alter_ego: "Dick Grayson",
    first_appearance: "Detective Comics #38",
    characters: "Dick Grayson",
    heroImageUrl: "https://i.ibb.co/ysjjySP/dc-robin.jpg",
  },
  {
    id: "dc-blue",
    superhero: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    characters: "Dan Garret, Ted Kord, Jaime Reyes",
    heroImageUrl: "https://i.ibb.co/VDbrJwq/dc-blue.jpg",
  },
  {
    id: "dc-black",
    superhero: "Black Canary",
    publisher: "DC Comics",
    alter_ego: "Dinah Drake",
    first_appearance: "Flash Comics #86",
    characters: "Dinah Drake, Dinah Lance",
    heroImageUrl: "https://i.ibb.co/RTKPFVV/dc-black.jpg",
  },
  {
    id: "marvel-spider",
    superhero: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    characters: "Peter Parker",
    heroImageUrl: "https://i.ibb.co/zsHSq6d/marvel-spider.jpg",
  },
  {
    id: "marvel-captain",
    superhero: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    characters: "Steve Rogers",
    heroImageUrl: "https://i.ibb.co/FHGSJBM/marvel-captain.jpg",
  },
  {
    id: "marvel-iron",
    superhero: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    characters: "Tony Stark",
    heroImageUrl: "https://i.ibb.co/rw5m6sM/marvel-iron.jpg",
  },
  {
    id: "marvel-thor",
    superhero: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    characters: "Thor Odinson",
    heroImageUrl: "https://i.ibb.co/vqQghLd/marvel-thor.jpg",
  },
  {
    id: "marvel-hulk",
    superhero: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    characters: "Bruce Banner",
    heroImageUrl: "https://i.ibb.co/SXr3zZr/marvel-hulk.jpg",
  },
  {
    id: "marvel-wolverine",
    superhero: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    characters: "James Howlett",
    heroImageUrl: "https://i.ibb.co/KG9vBwT/marvel-wolverine.jpg",
  },
  {
    id: "marvel-daredevil",
    superhero: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    characters: "Matthew Michael Murdock",
    heroImageUrl: "https://i.ibb.co/0yDTdJ2/marvel-daredevil.jpg",
  },
  {
    id: "marvel-hawkeye",
    superhero: "Hawkeye",
    publisher: "Marvel Comics",
    alter_ego: "Clinton Francis Barton",
    first_appearance: "Tales of Suspense #57",
    characters: "Clinton Francis Barton",
    heroImageUrl: "https://i.ibb.co/jRScTx1/marvel-hawkeye.jpg",
  },
  {
    id: "marvel-cyclops",
    superhero: "Cyclops",
    publisher: "Marvel Comics",
    alter_ego: "Scott Summers",
    first_appearance: "X-Men #1",
    characters: "Scott Summers",
    heroImageUrl: "https://i.ibb.co/YhHgjbH/marvel-cyclops.jpg",
  },
  {
    id: "marvel-silver",
    superhero: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    characters: "Norrin Radd",
    heroImageUrl: "https://i.ibb.co/dQ7NM2m/marvel-silver.jpg",
  },
];
