import React from "react";
import s from  './ProfileInfo.module.css'



const ProfileInfo = (props) => {
    
    return (
        <div>
            <img  src='https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80' />
            <div className={s.descriptionBlock} >
                ava + desc
                <div>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;