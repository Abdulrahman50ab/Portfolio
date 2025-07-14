# Abdul Rahman - Portfolio Website

A modern, fully responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases web development projects across multiple technologies including Frontend, C++, Java, and Full Stack development.

![Portfolio Preview](https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800)

## 🚀 Features

### Core Functionality
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Navigation** - Seamless scrolling between sections with fixed header
- **Project Filtering** - Interactive category filters (All, Frontend, C++, Java, Full Stack)
- **Contact Form** - Functional contact form with validation styling
- **Modern Animations** - Fade-in effects, hover animations, and smooth transitions

### Sections
- **Header** - Fixed navigation with logo, menu links, and profile picture
- **Hero** - Compelling introduction with call-to-action buttons
- **About** - Professional background and skill highlights
- **Projects** - Categorized project showcase with filtering
- **Skills** - Interactive skill bars with proficiency levels
- **Contact** - Contact form and information
- **Footer** - Social links and additional navigation

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** Lucide React
- **Build Tool:** Vite 5.4.2
- **Linting:** ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx           # Hero section with introduction
│   ├── About.tsx          # About section with highlights
│   ├── Projects.tsx       # Projects showcase with filtering
│   ├── Skills.tsx         # Skills grid with progress bars
│   ├── Contact.tsx        # Contact form and information
│   └── Footer.tsx         # Footer with social links
├── App.tsx                # Main app component
├── main.tsx              # App entry point
├── index.css             # Global styles and animations
└── vite-env.d.ts         # Vite type definitions
```

## 🎨 Design Features

### Color Palette
- **Primary:** Blue (#3B82F6)
- **Secondary:** Indigo (#6366F1)
- **Accent:** Purple (#8B5CF6)
- **Success:** Green (#10B981)
- **Warning:** Yellow (#F59E0B)
- **Error:** Red (#EF4444)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700
- **Line Heights:** 150% for body text, 120% for headings

### Spacing System
- **Base Unit:** 8px
- **Consistent spacing** throughout the design
- **Proper visual hierarchy** with intentional white space

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/abdul-rahman-portfolio.git
   cd abdul-rahman-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Projects Showcase

### Frontend Development
- **Riphah International University Frontend** - University website clone
- **To-Do Lists** - React-based task management app
- **Portfolio** - Personal portfolio website

### C++ Projects
- **Bank Management System with DSA** - Console banking system
- **Car Rental System** - Vehicle booking management
- **Easy Khata System** - Digital ledger for businesses

### Java Project
- **Bank Management System** - GUI-based banking application

### Full Stack Project
- **Gym-Fitness Management System** - MERN stack fitness app

## 🎨 Customization

### Updating Personal Information
1. **Contact Details** - Update in `src/components/Contact.tsx`
2. **Social Links** - Modify in `src/components/Footer.tsx`
3. **Profile Picture** - Replace image URL in `src/components/Header.tsx`
4. **About Content** - Edit in `src/components/About.tsx`

### Adding New Projects
1. Open `src/components/Projects.tsx`
2. Add new project object to the `projects` array
3. Include: title, description, image, technologies, category, and links

### Styling Changes
- **Colors** - Update Tailwind classes throughout components
- **Fonts** - Modify Google Fonts import in `src/index.css`
- **Animations** - Customize keyframes in `src/index.css`

## 🔧 Configuration Files

- **TypeScript** - `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Tailwind CSS** - `tailwind.config.js`
- **PostCSS** - `postcss.config.js`
- **Vite** - `vite.config.ts`
- **ESLint** - `eslint.config.js`

## 📱 Mobile Features

- **Hamburger Menu** - Collapsible navigation for mobile devices
- **Touch-Friendly** - Optimized button sizes and spacing
- **Fast Loading** - Optimized images and efficient code splitting
- **Smooth Scrolling** - Enhanced mobile scroll experience

## 🌟 Performance Optimizations

- **Lazy Loading** - Images load as needed
- **Code Splitting** - Efficient bundle management
- **Optimized Images** - Compressed images from Pexels
- **Minimal Dependencies** - Lightweight package selection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Abdul Rahman**
- Portfolio: [Live Demo](#)
- GitHub: [@abdul-rahman](https://github.com)
- LinkedIn: [Abdul Rahman](https://linkedin.com)
- Email: abdulrahman50abgmail.com

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide React** - For the beautiful icons
- **Pexels** - For the high-quality stock images
- **Google Fonts** - For the Inter font family

---

⭐ **Star this repository if you found it helpful!**
