import {PassionsType} from '@/content/types';

const passions: PassionsType = {
  comment: "// Enjoyables",
  title: "{Passions}",
  statement: "Always looking to improve.",
  passions: [
    {
      image: {
        src: "/passions/coding.webp",
        alt: "Coding",
        width: 300,
        height: 533
      },
      icon: "code",
      bio: "Coding started as a hobby in 2017 and turned into my career. I still spend my free time coding.",
      title: "Coding",
      content: ""
    },
    {
      image: {
        src: "/passions/skate.webp",
        alt: "Skateboarding",
        width: 300,
        height: 533
      },
      icon: "skate",
      title: "Skateboarding",
      bio: "Skateboarding is what I grew up with. I ride goofy stance and can land most foundational tricks.",
      content: ""
    },
    {
      image: {
        src: "/passions/football.webp",
        alt: "Football",
        width: 300,
        height: 533
      },
      icon: "football",
      title: "Football",
      bio: "Football is the first sport I ever got into. You can usually find me at the skatepark, juggling a ball.",
      content: ""
    },
  ],
};

export default passions;