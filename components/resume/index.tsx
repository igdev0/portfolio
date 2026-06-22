import {createTw} from 'react-pdf-tailwind';
import {Document, Font, Image, Link, Page, Text, View} from "@react-pdf/renderer";
import contact from '@/content/contact';
import resume from '@/content/resume';
import moment from 'moment';
import {RefObject} from 'react';


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
export const tw = createTw({
  fontFamily: {
    sans: ["Inter"],
  },
  colors: {
    accent: 'oklch(58.5% 0.233 277.117)',
  },
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
  },
});

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "/fonts/Inter/static/Inter_18pt-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/Inter/static/Inter_18pt-Bold.ttf",
      fontWeight: "bold",
    }
  ],

});

Font.register({
  family: "BarlowCondensed",
  body: {
    fontSize: '10px'
  },
  fonts: [
    {

      src: "/fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf",
      fontWeight: 700,
    },

  ],
});

const linkStyle = tw("flex flex-row items-center gap-3 h-[20px]");
const linkTextStyle = tw('font-sans text-sm flex leading-0 text-gray-900');
const linkImageStyle = tw("w-[15px]");

const experienceItem = tw("flex flex-row items-center gap-2");

export default function Resume(props: {ref?: RefObject<Document>}) {
  return (
      <Document ref={props.ref} title="IGDev-Resume" subject="IGDev" creator="IGDev" author="Ianos G Dorultan">
        <Page size="A4" style={tw("flex flex-row gap-2")}>
          <View>
            <View style={tw("self-center h-[175px] w-[175px] flex justify-center items-center relative")}>
              <View
                  style={tw("z-3 absolute w-[100px] h-[100px] bg-indigo-200 top-auto left-auto bottom-auto right-auto")}/>
              <Image style={tw("absolute bottom-2 right-2")} src="/resume-icons/corner.svg"/>
              <Image style={tw("absolute top-2 right-2 -rotate-90")} src="/resume-icons/corner.svg"/>
              <Image style={tw("absolute top-2 left-2 rotate-180")} src="/resume-icons/corner.svg"/>
              <Image style={tw("absolute bottom-2 left-2 rotate-90")} src="/resume-icons/corner.svg"/>
              <Image style={tw('z-1')} src="/images/me.png"/>
            </View>
            <View style={tw("bg-gray-100 h-full w-[220px] px-6 pt-3 gap-0")}>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src="/resume-icons/globe.svg"/>
                <Link href={contact.websiteUrl} style={linkTextStyle}>{new URL(contact.websiteUrl).hostname}</Link>
              </View>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src="/resume-icons/phone.svg"/>
                <Link href={`tel:${contact.phone}`} style={linkTextStyle}>{contact.phone}</Link>
              </View>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src="/resume-icons/at-sign.svg"/>
                <Link href={`mailto:${contact.email}`} style={linkTextStyle}>{contact.email}</Link>
              </View>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src="/resume-icons/map-pin.svg"/>
                <Text style={linkTextStyle}>{contact.location}</Text>
              </View>
              <View style={linkStyle}>
                <Image style={linkImageStyle} src="/resume-icons/github.svg"/>
                <Link href={contact.github}
                      style={linkTextStyle}>{new URL(contact.github).pathname.substring(1)}</Link>
              </View>
              <View style={tw('mt-0')}>
                <Text style={tw('text-2xl text-gray-900 leading-0 my-3 font-bold uppercase')}>Tech Stack</Text>
                {
                  Object.entries(resume.tech).map(([key, value]) => (
                      <View style={tw('mb-2')} key={key}>
                        <View style={tw('flex flex-row gap-3 mb-1.5 items-center')}>
                          <Image style={linkImageStyle} src={`/resume-icons/${iconMap[key as keyof object]}.svg`}/>
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
                  resume.languages.map((lang) => {
                    return (
                        <Text style={tw("text-sm text-gray-900 leading-0")} key={lang}>
                          - {lang}
                        </Text>
                    );
                  })
                }
              </View>
            </View>
          </View>
          <View style={tw("flex-1 p-2")}>
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
              <View style={tw("flex gap-3 pr-3")}>
                {
                  resume.experience.map((item, index) => (
                      <View style={tw("flex flex-row justify-start gap-3 w-full")} key={index}>
                        <View
                            style={tw("w-[32px] ml-[-23px] h-[32px] rounded-md flex justify-center items-center bg-indigo-500")}>
                          <Text style={tw("text-white font-bold text-[7px]")}>{item.brand}</Text>
                        </View>
                        <View style={tw("w-full")}>
                          <Text style={tw("text-xl leading-0")}>
                            {item.title}
                          </Text>

                          <View style={tw('flex flex-row gap-3 my-1')}>
                            <View style={experienceItem}>
                              <Image style={linkImageStyle} src="/resume-icons/building.svg"/>
                              <Text style={linkTextStyle}>
                                {item.company}
                              </Text>
                            </View>
                            <View style={experienceItem}>
                              <Image style={linkImageStyle} src="/resume-icons/calendar.svg"/>
                              <Text style={linkTextStyle}>
                                {moment(new Date(item.startDate)).format("MMM YYYY")}
                              </Text>
                              <Image style={linkImageStyle} src="/resume-icons/arrow-right.svg"/>
                              <Text style={linkTextStyle}>
                                {item.endDate ? moment(new Date(item.endDate)).format("MMM YYYY") : 'Now'}
                              </Text>
                            </View>
                            <View style={experienceItem}>
                              <Image style={linkImageStyle} src="/resume-icons/map-pin-black.svg"/>
                              <Text style={linkTextStyle}>
                                {item.city}, {item.countryShort}
                              </Text>
                            </View>
                          </View>
                          <Text style={tw("text-sm mb-3 text-gray-900 pr-2 leading-5")}>
                            {item.summary}
                          </Text>
                          <Text style={tw("text-sm mb-3 text-gray-900 font-bold w-full")}>
                            Key Achievements:
                          </Text>
                          {
                            item.contributions.map((contrib, idx) => (
                                <Text key={contrib} style={tw(`text-sm mb-2 leading-5 w-full text-gray-800 pr-2 ${index === resume.experience.length - 2 && idx === item.contributions.length - 1? "mb-[30px]" : ""}`)}>
                                  - {contrib}
                                </Text>
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
  )
}