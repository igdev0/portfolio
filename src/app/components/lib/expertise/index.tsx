import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import Statement from '@/app/components/lib/statement';
import "./index.css";


interface ExternalLink {
  href: string;
  text: string;
}

export interface ExperienceProps {
  title: string;
  location: string;
  contractType: string;
  remote: boolean;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  links: ExternalLink[];
}


function Experience(props: ExperienceProps) {
  return (
      <div className="experience">
        <div className="timeline">
          <div className="timeline__head"/>
          <div className="timeline__bar"/>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{props.title}</h3>
          <div style={{height: '500px'}}/>
        </div>
      </div>
  );
}

const contents = {
  comment: "// Expertise",
  title: "{Expertise}",
  experiences: [
    {
      title: "[Open-Source Engineer]",
      contractType: "Full-Time",
      remote: true,
      startDate: "December 2022",
      endDate: "December 2024",
      links: [
        {
          href: "",
          text: "STAR App",
        },
        {
          href: "",
          text: "Teva MS App",
        }
      ],

    }
  ] as ExperienceProps[]
};
export default function Expertise() {
  return (
      <Container className="pt-40">
        <Comment>{contents.comment}</Comment>
        <h1 className="text-4xl font-bold mt-3">{contents.title}</h1>
        <Statement>
          I got more than 5 years of experience.
        </Statement>
        {
          contents.experiences.map((experience, index) => (
              <Experience key={index + 1} {...experience}/>
          ))
        }
      </Container>
  );
}