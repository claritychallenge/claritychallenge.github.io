/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math');
const katex = require('rehype-katex');
const {
    MailRounded
} = require('@mui/icons-material');

module.exports = {
    title: 'The Clarity Project',
    tagline: 'Organising machine learning challenges for hearing aid processing',
    url: 'https://claritychallenge.github.io/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'claritychallenge', // Usually your GitHub org/user name.
    projectName: 'claritychallenge.github.io', // Usually your repo name.
    trailingSlash: false,
    deploymentBranch: "gh-pages",
    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
        crossorigin: 'anonymous',
    }, "https://fonts.googleapis.com/icon?family=Material+Icons", ],
    plugins: [
        [require.resolve('docusaurus-lunr-search'), {
            indexBaseUrl: true
        }], './sitePlugin', [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [{
                    to: '/',
                    from: '/clarity_CC_doc',
                }, ],
            },
        ], require.resolve("docusaurus-plugin-image-zoom")
    ],
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
                    label: 'Shortcuts',
                    position: 'left',
                    items: [{
                            type: 'doc',
                            docId: 'cpc2/cpc2_intro',
                            label: 'I want to learn more about the CPC2 challenge...',
                        },
                        {
                            type: 'doc',
                            docId: 'cpc2/taking_part/cpc2_download',
                            label: 'I want to download the data...',
                        },
                        {
                            href: 'https://github.com/claritychallenge/clarity',
                            label: 'I want to see the code on GitHub...',
                        },
                        {
                            type: 'doc',
                            docId: 'cpc2/taking_part/cpc2_registration',
                            label: 'I want to register a team...',
                        },
                        {
                            type: 'doc',
                            docId: 'cpc2/taking_part/cpc2_submission',
                            label: 'I want to submit results...',
                        },

                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Challenges',
                    position: 'right',
                    items: [{
                            type: 'doc',
                            docId: 'cpc2/cpc2_intro',
                            label: 'CPC2',
                        }, {
                            type: 'doc',
                            docId: 'icassp2023/icassp2023_intro',
                            label: 'ICASSP 2023 Grand Challenge',
                        },
                        {
                            type: 'doc',
                            docId: 'cec2/cec2_intro',
                            label: 'CEC2',
                        }, {
                            type: 'doc',
                            docId: 'cpc1/cpc1_intro',
                            label: 'CPC1',
                        }, {
                            type: 'doc',
                            docId: 'cec1/cec1_intro',
                            label: 'CEC1',
                        }, {
                            to: '/timeline',
                            label: 'Future Challenges',
                        },
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Workshops',
                    position: 'right',
                    items: [{
                            href: 'https://claritychallenge.github.io/clarity2023-workshop/',
                            label: 'Clarity 2023',
                        },
                        {
                            href: 'https://claritychallenge.github.io/clarity2022-CEC2-workshop/',
                            label: 'Clarity CEC2 2022, Dec',
                        }, {
                            href: 'https://claritychallenge.github.io/clarity2022-workshop/',
                            label: 'Clarity 2022, Jun',
                        }, {
                            href: 'https://claritychallenge.github.io/clarity2021-workshop/',
                            label: 'Clarity 2021',
                        }

                    ]
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
                    type: 'dropdown',
                    label: 'About Us',
                    position: 'right',
                    items: [{
                        to: '/about/',
                        label: 'About Us',
                    }, {
                        to: '/contact/',
                        label: 'Contact Us',

                    }, {
                        to: '/timeline',
                        label: 'Project timeline',
                    }, ]
                }, {
                    to: '/blog/',
                    label: 'Latest',
                    position: 'right'
                },

            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'CPC2 Documentation',
                        to: '/docs/cpc2/cpc2_intro/',
                    }, {
                        label: 'ICASSP 2023 Documentation',
                        to: '/docs/icassp2023/icassp2023_intro/',
                    }, {
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
                        {
                            label: 'Email Us',
                            href: 'mailto:claritychallengecontact@gmail.com'
                        }
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
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} The Clarity Team. Built with Docusaurus.`,
        },
        zoom: {
            selector: '.markdown img',
            config: {
                // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                background: {
                    light: 'rgb(255, 255, 255)',
                    dark: 'rgb(50, 50, 50)'
                }
            }
        }
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
                    remarkPlugins: [require('mdx-mermaid'), math],
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
                    blogTitle: 'Latest News',
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