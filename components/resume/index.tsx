import {Document, Image, Link, Page, Text, View} from "@react-pdf/renderer";
import contact from '@/content/contact';
import resume from '@/content/resume';
import moment from 'moment';
import {RefObject} from 'react';
import {tw} from '@/components/resume/assets';
import useAssets from '@/components/resume/use-assets';

const iconMap = {
  "Languages": "book",
  "Frontend": "code",
  "Testing": "test-tube-diagonal",
  "Mobile": "tablet-smartphone",
  "Backend": "server",
  "Databases": "database",
  "Blockchain": "boxes",
  "Tools": "wrench",
  "Platforms": "git-branch",
  "DevOps": "blocks",
  "API Integration": "network",
};

const linkStyle = tw("flex flex-row items-center gap-3 h-[20px] mb-2");
const linkTextStyle = tw('font-sans text-sm flex leading-0 text-gray-900');
const linkImageStyle = tw("w-[15px] rounded-sm");

const experienceItem = tw("flex flex-row items-center gap-2");

export default function Resume(props: { ref?: RefObject<Document> }) {
  const assets = useAssets();
  return (
      <Document title="IGDev-Resume" subject="IGDev" creator="IGDev" author="Ianos G Dorultan">
        <Page size="A4" style={tw("flex flex-row gap-2")}>
          <View>
            <View style={tw("self-center h-[175px] w-[175px] flex justify-center items-center relative")}>
              <View
                  style={tw("z-3 absolute w-[100px] h-[100px] bg-indigo-200 top-auto left-auto bottom-auto right-auto")}/>
              <Image style={tw("absolute bottom-2 right-2")} src={assets!.corner}/>
              <Image style={tw("absolute top-2 right-2 -rotate-90")} src={assets!.corner}/>
              <Image style={tw("absolute top-2 left-2 rotate-180")} src={assets.corner}/>
              <Image style={tw("absolute bottom-2 left-2 rotate-90")} src={assets.corner}/>
              <Image style={tw('z-1')} src={assets.me}/>
            </View>
            <View style={tw("bg-gray-100 h-full w-[220px] px-6 pt-3 gap-0")}>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets.phone}/>
                <Text style={linkTextStyle}>{contact.phone}</Text>
              </View>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets['at-sign']}/>
                <Text style={linkTextStyle}>{contact.email}</Text>
              </View>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets['map-pin']}/>
                <Text style={linkTextStyle}>{contact.location}</Text>
              </View>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets.globe}/>
                <Link href={contact.websiteUrl} style={linkTextStyle}>{new URL(contact.websiteUrl).hostname}</Link>
              </View>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets.github}/>
                <Link href={contact.github}
                      style={linkTextStyle}>{new URL(contact.github).pathname.substring(1)}</Link>
              </View>
              <View style={tw('mt-0')}>
                <Text style={tw('text-2xl text-gray-900 leading-0 my-3 font-bold uppercase')}>Tech Stack</Text>
                {
                  Object.entries(resume.tech).map(([key, value]) => (
                      <View wrap={false} break={false} style={tw('mb-2')} key={key}>
                        <View style={tw('flex flex-row gap-3 mb-1.5 items-center')}>
                          <Image style={linkImageStyle} src={assets[iconMap[key as keyof object]]}/>
                          <Text style={tw("text-[13px] font-bold text-gray-900")}>{key}</Text>
                        </View>
                        <Text
                            style={tw("text-sm w-[200px] text-gray-900")}> {Object.keys(value.tabs).join(", ")}</Text>
                      </View>
                  ))
                }
              </View>
              <View>
                <Text style={tw("text-2xl leading-0 mb-2 mt-[14.1px] text-gray-900 font-bold uppercase")}>
                  Languages
                </Text>
                {
                  resume.languages.map((lang, index) => {
                    return (
                        <View style={tw("flex flex-row items-center")} key={index}>
                          <Image style={linkImageStyle} src={assets['chevron-right']}/>
                          <Text style={tw("text-sm text-gray-900 leading-0")}>
                            {lang}
                          </Text>
                        </View>
                    );
                  })
                }
              </View>
            </View>
          </View>
          <View style={tw("flex-1 p-2 mr-3")}>
            <Text style={[tw("text-6xl leading-0 text-indigo-500 text-center mt-6 uppercase font-extrabold"), {
              fontFamily: "BarlowCondensed",
              letterSpacing: "3px"
            }]}>{resume.name}</Text>
            <Text style={tw("text-gray-700 mt-6 mb-6 text-[14px]")}>{resume.bio}</Text>
            <Text style={tw("text-2xl leading-0 mb-3 text-gray-900 uppercase font-bold")}>
              Work Experience
            </Text>
            <View style={tw("flex flex-row gap-2 ml-6")}>
              <View style={tw("h-full rounded-sm border-l-2 border-dashed border-gray-200")}>
              </View>
              <View style={tw("flex")}>
                {
                  resume.experience.map((item, index) => (
                      <View style={tw("flex relative flex-row justify-start w-full")} key={index}>
                        <View
                            key={index}
                            style={tw("absolute w-[32px] ml-[-23px] h-[32px] rounded-md flex justify-center items-center bg-indigo-500")}>
                          <Text style={tw("text-white font-bold text-[7px]")}>{item.brand}</Text>
                        </View>
                        <View style={tw("w-full pl-6")}>
                          <Text style={tw("text-xl leading-0")}>
                            {item.title}
                          </Text>

                          <View style={tw('flex flex-row gap-3 my-1')}>
                            <View style={experienceItem}>
                              <Image style={linkImageStyle} src={assets.building}/>
                              <Text style={linkTextStyle}>
                                {item.company}
                              </Text>
                            </View>
                            <View style={experienceItem}>
                              <Image style={linkImageStyle} src={assets.calendar}/>
                              <Text style={linkTextStyle}>
                                {moment(new Date(item.startDate)).format("MMM YYYY")}
                              </Text>
                              <Image style={linkImageStyle} src={assets['arrow-right']}/>
                              <Text style={linkTextStyle}>
                                {item.endDate ? moment(new Date(item.endDate)).format("MMM YYYY") : 'Now'}
                              </Text>
                            </View>
                            <View style={experienceItem}>
                              <Image style={linkImageStyle} src={assets['map-pin']}/>
                              <Text style={linkTextStyle}>
                                {item.city}, {item.countryShort}
                              </Text>
                            </View>
                          </View>
                          <Text style={tw("text-sm mb-3 text-gray-900 pr-2 leading-5")}>
                            {item.summary}
                          </Text>
                          <Text style={tw("text-sm mb-3 text-gray-900 font-bold w-full")}>
                            {item.preTitle ?? "Achievements"}:
                          </Text>
                          {
                            item.contributions.map((contrib, idx) => (
                                <View style={tw("flex flex-row gap-2")} key={idx}>
                                  <Image style={linkImageStyle} src={assets.check}/>
                                  <Text key={contrib} style={tw(`text-sm mb-3 leading-5 w-full text-gray-800 pr-2`)}>
                                    {contrib}
                                  </Text>
                                </View>
                            ))
                          }
                        </View>
                      </View>
                  ))
                }
              </View>
            </View>
          </View>
        </Page>
      </Document>
  );
}