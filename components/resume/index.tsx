import {Document, Font, Image, Link, Page, Text, View} from "@react-pdf/renderer";
import {RefObject} from 'react';
import {tw} from '@/components/resume/assets';
import useAssets from '@/components/resume/use-assets';
import ResumeAvatar from "@/components/resume/avatar";
import ResumeContact from "@/components/resume/contact";
import ResumeIntro from "@/components/resume/intro";
import ResumeExperience from "@/components/resume/experience";

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
