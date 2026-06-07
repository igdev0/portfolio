import {PassionsType} from '@/content/types';

export const passions: PassionsType = {
  comment: "// Passions",
  title: "Passions & Hobbies",
  statement: "Always up to something",
  passions: [
    {
      image: {
        src: "/passions/coding.jpg",
        alt: "Coding",
        width: 300,
        height: 533
      },
      bio: "I'm passionate about building websites",
      title: "Coding",
      content: ""
    },
    {
      image: {
        src: "/passions/skate.png",
        alt: "Coding",
        width: 300,
        height: 533
      },
      title: "Skateboarding",
      bio: "I love riding and doing tricks on skate.",
      content: ""
    },
    {
      image: {
        src: "/passions/football.png",
        alt: "Football",
        width: 300,
        height: 533
      },
      title: "Football",
      bio: "Football is my thing as well.",
      content: ""
    },
  ],
};