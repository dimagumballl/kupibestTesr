exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {
          id: 1,
          name: 'Apple iPhone SE (64GB, Black)',
          description:
            '4.7-inch Retina HD display Water and dust resistant (1 meter for up to 30 minutes, IP67)',
          img_url: '/products/81hCytKTUTL.jpg',
          price: 250.52,
          rating: 4.5,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 2,
          name: 'Nintendo Switch with Neon Blue',
          description:
            '3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode 6.2-inch, multi-touch capacitive touch screen',
          img_url: '/products/61JnrafZ7zL._AC_SL1457_.jpg',
          price: 374.88,
          rating: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 3,
          name: 'Ring Fit Adventure - Nintendo Switch',
          description:
            'An adventure game that’s also a workout! Explore a huge fantasy world and defeat enemies using real-life exercise Jog, sprint, and high knee through dozens of levels',
          img_url: '/products/81V7L6auixL._SL1500_.jpg',
          price: 109.0,
          rating: 4.7,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 4,
          name: 'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080)',
          description:
            'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black',
          img_url: '/products/81QpkIctqPL._AC_SL1500_.jpg',
          price: 89.99,
          rating: 2.8,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 5,
          name: 'ASUS VivoBook 15 Thin and Light Laptop',
          description:
            'ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34',
          img_url: '/products/81fstJkUlaL._AC_SL1500_.jpg',
          price: 484.66,
          rating: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 6,
          name: 'AmazonBasics Wireless Computer Keyboard and Mouse Combo',
          description:
            'AmazonBasics Wireless Computer Keyboard and Mouse Combo - Full Size - US Layout (QWERTY)',
          img_url: '/products/71nmrSRQ3cL._AC_SL1500_.jpg',
          price: 39.49,
          rating: 3.5,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 7,
          name: 'Michael Kors Slim Runway Stainless Steel Watch',
          description:
            'Made in USA or Imported Michael Kors Slim Runway 44mm watch features a black dial with gold-tone stick indexes, three hand movement and antique gold plating stainless steel bracelet and case.',
          img_url: '/products/71xe2bDZ0nL._AC_UX679_.jpg',
          price: 188.67,
          rating: 4,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 8,
          name: 'Acer Aspire TC-885-UA92 Desktop',
          description:
            'Acer Aspire TC-885-UA92 Desktop, 9th Gen Intel Core i5-9400, 12GB DDR4, 512GB SSD, 8X DVD, 802.11AC Wifi, USB 3.1 Type C, Windows 10 Home, Black',
          img_url: '/products/61UgXsi%2BmcL._AC_SL1500_.jpg',
          price: 549.99,
          rating: 4,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 9,
          name: 'Acer Aspire 5 A515-55-56VK, 15.6" Full HD IPS Display',
          description:
            'Acer Aspire 5 A515-55-56VK, 15.6" Full HD IPS Display, 10th Gen Intel Core i5-1035G1, 8GB DDR4, 256GB NVMe SSD, WiFi 6, HD Webcam, Fingerprint Reader, Backlit Keyboard, Windows 10 Home',
          img_url: '/products/71S-XwHaGzL._AC_SL1500_.jpg',
          price: 699.0,
          rating: 5,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 10,
          name: 'Moto G Stylus - 128Gb',
          description:
            'Moto G Stylus | Unlocked | Made for US by Motorola | 4/128GB | 48MP Camera | 2020 | Indigo',
          img_url: '/products/61xQRmY%2BRRL._AC_SL1500_.jpg',
          price: 269.99,
          rating: 3.8,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 11,
          name: 'Xiaomi Redmi Note 8 Pro',
          description:
            'Xiaomi Redmi Note 8 Pro 64GB, 6GB RAM 6.53" LTE GSM 64MP Factory Unlocked Smartphone - Global Model (Mineral Grey)',
          img_url: '/products/81UgYuadkpL._AC_SL1500_.jpg',
          price: 208.99,
          rating: 5,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 12,
          name: 'Bluetooth Speakers, DOSS SoundBox Plus',
          description:
            'Bluetooth Speakers, DOSS SoundBox Plus Portable Wireless Bluetooth Speaker with 16W HD Sound and Deep Bass, Wireless Stereo Pairing, 20H Playtime, Wireless Speaker for Home, Outdoor, Travel - Black',
          img_url: '/products/71VqtdDUzsL._AC_SL1500_.jpg',
          price: 39.99,
          rating: 3.7,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
      ]);
    });
};
