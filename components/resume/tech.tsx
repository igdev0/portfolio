import {tw} from "@/components/resume/assets";
import {View, Text, Image} from "@react-pdf/renderer";
import resume from "@/content/resume";
import {iconMap} from "@/components/resume/vars";
import useAssets from "@/components/resume/use-assets";

const linkImageStyle = tw("w-[15px] rounded-sm");

export default function ResumeTech() {
    const assets = useAssets();
    return (
        <View style={tw('mt-0')}>
            <Text style={tw('text-2xl text-gray-900 leading-0 my-2 font-bold uppercase')}>Tech Stack</Text>
            {
                Object.entries(resume.tech).map(([key, value]) => (
                    <View wrap={false} break={false} style={tw('mb-2')} key={key}>
                        <View style={tw('flex flex-row gap-3 mb-1.5 items-center')}>
                            <Image style={linkImageStyle} src={assets[iconMap[key as keyof object]]}/>
                            <Text style={tw("text-[13px] font-bold text-gray-900")}>{key}</Text>
                        </View>
                        <Text
                            style={tw("text-[10px] w-[200px] text-gray-900")}> {Object.keys(value.tabs).join(", ")}</Text>
                    </View>
                ))
            }
        </View>
    )
}