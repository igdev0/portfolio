import {View, Image} from "@react-pdf/renderer";
import {tw} from "@/components/pdf-resume/assets";

export interface ResumeAvatarProps {
    corner: string;
    me: string;
}
export default function ResumeAvatar(props: ResumeAvatarProps) {
    const {corner, me} = props;
    return (
        <View style={tw("self-center h-[175px] w-[175px] flex justify-center items-center relative")}>
            <View
                style={tw("z-3 absolute w-[100px] h-[100px] bg-indigo-200 top-auto left-auto bottom-auto right-auto")}/>
            <Image style={tw("absolute bottom-2 right-2")} src={corner}/>
            <Image style={tw("absolute top-2 right-2 -rotate-90")} src={corner}/>
            <Image style={tw("absolute top-2 left-2 rotate-180")} src={corner}/>
            <Image style={tw("absolute bottom-2 left-2 rotate-90")} src={corner}/>
            <Image style={tw('z-1')} src={me}/>
        </View>
    )
}