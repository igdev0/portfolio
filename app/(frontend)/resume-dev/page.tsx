"use client";
import Resume from '@/components/pdf-resume';
import dynamic from 'next/dynamic';
import {tw} from '@/components/pdf-resume/assets';
import contact from '@/content/contact';

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

export default function ResumePage() {
  return (
      <PDFViewer width="100%" style={tw("h-screen")}>
        <Resume location={contact.locations[0]}/>
      </PDFViewer>
  );
}