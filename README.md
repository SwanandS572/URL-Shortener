# ZapLink - Modern URL Shortener

A fast, reliable, and scalable URL shortener service built with Next.js 15 and MongoDB. Create short, memorable links for any URL with a clean, user-friendly interface.

## 🌟 Features

- **Instant URL Shortening**: Quickly convert long URLs into short, shareable links
- **Custom Aliases**: Create custom short URLs with your preferred alias
- **Real-time Analytics**: Track click-through rates and traffic sources (coming soon)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Secure**: Built with modern security best practices
- **Light/Dark Mode**: Automatic theme switching based on system preferences

## 🛠️ Tech Stack

- **Frontend**: 
  - Next.js 15 (App Router)
  - React 19
  - Tailwind CSS
  - TypeScript (optional)

- **Backend**:
  - Next.js API Routes
  - MongoDB (Database)
  - Mongoose (ODM)

- **Deployment**:
  - Vercel (Frontend)
  - MongoDB Atlas (Database)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zaplink.git
   cd zaplink
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
zaplink/
├── app/                     # App router pages and API routes
│   ├── api/                 # API routes
│   ├── [shorturl]/          # Dynamic route for redirecting short URLs
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/              # Reusable components
│   └── Navbar.js            # Navigation component
├── lib/                     # Utility functions
├── public/                  # Static files
│   └── images/              # Image assets
├── .env.local               # Environment variables
├── package.json
└── README.md
```

## 🔄 How It Works

1. **URL Shortening**
   - User enters a long URL (and optional custom alias) on the homepage
   - System generates a unique short code
   - URL mapping is stored in MongoDB
   - Short URL is returned to the user

2. **Redirection**
   - User visits a short URL (e.g., `zapl.ink/abc123`)
   - System looks up the original URL in the database
   - User is redirected to the original URL

3. **Analytics** (Future Implementation)
   - Track number of clicks
   - Record referrer information
   - Geographic location tracking

## 🌐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
# Optional:
# ANALYTICS_ENABLED=true
# GOOGLE_ANALYTICS_ID=your_ga_id
```

## 📸 Screenshots

*Add your application screenshots here*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Inspired by popular URL shorteners like Bit.ly and TinyURL
- Built with Next.js and MongoDB
- Icons from [Heroicons](https://heroicons.com/)

---

Made with ❤️ and Next.js
