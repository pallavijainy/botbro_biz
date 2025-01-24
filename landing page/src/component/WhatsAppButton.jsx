import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9755415107"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-5 bottom-5 z-50"
    >
        <IoLogoWhatsapp color='green' className="w-10 h-10"/>
    
    </a>
  );
};

export default WhatsAppButton;
