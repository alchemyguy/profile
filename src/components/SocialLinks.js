import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaMedium
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://facebook.com/1478984995549653" target="_blank">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Alchemy_Guy" target="_blank">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a
        href="https://plus.google.com/u/1/103915050081644671670"
        target="_blank"
      >
        <FaGooglePlus />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/alchemyguy" target="_blank">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/alchemyguy" target="_blank">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://medium.com/@alchemyguy" target="_blank">
        <FaMedium />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
