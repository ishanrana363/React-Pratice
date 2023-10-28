import { FaFacebookMessenger } from "react-icons/fa6";
import { FaFacebookF } from 'react-icons/fa';
import { HiArrowDown } from "react-icons/hi2";
import "../css/style.css"
const Icon = () => {
    return (
        <div>
            <span>
                <FaFacebookMessenger className="icon" />
            </span>
            <span>
                <FaFacebookF className="icon" />
            </span>
            <span>
                <HiArrowDown className="icon" />
            </span>
        </div>
    );
};

export default Icon;