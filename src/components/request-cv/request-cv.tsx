import {RequestCvWrapper} from "./style";
import Overlay from "../overlay/overlay";
import {REQUEST_CV_ID} from '../../constants';
import CloseOverlay from "../overlay/close-overlay";
import {Content} from "../overlay/style";

export default function RequestCv() {
    return (
        <Overlay id={REQUEST_CV_ID}>
            <RequestCvWrapper>
                <CloseOverlay/>
                <Content>
                    <h2>Please fill in your email below.</h2>
                    <p>
                        This is an automated process
                    </p>
                </Content>
            </RequestCvWrapper>
        </Overlay>
    )
}
