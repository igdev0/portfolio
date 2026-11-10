import {Text} from "@react-pdf/renderer";
import {tw} from "@/components/pdf-resume/assets";
import resume from "@/content/resume";

export default function ResumeIntro() {
    return (
        <>
            <Text style={[tw("text-6xl leading-0 text-indigo-500 text-center uppercase font-extrabold"), {
                fontFamily: "BarlowCondensed",
                letterSpacing: "3px"
            }]}>{resume.name}</Text>
            <Text style={tw("text-gray-700 mt-2 mb-3 text-[12px] leading-5")}>{resume.bio}</Text>
        </>
    )
}