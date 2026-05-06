import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import "./index.css";
import Wizard from '@/components/lib/wizard';
import {WizardStepProps} from '@/components/lib/wizard/step';

interface CollaborateProps {
  data: CollaborateType;
}

const formSchema = z.object({
  describeYourself: z.string(),
  availability: z.date(),
});

const steps: WizardStepProps[] = [
  {
    id: "describe-yourself",
    title: "How do you describe yourself?",
    description: "I need this information",
    icon: "server",
    fields: [
      {
        name: "classify-project",
        label: "Classify Project",
        type: "text",
        placeholder: "Classify project",
        schema: z.string().min(3).max(100)
      }
    ],
  },
  {
    id: "classify-project",
    title: "How do you describe yourself?",
    description: "I need this information",
    icon: "server",
    fields: [
      {
        name: "classify-project",
        label: "Classify Project",
        type: "text",
        placeholder: "Classify project",
        schema: z.string().min(3).max(100)
      }
    ],
  }
]

export default function Collaborate(props: CollaborateProps) {
  const {data} = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  });

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
          <Wizard>
            {
              steps.map((step: WizardStepProps) => (
                  <Wizard.Step key={step.id} {...step}/>
              ))
            }
          </Wizard>
        </Wizard.Provider>
      </Container>
  );
}