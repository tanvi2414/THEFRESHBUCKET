import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

  const manifestForPlugin={
      registerType: 'prompt',
      includeAssets:['favicon.ico',"apple-touch-icon.png","maskable.png"],
      manifest:{
             "name": "The Fresh Bucket",
  "short_name": "TFB",
          "theme_color": "#000000",
          "background_color": "#000000",
          "display": "standalone",
          "scope": "/",
          "start_url":"/",
        "icons": [
         {"src":"images/logo192.png",
           "sizes":"192x192",
           "type":"image/png"
        },
        {"src":"images/logo384.png",
        "sizes":"384x384",
        "type":"image/png"
     },
     {"src":"images/logo512.png",
       "sizes":"512x512",
        "type":"image/png"
     },
     {
      "src":"images/logo256",
      "sizes":"256x256",
      "type":"image/png"
     }
    ]
  },
};
export default defineConfig({plugins:[react(),VitePWA(manifestForPlugin)]});
