/** @type {import('@docusaurus/types').DocusaurusConfig} */
//const math = require('remark-math');
//const katex = require('rehype-katex');
//const rehypeKatex = require('rehype-katex');
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
    title: 'The Clarity Project',
    tagline: 'Organising machine learning challenges for hearing aid processing',
    url: 'https://claritychallenge.github.io/',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'claritychallenge', // Usually your GitHub org/user name.
    projectName: 'claritychallenge.github.io', // Usually your repo name.
    trailingSlash: false,
    deploymentBranch: "gh-pages",
    markdown: {
        format: 'mdx',
        mermaid: true,
        mdx1Compat: {
          comments: false,
          admonitions: false,
          headingIds: false,
        },
    },
    themes: ['@docusaurus/theme-mermaid'],
    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
        crossorigin: 'anonymous',
    }, "https://fonts.googleapis.com/icon?family=Material+Icons",
        "/js-datatable/css.min/bootstrap-table.min.css",
        "/js-datatable/css.min/datatable.min.css",
        "/react-bootstrap-table2.min.css"
    ],
    scripts: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js',
            async: false,
        },
        {
            src: '/bootstrap/bootstrap.bundle.min.js',
            async: false,
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js@1.0.0/src/bibtex_js.min.js',
            async: false,
        }
    ],
    plugins: [
        [require.resolve('docusaurus-lunr-search'), {indexBaseUrl: true}],
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [{
                    to: '/',
                    from: '/clarity_CC_doc',
                }, ],
            },
        ],
        require.resolve('docusaurus-plugin-image-zoom')
    ],
    themeConfig: {
        announcementBar: {
            id: 'pre-anouncement-cpc3',
            content:
                '🔥🔥  The 3rd Clarity Prediction Challenge is launching March 17th 🔥🔥 <a href="/docs/cpc3/cpc3_intro">Pre-launch announcement here</a>',
            backgroundColor: '#6ce56c',
            textColor: '#070707',
            isCloseable: true,
        },
        prism: {
            additionalLanguages: ['json']
        },
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
                            docId: 'cpc3/cpc3_intro',
                            label: 'I want to learn more about the CPC3 challenge...',
                        },
                        {
                            type: 'doc',
                            docId: 'cpc2/cpc2_results',
                            label: 'I want to see the results of CPC2 ...',
                        },
                        {
                            type: 'doc',
                            docId: 'cec2/cec2_results',
                            label: 'I want to see the results of CEC2 ...',
                        },
                       {
                            href: 'https://github.com/claritychallenge/clarity',
                            label: 'I want to see the code on GitHub...',
                        },
                      //  {
                       //     type: 'doc',
                       //     docId: 'publications',
                       //     label: 'I am looking for publications...',
                      //  },

                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Challenges',
                    position: 'right',
                    items: [{
                        type: 'doc',
                        docId: 'cpc3/cpc3_intro',
                        label: 'CPC3',
                        }, {
                            type: 'doc',
                            docId: 'cec3/cec3_intro',
                            label: 'CEC3',
                        }, {
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
                            href: 'https://claritychallenge.github.io/clarity2024-workshop/',
                            label: 'Clarity 2024',
                    },
                    {
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
                },{
                    to: 'publications',
                    label: 'Publications',
                    position: 'right',
                },{
                    type: 'doc',
                    docId: 'learning/learning_intro',
                    label: 'Learning',
                    position: 'right',
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
                        label: 'CPC3 Documentation',
                        to: '/docs/cpc3/cpc3_intro/',
                    }, {
                        label: 'CEC3 Documentation',
                        to: '/docs/cec3/cec3_intro/',
                    }, {
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
            background: {
                light: 'rgb(255, 255, 255)',
                dark: 'rgb(27, 27, 27)'
            },
            config: {
                // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
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
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [
                        [rehypeKatex, {
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
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex]
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    lastmod: 'date',
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                  },
            },
        ],
    ],
};