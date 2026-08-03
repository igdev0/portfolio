"use client";
import Resume from '@/components/resume';
import dynamic from 'next/dynamic';
import {tw} from '@/components/resume/assets';
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