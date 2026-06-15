import Container from '@/components/container';
import Statement from '@/components/statement';
import {SkillsType} from '@/content/types';
import Stack from '@/components/stack';
import "./index.css";
import {Tabs} from '@base-ui/react/tabs';
import {Fragment} from 'react';
import Icon from '@/components/icons';
import Comment from '@/components/comment';

export default function Skills(props: SkillsType) {
  const {title, comment, skills, statement} = props;
  const total = Object.keys(skills).length;
  return (
      <Container id="skills">
        <div className="pt-40">
          <Comment>{comment}</Comment>
          <h2 className="text-4xl font-bold">
            {title}
          </h2>
          <Statement className="mb-16">
            {statement}
          </Statement>
        </div>
        <Stack.Root>
          <div className="stack-layout">
            <div className="stack-controllers">
              {
                Object.entries(skills).map(([skill, entry], index) => (
                    <Stack.Trigger key={skill} id={index} icon={entry.icon}>
                      {skill}
                    </Stack.Trigger>
                ))
              }
            </div>
            <Stack.Overlay/>
            <Stack.Cards className="stack-cards">
              {
                Object.entries(skills).map(([skill, entry], index) => (
                    <Stack.Card className="stack-card" max={total} key={skill + index} id={index}>
                      <div className="stack-card-inner">
                        <div className="flex-group gap-4 mb-6">
                          <Icon name={entry.icon}/>
                          <h3 className="font-bold">{skill}</h3>
                        </div>
                        <Tabs.Root>
                          <Tabs.List className="tabs-header">
                            {
                              Object.keys(entry.tabs).map((key) => (
                                  <Fragment key={`tab-header-${key}`}>
                                    <Tabs.Tab className="tab-control" nativeButton value={key}>
                                      {key}
                                    </Tabs.Tab>
                                    <Tabs.Indicator/>
                                  </Fragment>
                              ))
                            }
                          </Tabs.List>
                          {
                            Object.entries(entry.tabs).map(([key, value]) => (
                                <Tabs.Panel key={key} value={key}>
                                  <Statement>{value.statement}</Statement>
                                </Tabs.Panel>
                            ))
                          }
                        </Tabs.Root>
                      </div>
                    </Stack.Card>
                ))
              }
            </Stack.Cards>
          </div>
        </Stack.Root>
      </Container>
  );
}