
import {tw} from '@/components/resume/assets';
import {Link, View, Image, Text} from "@react-pdf/renderer";
import contact from "@/content/contact";
import ResumeTech from "@/components/resume/tech";
import ResumeLanguages from "@/components/resume/languages";
import useAssets from "@/components/resume/use-assets";

const linkStyle = tw("flex flex-row items-center gap-3 h-[20px] mb-2");
const linkTextStyle = tw('font-sans text-[10px] flex leading-0 text-gray-900');
const linkImageStyle = tw("w-[15px] rounded-sm");

export interface ResumeContactProps {
    location: string;
}
export default function ResumeContact(props: ResumeContactProps) {
    const assets = useAssets();
    return (

        <View style={tw("bg-gray-100 h-full w-[220px] px-6 pt-3 gap-0")}>
            <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets.phone}/>
                <Text style={linkTextStyle}>{contact.phone}</Text>
            </View>
            <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets['at-sign']}/>
                <Text style={linkTextStyle}>{contact.email}</Text>
            </View>
            <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets['map-pin']}/>
                <Text style={linkTextStyle}>{props.location}</Text>
            </View>
            <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets.globe}/>
                <Link href={contact.websiteUrl} style={linkTextStyle}>{new URL(contact.websiteUrl).hostname}</Link>
            </View>
            <View style={linkStyle}>
                <Image style={linkImageStyle} src={assets.github}/>
                <Link href={contact.github}
                      style={linkTextStyle}>{new URL(contact.github).pathname.substring(1)}</Link>
            </View>
            <ResumeTech/>
            <ResumeLanguages/>
        </View>
    )
}