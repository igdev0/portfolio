"use client";
import {PDFDownloadLink} from '@react-pdf/renderer';
import Resume from '@/components/resume';
import {DownloadIcon} from 'lucide-react';

export default function PDFDownloadLinkC() {
  return (

      <PDFDownloadLink
          className="flex gap-3 active:opacity-80"
          document={<Resume/>}
          fileName="IGDev-Resume.pdf"
      >
        {({loading}) =>
        {
          return (
              <>
                <DownloadIcon/>
                {loading ? "Generating..." : "Download Resume"}
              </>
          )
        }

        }
      </PDFDownloadLink>
  );
}