import Container from '@/components/container';
import Comment from '@/components/comment';
import Statement from '@/components/statement';
import {CollaborateType, IconType} from '@/content/types';
import "./index.css";
import Heading from '@/components/heading';
import {CheckIcon} from 'lucide-react';


export interface ColabType {
  title: string;
  description: string;
  icon: IconType;
  services: string[];
}

/**
 * Types of colaborations:
 *
 * 1. I keep my opinions about product, and Translate
 *
 * 2.
 */
const packets: ColabType[] = [
  {
    title: "Rebuild",
    description: 'Only need a project',
    icon: "network",
    services: []
  },
  {
    title: "Product build",
    description: "",
    icon: "boxes",
    services: []
  },
  {
    title: "Product build",
    description: "",
    icon: "boxes",
    services: []
  }
];

export function PacketCard(props: ColabType) {
  return (
      <div className="colab-card">
        <h3 className="colab-card-title">{props.title}</h3>
        <ul className="colab-card-services">
          {
            props.services.map(service => {
              return (
                  <li key={service}>
                    <CheckIcon/>
                    {service}
                  </li>
              );
            })
          }
        </ul>
      </div>
  );
}

export default function Collaborate(props: CollaborateType) {
  const {contact, comment, title, statement} = props;
  return (
      <Container className="pt-40" id="message">
        <Comment>
          {comment}
        </Comment>
        <Heading as="h2">{title}</Heading>
        <Statement className="mb-16">
          {statement}
        </Statement>
        <div className="gap-2 w-full grid lg:grid-cols-3 md:grid-cols-2">
          {
            packets.map((packet, i) => (
                <PacketCard key={i} {...packet}/>
            ))
          }
        </div>
      </Container>
  );
}