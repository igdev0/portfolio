"use client";
import {Document, Font, Image, Link, Page, Text, View} from "@react-pdf/renderer";
import {createTw} from "react-pdf-tailwind";
import dynamic from 'next/dynamic';
import resume from '@/content/resume';
import contact from '@/content/contact';
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
  src: "/fonts/Inter/static/Inter_18pt-Regular.ttf",
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
const linkTextStyle = tw('font-sans text-sm flex text-white');
const linkImageStyle = tw("w-[20px]");

export default function ResumePage() {
  return (
      <PDFViewer width="100%" style={tw("h-screen")}>
        <Document>
          <Page size="A4" style={tw("flex flex-row gap-3")}>
            <View>
              <View style={tw("w-60 h-60 flex justify-center items-center relative")}>
                <View
                    style={tw("absolute w-[130px] h-[130px] bg-indigo-200 top-auto left-auto bottom-auto right-auto")}/>
                <Image src="/images/me.png"/>
              </View>
              <View style={tw("bg-indigo-500 h-full p-6 flex gap-1")}>
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
                  <Link href={contact.github} style={linkTextStyle}>{new URL(contact.github).pathname.substring(1)}</Link>
                </View>
                <View style={linkStyle}>
                  <Image style={linkImageStyle} src="/resume-icons/globe.svg"/>
                  <Link href={contact.websiteUrl} style={linkTextStyle}>{new URL(contact.websiteUrl).hostname}</Link>
                </View>
                <View style={tw('mt-3')}>
                  <Text style={tw('text-2xl text-white')}>Tech Stack</Text>
                </View>
              </View>
            </View>
            <View style={tw("flex-1")}>
              <Text style={[tw("text-6xl text-indigo-600 text-center mt-6 uppercase font-extrabold"), {
                fontFamily: "BarlowCondensed",
                letterSpacing: "3px"
              }]}>{resume.name}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
  );
}