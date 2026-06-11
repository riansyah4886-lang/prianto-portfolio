# 🎨 Prianto's Portfolio

Portfolio website profesional dengan animasi 3D, design modern, dan dark theme ungu.

## ✨ Fitur Utama

- **🎯 Responsive Design** - Sempurna di semua device (mobile, tablet, desktop)
- **🌙 Dark Theme** - Design gelap dengan aksen ungu yang menarik
- **✨ Smooth Animations** - Animasi 3D dan transisi yang halus
- **📱 Mobile Optimized** - Navigasi mobile-friendly dengan hamburger menu
- **⚡ Fast Performance** - Optimized untuk kecepatan loading
- **🎨 Modern UI/UX** - Interface yang clean dan user-friendly

## 📋 Sections

1. **Navigation** - Navbar fixed dengan smooth scroll
2. **Hero Section** - Intro dengan foto profile dan CTA buttons
3. **About** - Tentang Prianto dengan statistik
4. **Projects** - Gallery project dengan hover effects
5. **Skills** - Skills showcase dengan progress bars
6. **Contact** - Contact form dan social media links
7. **Footer** - Footer dengan copyright

## 🛠️ Tech Stack

- HTML5
- CSS3 (dengan Flexbox & Grid)
- Vanilla JavaScript
- Font Awesome Icons
- No Framework/Dependencies

## 📁 Struktur File

```
prianto-portfolio/
├── index.html       # File HTML utama
├── styles.css       # Styling dan animasi
├── script.js        # JavaScript interaktif
├── README.md        # Dokumentasi
└── assets/
    └── prianto.jpg  # Foto profile
```

## 🚀 Cara Menggunakan

### 1. Setup Foto Profile
```bash
# Buat folder assets
mkdir assets

# Taruh foto Anda dengan nama "prianto.jpg" di folder assets
```

### 2. Update Data Pribadi
Edit `index.html` dan ganti:
- Nama
- Deskripsi/bio
- Social media links
- Project details
- Contact information

### 3. Update Warna (Opsional)
Buka `styles.css` dan edit CSS variables:
```css
:root {
    --primary-color: #8b5cf6;      /* Ubah warna utama */
    --secondary-color: #a78bfa;    /* Ubah warna sekunder */
    --dark-bg: #0f0f1e;            /* Ubah background */
    /* ... */
}
```

### 4. Jalankan di Browser
```bash
# Buka file di browser
open index.html
# atau klik kanan -> Open with Browser
```

## 📝 Customization

### Mengubah Project
Di section Projects, edit project cards:
```html
<div class="project-card">
    <div class="project-image">
        <img src="URL_FOTO" alt="Project Name">
        <div class="project-overlay">...</div>
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Description</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
    </div>
</div>
```

### Mengubah Skills
Edit skill cards dengan persentase sesuai keahlian Anda:
```html
<div class="progress" style="width: 95%"></div>
<span class="level-text">95%</span>
```

### Mengubah Social Links
Edit section contact dengan link Anda:
```html
<a href="YOUR_LINK" target="_blank">
    <i class="fab fa-icon"></i>
</a>
```

## 🎨 Color Palette

- **Primary Purple** - `#8b5cf6`
- **Secondary Purple** - `#a78bfa`
- **Dark Background** - `#0f0f1e`
- **Light Text** - `#e0e0e0`
- **Muted Text** - `#b0b0b0`

## ⚡ Performance Tips

1. **Optimize Images** - Gunakan format WebP untuk image lebih ringan
2. **Lazy Loading** - Images akan diload saat diperlukan
3. **Caching** - Browser caching sudah dioptimalkan
4. **Minify** - Minify CSS/JS untuk production

## 🔧 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## 📱 Responsive Breakpoints

- **Desktop** - 1200px+
- **Tablet** - 768px - 1199px
- **Mobile** - < 768px

## 🐛 Troubleshooting

### Foto tidak muncul
- Pastikan foto bernama `prianto.jpg`
- Letakkan di folder `assets/`
- Periksa path di `index.html`

### Animasi tidak smooth
- Update browser ke versi terbaru
- Disable extensions yang menggangu
- Clear cache browser

### Links tidak berfungsi
- Periksa URL social media Anda
- Pastikan format URL benar

## 📞 Contact

- **Email** - priantop985@gmail.com
- **GitHub** - github.com/riansyah4886-lang
- **LinkedIn** - linkedin.com/in/prianto
- **Twitter** - @Bradsherriff
- **Telegram** - @Selowbrok

## 📄 License

Free to use and modify

---

**Made with 💜 by Prianto**

Terakhir diupdate: 2026