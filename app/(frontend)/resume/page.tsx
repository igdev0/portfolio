"use client";
import Resume, {tw} from '@/components/resume';
import {PDFViewer} from '@react-pdf/renderer';

export default function ResumePage() {
  return (
      <PDFViewer width="100%" style={tw("h-screen")}>
        <Resume/>
      </PDFViewer>
  );
}