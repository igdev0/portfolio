import Validate from 'validate'
const requestCv = new Validate({
    email: {
        type: String,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        required: true,
        message: {
            match: "This field has to be an email address.",
            required: "This field is required",
        }
    },
    privacy_accepted: {
        type: Boolean,
        required: true,
    }
})

export default requestCv;
