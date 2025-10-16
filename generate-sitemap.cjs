// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://www.ijmsabc.org/' });

// List your routes manually or dynamically
[
    '/',
    '/About',
    '/CallForPapers',
    '/AuthorGuidelines',
    '/SubmitManuscript',
].forEach((url) => sitemap.write({ url }));

sitemap.end();

streamToPromise(sitemap).then((data) =>
    createWriteStream('./public/sitemap.xml').write(data.toString())
);