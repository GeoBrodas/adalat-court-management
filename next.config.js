const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
  images: {
    domains: ['media-exp1.licdn.com', 'instagram.fpnq10-1.fna.fbcdn.net'],
  },
});
