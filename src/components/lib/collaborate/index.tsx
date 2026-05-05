import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';
import {MessageCircle, Projector, User2} from 'lucide-react';
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from 'react';
import {useForm} from "react-hook-form";
import * as z from "zod";
import "./index.css";

interface CollaborateProps {
  data: CollaborateType;
}

const formSchema = z.object({
  describeYourself: z.string(),
  availability: z.date(),
});

export default function Collaborate(props: CollaborateProps) {
  const {data} = props;
  const [active, setActive] = useState(0);
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
        <div className="grid grid-cols-3">

        </div>
        <form className="collaborate-form mt-6">
          <fieldset>
            <User2/>
            <label htmlFor="question-0">
              1. How do you describe yourself?
              <input type="text" name="question-0" placeholder="Type your answer ..."/>
            </label>
          </fieldset>
          <fieldset>
            <Projector/>
            <label htmlFor="question-1">
              2. Classify your project.
              <input type="text" name="question-1" placeholder="Type your answer ..."/>
            </label>
          </fieldset>
          <fieldset>
            <MessageCircle/>
            <label htmlFor="question-2">
              3. Your handle
              <input type="text" name="question-2" placeholder="Type your answer ..."/>
            </label>
          </fieldset>
        </form>
      </Container>
  );
}