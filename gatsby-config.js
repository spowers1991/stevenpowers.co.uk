module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-postcss`,
        {
                resolve: 'gatsby-source-storyblok',
                options: {
                accessToken: 'MlwQqaQrRZr9dYXNAHaQAgtt',
                homeSlug: "home",
                version: process.env.NODE_ENV === "production" ? "published" : "draft",
                // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
            }
        }
    ]
}