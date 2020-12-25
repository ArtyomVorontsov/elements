import { colorProfiles } from "../components/Styles/styleProfile.js"

const chooseColorProfile = (color, type) => {
    let colorProfile = colorProfiles.find((profile) => {
        if (color === profile.name) {
            return profile
        }
    })

    if(type === "badge"){
        colorProfile = {
            ...colorProfile,
            backgroundColor: colorProfile.color,
            border: "none",
            color: "white"
        }
    }
    
    return colorProfile
}

export default chooseColorProfile;