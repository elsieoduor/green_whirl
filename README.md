🌿 Green Whirl Website

Green Whirl is a fullstack web project built for a housing company that offers affordable homes in amazing locations, targeting married couples. The website is designed to spread brand awareness, improve search rankings, and provide users with an inviting and colorful experience.

The site emphasizes comfort and approachability, featuring the brand’s primary color orange across a warm and family-friendly interface.

✨ Features

Landing Page

Hero section with inviting imagery and strong CTA to call for more information.

Contact Us section with a contact form and direct call option.

Featured Homes grid with sample properties.

“Why Choose Us” section with trust-building highlights.

About Page

Story of Green Whirl and its mission to provide affordable homes.

Values: Comfort, affordability, family-first, and prime locations.

Shop Page

Browse available homes with a clean grid layout.

Filters: Location, price range, bedrooms.

Property cards with images, price, and quick info request.

Terms of Service Page

Legal and compliance information for transparency.

SEO Optimized

Semantic structure and meta tags.

Real estate schema markup.

Keyword-focused content for better search rankings.

Responsive Design

Fully optimized for mobile, tablet, and desktop.

🛠 Tech Stack

Frontend: Next.js
 + TypeScript

Styling: Tailwind CSS

Backend/Database: Supabase

Deployment: Vercel

Analytics: Vercel Analytics

📂 Project Structure
green-whirl/
│── public/              # Static assets (images, icons)
│── src/
│   ├── components/      # Reusable UI components
│   ├── pages/
│   │   ├── index.tsx    # Landing page
│   │   ├── about.tsx    # About page
│   │   ├── shop.tsx     # Shop page
│   │   └── terms.tsx    # Terms of Service
│   ├── styles/          # Global styles
│   ├── lib/             # Supabase client & utilities
│   └── hooks/           # Custom hooks
│── .env.local           # Environment variables
│── package.json
│── README.md

⚡ Getting Started
Prerequisites

Node.js (v18+)

npm or yarn

Supabase account

Installation

Clone the repository

git clone https://github.com/elsieoduor/green_whirl.git
cd green_whirl


Install dependencies

npm install
# or
yarn install


Set up environment variables
Create a .env.local file in the root and add:

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key


Run the development server

npm run dev
# or
yarn dev


Open http://localhost:3000
 to view in the browser.

🚀 Deployment

Deployed on Vercel for seamless CI/CD.

Push to main branch → triggers automatic deployment.

Environment variables managed via Vercel dashboard.

Live site: https://green-whirl.vercel.app

🎨 Design Guidelines

Primary Color: Orange (brand identity)

Secondary Colors: Warm neutrals (beige, cream, light gray)

Accent: Green (to reflect the brand name Green Whirl)

Typography:

Headings: Poppins (modern sans-serif)

Body: Merriweather (serif, warm tone)

📌 Roadmap

 Add property detail pages with image galleries.

 Implement advanced search filters.

 Add user accounts for saved homes & favorites.

 Expand SEO with a blog (home-buying tips).

📜 License

This project is licensed under the MIT License.

👩‍💻 Author
Elsie Oduor
GitHub: @elsieoduor
Portfolio: https://elsieoduor.vercel.app