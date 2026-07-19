// Central shop configuration. Swap the WhatsApp number and address details here
// when the real ones are ready — everything else reads from this file.

export const site = {
  name: "Creative Computer",

  // WhatsApp in international format, digits only.
  whatsapp: "6285177123804",
  phoneDisplay: "+62 851-7712-3804",
  email: "halo@creativecomputer.id",

  address: {
    street: "Jl. Contoh Alamat No. 123",
    area: "Ruko Sentra Komputer, Blok A",
    city: "Jakarta",
    postal: "12345",
    // Google Maps embed query — replace with the real place once available.
    mapsQuery: "Jakarta Computer Store",
    mapsLink: "https://maps.google.com/?q=Jakarta",
  },

  // Opening hours, 24h. Sunday closed.
  hours: [
    { dayId: "Senin – Jumat", dayEn: "Mon – Fri", open: "09:00", close: "20:00" },
    { dayId: "Sabtu", dayEn: "Saturday", open: "09:00", close: "18:00" },
    { dayId: "Minggu", dayEn: "Sunday", open: null, close: null },
  ],

  socials: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    facebook: "https://facebook.com/",
  },
} as const;
