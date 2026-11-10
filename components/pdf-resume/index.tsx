import {Document, Font, Page, View} from "@react-pdf/renderer";
import {RefObject} from 'react';
import {tw} from '@/components/pdf-resume/assets';
import useAssets from '@/components/pdf-resume/use-assets';
import ResumeAvatar from "@/components/pdf-resume/avatar";
import ResumeContact from "@/components/pdf-resume/contact";
import ResumeIntro from "@/components/pdf-resume/intro";
import ResumeExperience from "@/components/pdf-resume/experience";

// Keep words intact when they wrap to another line in the PDF.
Font.registerHyphenationCallback((word) => [word]);

interface ResumeProps {
  location: string;
  ref?: RefObject<Document>
}

export default function Resume(props: ResumeProps) {
  const assets = useAssets();
  return (
      <Document title="IGDev-Resume" subject="IGDev" creator="IGDev" author="Ianos G Dorultan">
        <Page size="A4" style={tw("flex flex-row gap-2")}>
          <View>
            <ResumeAvatar corner={assets!.corner} me={assets!.me}/>
            <ResumeContact location={props.location}/>
          </View>
          <View style={tw("flex-1 mr-3")}>
            <ResumeIntro/>
            <ResumeExperience/>
          </View>
        </Page>
      </Document>
  );
}
