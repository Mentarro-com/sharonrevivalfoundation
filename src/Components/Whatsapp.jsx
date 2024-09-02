import React from 'react';

import { FloatingWhatsApp } from 'react-floating-whatsapp';
 

function WhatsApp() {

  return (
    <div>
      <FloatingWhatsApp  accountName="Mr Pandian" statusMessage="online" phoneNumber="+919789053645" allowEsc
        allowClickAway
        notification
        notificationSound/> 
    </div>
  );
}

export default WhatsApp;
