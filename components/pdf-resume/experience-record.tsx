import {Text, View, Image} from "@react-pdf/renderer";
import moment from "moment";
import {tw} from "@/components/pdf-resume/assets";
import {ExperiencePinType} from "@/content/types";
import useAssets from "@/components/pdf-resume/use-assets";

const experienceItem = tw("flex flex-row items-center gap-2");

interface JobRecordProps extends ExperiencePinType {

}

const linkTextStyle = tw('font-sans text-[10px] flex leading-0 text-gray-900');
const linkImageStyle = tw("w-[15px] rounded-sm");

export default function ExperienceRecord(props: JobRecordProps) {
    const assets = useAssets();
    return (
        <View style={tw("flex relative flex-row justify-start w-full")}>
            <View
                style={tw("absolute w-[32px] ml-[-23px] h-[32px] rounded-md flex justify-center items-center bg-indigo-500")}>
                <Text style={tw("text-white font-bold text-[7px]")}>{props.brand}</Text>
            </View>
            <View style={tw("w-full pl-6")}>
                <Text style={tw("text-xl leading-0")}>
                    {props.title}
                </Text>

                <View style={tw('flex flex-row gap-3 my-1')}>
                    <View style={experienceItem}>
                        <Image style={linkImageStyle} src={assets.building}/>
                        <Text style={linkTextStyle}>
                            {props.company}
                        </Text>
                    </View>
                    <View style={experienceItem}>
                        <Image style={linkImageStyle} src={assets.calendar}/>
                        <Text style={linkTextStyle}>
                            {moment(new Date(props.startDate)).format("MMM YYYY")}
                        </Text>
                        <Image style={linkImageStyle} src={assets['arrow-right']}/>
                        <Text style={linkTextStyle}>
                            {props.endDate ? moment(new Date(props.endDate)).format("MMM YYYY") : 'Now'}
                        </Text>
                    </View>
                    <View style={experienceItem}>
                        <Image style={linkImageStyle} src={assets['map-pin']}/>
                        <Text style={linkTextStyle}>
                            {props.city}, {props.countryShort}
                        </Text>
                    </View>
                </View>
                <Text style={tw("text-[10px] mb-2 text-gray-900 pr-2 leading-5")}>
                    {props.summary}
                </Text>
                {
                    !props.excludeContributionsFromResume && props.contributions.map((contrib, idx) => (
                        <View wrap={false} style={tw("flex flex-row gap-2")} key={idx}>
                            <Image style={linkImageStyle} src={assets.check}/>
                            <Text wrap={true} key={contrib}
                                  style={{...tw(`text-[10px] mb-2 leading-5 w-full text-gray-800 pr-2`)}}>
                                {contrib}
                            </Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}