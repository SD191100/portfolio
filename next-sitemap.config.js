/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://shivam.cc",
    generateRobotsTxt: true,           // ✅ Also generates robots.txt automatically
    generateIndexSitemap: false,       // Set to true for multi-sitemaps
    changefreq: "monthly",
    priority: 0.7,
    sitemapSize: 5000,
}