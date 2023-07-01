import { FC } from "react";

import { ImGithub, ImLinkedin, ImTelegram } from "react-icons/im";
import {
  FooterWrap,
  FooterText,
  SocialList,
  SocialLink,
  SocialIcon,
} from "./Footer.styled";

const Footer: FC = () => {
  return (
    <FooterWrap>
      <FooterText>Copyright &#169; all rights reserved. Contacts:</FooterText>
      <SocialList>
        <li>
          <SocialLink
            href="https://github.com/Bohdan100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon>
              <ImGithub />
            </SocialIcon>
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="https://www.linkedin.com/in/bohdan-orlovskiy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon>
              <ImLinkedin />
            </SocialIcon>
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="https://t.me/Bogdan_info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon>
              <ImTelegram />
            </SocialIcon>
          </SocialLink>
        </li>
      </SocialList>
    </FooterWrap>
  );
};

export default Footer;
