import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';
import * as z from "zod";
import "./index.css";
import {WizardStepProps} from '@/components/lib/wizard/step';
import LinkButton from '@/components/lib/link-button';
import {IconNames} from '@/components/lib/icon';
import {InfoIcon} from 'lucide-react';

interface CollaborateProps {
  data: CollaborateType;
}

const steps: WizardStepProps[] = [
  {
    id: "describe-yourself",
    title: "How do you describe yourself?",
    description: "Please let me know what is your expertise to know how to start things off.",
    icon: "server",
    fields: {
      'describe': {
        type: "text",
        placeholder: "Classify project",
        schema: z.string().min(3, "The text must be at least 3 in length").max(100)
      }
    },
  },
  {
    id: "classify-project",
    title: "Where does your project classify?",
    description: "I need this information",
    icon: "link",
    fields: {
      'classify': {
        label: "Classify Project",
        type: "text",
        placeholder: "Classify project",
        schema: z.string().min(3).max(100)
      }
    },
  }
];

export default function Collaborate(props: CollaborateProps) {
  const {data} = props;

  return (
      <Container className="py-40" id="collaborate">
        <Comment>
          {data.comment}
        </Comment>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <Statement>
          {data.statement}
        </Statement>
        <div className="mt-10 mb-4 border border-(--semigrid) p-4 w-fit rounded-sm">
          <p className="text-accent-100 flex gap-2"><InfoIcon/>Use the buttons below to get in touch with me.</p>
        </div>
        <div className="flex-col md:flex-row md:items-center inline-flex gap-4">
          <div className="flex flex-col gap-4 w-fit">
            {
              Object.entries(props.data.social).filter(([key]) => key !== 'calendar').map(([key, value]) => (
                  <LinkButton icon={key as IconNames} key={key} href={value.href} external variant="secondary" className="w-fit">
                    {value.text}
                  </LinkButton>
              ))
            }
          </div>
          <span className="font-bold">OR</span>
          <div>
            <LinkButton href={props.data.social.calendar.href} icon="calendar">
              {props.data.social.calendar.text}
            </LinkButton>
          </div>
        </div>
      </Container>
  );
}