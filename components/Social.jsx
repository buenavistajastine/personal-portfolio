import Link from "next/link";
import { FaGithub, FaFacebook} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: ''},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/jastine.buenavista.56?mibextid=ZbWKwL'},
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
{socials.map((item, index) => {
    return <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
    </Link>
})}
  </div>;
}

export default Social;