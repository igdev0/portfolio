import {View, Text} from "@react-pdf/renderer";
import {tw} from "@/components/resume/assets";
import resume from "@/content/resume";
import ExperienceRecord from "@/components/resume/experience-record";

export default function ResumeExperience() {
    return (
        <>
            <Text style={tw("text-2xl leading-0 mb-3 text-gray-900 uppercase font-bold")}>
                Work Experience
            </Text>
            <View style={tw("flex flex-row gap-2 ml-6")}>
                <View style={tw("h-full rounded-sm border-l-2 border-dashed border-gray-200")}>
                </View>
                <View style={tw("flex")}>
                    {
                        resume.experience.map((item, index) => (
                            <ExperienceRecord {...item} key={index}/>
                        ))
                    }
                </View>
            </View>
        </>
    )
}