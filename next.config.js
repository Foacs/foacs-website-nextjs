const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  images: {
    domains: ["opensource.org", "www.tailwind-kit.com"],
  },
});
// module.exports = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ["fr"],
//     defaultLocale: "fr",
//   },
//   images: {
//     domains: ["opensource.org", "www.tailwind-kit.com"],
//   },
// };
