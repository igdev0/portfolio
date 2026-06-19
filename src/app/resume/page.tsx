"use client";
import {Document, Font, Image, Link, Page, Text, View} from "@react-pdf/renderer";
import {createTw} from "react-pdf-tailwind";
import dynamic from 'next/dynamic';
import resume from '@/content/resume';
import contact from '@/content/contact';
import stack from '@/content/stack';
import moment from 'moment';
// Apply your own styles on top of Tailwind defaults
const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then(m => m.PDFViewer),

    {ssr: false}
);

const tw = createTw({
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

const linkStyle = tw("flex flex-row items-center gap-3");
const linkTextStyle = tw('font-sans text-sm flex leading-0 text-white font-semibold');
const linkImageStyle = tw("w-[15px]");

const iconMap = {
  "Languages": "book",
  "Frontend": "code",
  "Testing": "test-tube-diagonal",
  "Mobile": "tablet-smartphone",
  "Backend": "server",
  "Databases": "database",
  "Blockchain": "boxes",
  "Infra & DevOps": "blocks",
  "Tools": "wrench"
};

export default function ResumePage() {
  return (
      <PDFViewer width="100%" style={tw("h-screen")}>
        <Document title="IGDev-Resume" creator="IGDev" author="Ianos G Dorultan">
          <Page size="A4" style={tw("flex flex-row gap-2")}>
            <View>
              <View style={tw("w-full self-center h-[187px] flex justify-center items-center relative")}>
                <View
                    style={tw("absolute w-[130px] h-[130px] bg-indigo-200 top-auto left-auto bottom-auto right-auto")}/>
                <Image src="/images/me.png"/>
              </View>
              <View style={tw("bg-indigo-400 h-full px-6 pt-3")}>
                <View style={linkStyle}>
                  <Image style={linkImageStyle} src="/resume-icons/phone.svg"/>
                  <Link href={`tel:${contact.phone}`} style={linkTextStyle}>{contact.phone}</Link>
                </View>
                <View style={linkStyle}>
                  <Image style={linkImageStyle} src="/resume-icons/at-sign.svg"/>
                  <Link href={`mailto:${contact.email}`} style={linkTextStyle}>{contact.email}</Link>
                </View>
                <View style={linkStyle}>
                  <Image style={linkImageStyle} src="/resume-icons/github.svg"/>
                  <Link href={contact.github}
                        style={linkTextStyle}>{new URL(contact.github).pathname.substring(1)}</Link>
                </View>
                <View style={linkStyle}>
                  <Image style={linkImageStyle} src="/resume-icons/globe.svg"/>
                  <Link href={contact.websiteUrl} style={linkTextStyle}>{new URL(contact.websiteUrl).hostname}</Link>
                </View>
                <View style={tw('mt-0')}>
                  <Text style={tw('text-2xl text-white leading-0 my-3 font-bold uppercase')}>Tech Stack</Text>
                  {
                    Object.entries(stack.skills).map(([key, value]) => (
                        <View style={tw('mb-1')} key={key}>
                          <View style={tw('flex flex-row gap-3 mb-1.5 items-center')}>
                            <Image style={linkImageStyle} src={`/resume-icons/${iconMap[key as keyof object]}.svg`}/>
                            <Text style={tw("text-[13px] font-bold text-white")}>{key}</Text>
                          </View>
                          <Text
                              style={tw("text-sm w-[200px] text-white text-wrap")}> {Object.keys(value.tabs).join(", ")}</Text>
                        </View>
                    ))
                  }
                </View>
                <View>
                  <Text style={tw("text-2xl leading-0 mb-2 mt-[14.1px] text-white uppercase")}>
                    Languages
                  </Text>
                  {
                    resume.languages.map((lang) => {
                      return (
                          <Text style={tw("text-sm text-white leading-0")} key={lang}>
                            - {lang}
                          </Text>
                      );
                    })
                  }
                </View>
              </View>
            </View>
            <View style={tw("flex-1 p-2")}>
              <Text style={[tw("text-6xl leading-0 text-indigo-500 text-center mt-2 uppercase font-extrabold"), {
                fontFamily: "BarlowCondensed",
                letterSpacing: "3px"
              }]}>{resume.name}</Text>
              <Text style={tw("text-gray-700 mt-2 mb-4 text-[14px]")}>{resume.bio}</Text>
              <Text style={tw("text-2xl leading-0 mb-3 text-gray-900 uppercase")}>
                Work Experience
              </Text>
              <View style={tw("flex flex-row gap-2 ml-6")}>
                <View style={tw("h-full rounded-sm border-l-2 border-dashed border-gray-200")}>
                </View>
                <View style={tw("flex gap-3")}>
                  {
                    resume.experience.map((item, index) => (
                        <View style={tw("flex flex-row justify-start gap-3 w-full")} key={index}>
                          <View
                              style={tw("w-[32px] ml-[-23px] h-[32px] rounded-md flex justify-center items-center bg-indigo-500")}>
                            <Text style={tw("text-white text-[7px]")}>{item.brand}</Text>
                          </View>
                          <View style={tw("w-full")}>
                            <Text style={tw("text-xl leading-0")}>
                              {item.title}
                            </Text>

                            <View style={tw('mt-1.5 mb-1.5 w-full flex flex-row gap-2')}>
                              <View style={tw("flex flex-row gap-0")}>
                                <Image style={tw("h-[10px] m-0 ml-[-10px] mr-[-3px]")} src="/resume-icons/building.svg"/>
                                <Text style={tw("text-gray-900 text-[10px]")}>
                                  {item.company}
                                </Text>
                              </View>
                              <View style={tw("flex flex-row items-start")}>
                                <Image style={tw("h-[10px] m-0 mr-[-3px]")} src="/resume-icons/calendar.svg"/>
                                <Text style={tw("text-gray-900 text-[10px]")}>
                                  {moment(new Date(item.startDate)).format("MMM YYYY")}
                                </Text>
                                <Image style={tw("h-[10px] m-0 mr-[-4px]")} src="/resume-icons/arrow-right.svg"/>
                                <Text style={tw("text-gray-900 text-[10px]")}>
                                  {item.endDate ? moment(new Date(item.endDate)).format("MMM YYYY") : 'Now'}
                                </Text>
                              </View>
                              <View style={tw("flex flex-row gap-1")}>
                                <Image style={tw("h-[10px] m-0 mr-[-8px]")} src="/resume-icons/map-pin-black.svg"/>
                                <Text style={tw("text-gray-900 text-[10px]")}>
                                  {item.city}, {item.countryShort}
                                </Text>
                              </View>
                            </View>
                            <Text style={tw("text-[8px] mb-1 mt-1 text-gray-900 pr-2 leading-5")}>
                              {item.summary}
                            </Text>
                            <Text style={tw("text-[8px] mb-1 mt-1 text-gray-900 font-bold w-full")}>
                              Key Achievements:
                            </Text>
                            {
                              item.contributions.map((contrib) => (
                                  <Text key={contrib} style={tw("text-[8px] mb-1 leading-5 w-full text-gray-800 pr-2")}>
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
      </PDFViewer>
  );
}