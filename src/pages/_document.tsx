import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://imagizer.imageshack.com/img924/9933/tyfLSE.png" />
        <meta name="title" content="Jimoh Sherifdeen - Full Stack Software Engineer" />
        <meta name="keywords" content="Jimoh Sherifdeen, Full Stack software engineer, web developer, software engineer, frontend developer, mobile developer" />
        <meta
          name="description"
          content="As a full-stack engineer, I'm passionate about translating ideas into robust, user-friendly products. I thrive on problem-solving, leveraging both front-end and back-end skills. Networking and continuous learning are integral to my journey, driving innovation and growth in the ever-evolving tech landscape."
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jimohsherifdeen.vercel.app/" />
        <meta
          property="og:title"
          content="Jimoh Sherifdeen - Full Stack Software Engineer"
        />
        <meta
          property="og:description"
          content="As a full-stack engineer, I'm passionate about translating ideas into robust, user-friendly products. I thrive on problem-solving, leveraging both front-end and back-end skills. Networking and continuous learning are integral to my journey, driving innovation and growth in the ever-evolving tech landscape."
        />
        <meta property="og:image" content="https://imagizer.imageshack.com/img923/2757/2RJKn5.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jimohsherifdeen.vercel.app" />
        <meta
          property="twitter:title"
          content="Jimoh Sherifdeen - Full Stack Software Engineer"
        />
        <meta
          property="twitter:description"
          content="As a full-stack engineer, I'm passionate about translating ideas into robust, user-friendly products. I thrive on problem-solving, leveraging both front-end and back-end skills. Networking and continuous learning are integral to my journey, driving innovation and growth in the ever-evolving tech landscape."
        />
        <meta
          property="twitter:image"
          content="https://imagizer.imageshack.com/img923/2757/2RJKn5.png"
        />

        {/* JSON-LD Structured Data for AI Crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jimoh Sherifdeen",
              "jobTitle": "Full Stack Software Engineer",
              "description": "As a full-stack engineer, I'm passionate about translating ideas into robust, user-friendly products. I thrive on problem-solving, leveraging both front-end and back-end skills. Networking and continuous learning are integral to my journey, driving innovation and growth in the ever-evolving tech landscape.",
              "url": "https://jimohsherifdeen.vercel.app/",
              "image": "https://imagizer.imageshack.com/img923/2757/2RJKn5.png",
              "sameAs": [
                // Add your social media profiles here
                // "https://linkedin.com/in/your-profile",
                // "https://github.com/your-username",
                // "https://twitter.com/your-handle"
              ],
              "knowsAbout": [
                "Full Stack Development",
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "Mobile Development",
                "Software Engineering",
                "JavaScript",
                "React",
                "Node.js",
                "Laravel",
                "PHP",
                "MySQL"
                // Add more specific technologies you work with
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Software Engineer",
                "description": "Develops both frontend and backend applications, creating complete web and mobile solutions"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Kwara state polytechnic" // Replace with actual education
              },
              "workLocation": {
                "@type": "Place",
                "name": "Remote" 
              }
            })
          }}
        />

        {/* Additional Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jimoh Sherifdeen - Portfolio",
              "url": "https://jimohsherifdeen.vercel.app/",
              "description": "Full Stack Software Engineer portfolio showcasing web development projects and technical expertise",
              "author": {
                "@type": "Person",
                "name": "Jimoh Sherifdeen"
              },
              "inLanguage": "en-US",
              "copyrightYear": new Date().getFullYear(),
              "genre": "Portfolio"
            })
          }}
        />

        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Jimoh Sherifdeen - Software Development Services",
              "description": "Full stack software development services including web applications, mobile apps, and custom software solutions",
              "provider": {
                "@type": "Person",
                "name": "Jimoh Sherifdeen"
              },
              "areaServed": "Worldwide",
              "serviceType": "Software Development",
              "url": "https://jimohsherifdeen.vercel.app/",
              "offers": {
                "@type": "Offer",
                "description": "Custom software development solutions"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}