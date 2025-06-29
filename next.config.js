/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  darkmode: true,
  images: {
    domains: ['imagizer.imageshack.com','i.ibb.co','res.cloudinary.com','i.imgur.com', 'images.unsplash.com', 'media.giphy.com', 'cdn-images-1.medium.com'],
  },
}

module.exports = nextConfig
