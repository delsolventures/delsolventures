module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // target: "serverless",

  images: {
    domains: ["storageapi.fleek.co"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
