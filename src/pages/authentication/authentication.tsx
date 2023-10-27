import React from "react";
import {SignIn} from "./singin";
import ruppLogo from "../../assets/rupp.jpg";

export const Authentication: React.FC = () => {
    return (
        <div className="md:flex md:flex-row dark:bg-gray-900 h-screen">
            <div
                className="w-[60%] bg-cover relative md:block hidden"
                style={{
                    backgroundImage: `url(${ruppLogo})`,
                }}
            >
            </div>
            <div className="flex-auto">
                <SignIn />
            </div>
        </div>
    )
}
