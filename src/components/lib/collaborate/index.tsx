import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';
import * as z from "zod";
import "./index.css";
import Wizard from '@/components/lib/wizard';
import {WizardStepProps} from '@/components/lib/wizard/step';

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

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
      <Container className="py-40" id="collaborate">
        <Comment>
          {data.comment}
        </Comment>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <Statement>
          {data.statement}
        </Statement>
        <Wizard.Provider>
          <Wizard onSubmit={onSubmit}>
            {
              steps.map((step) => (
                  <Wizard.Step key={step.id} {...step}/>
              ))
            }
          </Wizard>
        </Wizard.Provider>
      </Container>
  );
}