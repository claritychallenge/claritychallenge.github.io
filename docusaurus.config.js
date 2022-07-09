/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
    title: 'The Clarity Project',
    tagline: 'Organising machine learning challenges for hearing aid processing',
    url: 'https://claritychallenge.org/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'claritychallenge', // Usually your GitHub org/user name.
    projectName: 'claritychallenge.org', // Usually your repo name.
    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
        crossorigin: 'anonymous',
    }, "https://fonts.googleapis.com/icon?family=Material+Icons", ],
    plugins: [require.resolve('docusaurus-lunr-search'), './sitePlugin'],
    themeConfig: {
        navbar: {
            title: 'Clarity',
            hideOnScroll: true,
            logo: {
                alt: 'Clarity Logo',
                src: 'img/logo.png',
            },
            items: [

                {
                    type: 'dropdown',
                    label: 'CEC2 Shortcuts',
                    position: 'left',
                    items: [{
                            type: 'doc',
                            docId: 'cec2/cec2_intro',
                            label: 'I want to learn more sbout CEC2...',
                        },
                        {
                            type: 'doc',
                            docId: 'cec2/cec2_download',
                            label: 'I want to download the data...',
                        },
                        {
                            href: 'https://github.com/claritychallenge/clarity',
                            label: 'I want to see the code on GitHub...',
                        },
                        {
                            type: 'doc',
                            docId: 'cec2/taking_part/cec2_registration',
                            label: 'I want to register a team...',
                        },
                        {
                            type: 'doc',
                            docId: 'cec2/taking_part/cec2_submission',
                            label: 'I want to submit results...',
                        },

                    ]
                },




                {
                    type: 'dropdown',
                    label: 'Workshops',
                    position: 'right',
                    items: [{
                            href: 'https://claritychallenge.github.io/clarity2022-workshop/',
                            label: 'Clarity 2022',
                        }, {
                            href: 'https://claritychallenge.github.io/clarity2021-workshop/',
                            label: 'Clarity 2021',
                        }

                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Challenges',
                    position: 'right',
                    items: [{
                        type: 'doc',
                        docId: 'cec2/cec2_intro',
                        label: 'CEC2 (current)',
                    }, {
                        type: 'doc',
                        docId: 'cpc1/cpc1_intro',
                        label: 'CPC1',
                    }, {
                        type: 'doc',
                        docId: 'cec1/cec1_intro',
                        label: 'CEC1',
                    }, ]
                },

                {
                    type: 'dropdown',
                    label: 'Software',
                    position: 'right',
                    items: [{
                        to: 'tutorials',
                        label: 'Tutorials',
                    }, {
                        href: 'https://github.com/claritychallenge/clarity',
                        label: 'GitHub',
                    }, ]
                },

                {
                    to: '/about/',
                    label: 'About Us',
                    position: 'right'
                }, {
                    to: '/blog/',
                    label: 'Blog',
                    position: 'right'
                },

            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'CEC2 Documentation',
                        to: '/docs/cec2/cec2_intro/',
                    }, {
                        label: 'CPC1 Documentation',
                        to: '/docs/cpc1/cpc1_intro/',
                    }, {
                        label: 'CEC1 Documentation',
                        to: '/docs/cec1/cec1_intro/',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'The Clarity Project',
                            href: 'http://claritychallenge.org',
                        },
                        {
                            label: 'Clarity Google Group',
                            href: 'https://groups.google.com/g/clarity-challenge',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Challenge Updates',
                            to: '/blog/',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/claritychallenge/clarity',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} The Clarity Team. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                googleAnalytics: {
                    trackingID: 'UA-198878187-1',
                    // Optional fields.
                    anonymizeIP: true, // Should IPs be anonymized?
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    remarkPlugins: [math],
                    rehypePlugins: [
                        [katex, {
                            strict: false
                        }]
                    ],
                    // Please change this to your repo.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    blogTitle: 'Clarity Blog',
                    blogDescription: 'News and updates about our Challenges and Workshops',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'Recent posts',
                    blogSidebarCount: 10,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};