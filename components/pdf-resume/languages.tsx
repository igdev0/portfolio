import {tw} from "@/components/pdf-resume/assets";
import {View, Text, Image} from "@react-pdf/renderer";
import resume from "@/content/resume";
import useAssets from "@/components/pdf-resume/use-assets";

const linkImageStyle = tw("w-[15px] rounded-sm");

export default function ResumeLanguages() {
    const assets = useAssets();
    return (

        <View>
            <Text style={tw("text-2xl pt-3 leading-0 mb-3 mt-[14.1px] text-gray-900 font-bold uppercase")}>
                Languages
            </Text>
            {
                resume.languages.map((lang, index) => {
                    return (
                        <View style={tw("flex flex-row items-center")} key={index}>
                            <Image style={linkImageStyle} src={assets['chevron-right']}/>
                            <Text style={tw("text-[10px] text-gray-900 leading-0")}>
                                {lang}
                            </Text>
                        </View>
                    );
                })
            }
        </View>
    )
}