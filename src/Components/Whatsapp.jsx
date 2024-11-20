import React from 'react';

import { FloatingWhatsApp } from 'react-floating-whatsapp';
 

function WhatsApp() {

  return (
    <div>
      <FloatingWhatsApp  accountName="Sharon" avatar = '/logo1.png' statusMessage="online" phoneNumber="+917200800853" allowEsc
        allowClickAway
        notification
        notificationSound/> 
    </div>
  );
}

export default WhatsApp;
