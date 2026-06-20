"use client";
import dynamic from 'next/dynamic';
import Resume, {tw} from '@/components/resume';

const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then(m => m.PDFViewer),

    {ssr: false}
);


export default function ResumePage() {
  return (
      <PDFViewer width="100%" style={tw("h-screen")}>
        <Resume/>
      </PDFViewer>
  );
}