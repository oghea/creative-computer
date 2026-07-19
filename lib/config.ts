// Central shop configuration. Swap the WhatsApp number and address details here
// when the real ones are ready — everything else reads from this file.

export const site = {
  name: "Creative Computer",

  // WhatsApp in international format, digits only.
  whatsapp: "6285177123804",
  phoneDisplay: "+62 851-7712-3804",

  address: {
    street: "Jl. Ahmad Yani No. 45",
    area: "Iringmulyo, Kec. Metro Timur",
    city: "Kota Metro, Lampung",
    postal: "34111",
    // Query used for the embedded map; the link opens the shared Maps pin.
    mapsQuery: "Jl. Ahmad Yani No.45, Iringmulyo, Metro Timur, Kota Metro, Lampung 34111",
    mapsLink: "https://maps.app.goo.gl/Cxw94s9fH7hzyQAb9",
  },

  // Opening hours, 24h. Open every day.
  hours: [
    { dayId: "Setiap hari", dayEn: "Every day", open: "09:00", close: "17:00" },
  ],

  socials: {
    instagram: "https://www.instagram.com/creative.komputer",
  },
} as const;
