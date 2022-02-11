/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math');
const katex = require('rehype-katex');
module.exports = {
    title: 'The 2nd Clarity Enhancement Challenge',
    tagline: 'A machine learning challenge for hearing aid processing',
    url: 'https://claritychallenge.org',
    baseUrl: '/clarity_CC_doc/',
    onBrokenLinks: 'error',
    onBrokenMarkdownLinks: 'error',
    favicon: 'img/favicon.ico',
    organizationName: 'claritychallenge', // Usually your GitHub org/user name.
    projectName: 'clarity_CC_doc', // Usually your repo name.
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
            logo: {
                alt: 'Clarity Logo',
                src: 'img/logo.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'cec2/intro',
                    position: 'left',
                    label: 'CEC2 Documentation',
                },
                {
                    type: 'dropdown',
                    label: 'Previous Challenges',
                    position: 'right',
                    items: [{
                        type: 'doc',
                        docId: 'cec1/intro',
                        label: 'CEC1',
                    }, {
                        type: 'doc',
                        docId: 'cpc1/intro',
                        label: 'CPC1',
                    }, ]
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },

                {
                    href: 'https://claritychallenge.github.io/clarity2021-workshop/',
                    label: 'Workshop',
                    position: 'left'
                },
                {
                    to: '/twitter',
                    label: 'Twitter',
                    position: 'right',
                },
                {
                    href: 'https://github.com/claritychallenge/clarity_CEC1',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'CEC1 Documentation',
                        to: '/docs/cec1/intro',
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
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/claritychallenge/clarity_CEC1',
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
                            stict: false
                        }]
                    ],
                    // Please change this to your repo.
                    editUrl: 'https://github.com/claritychallenge/clarity_CC_doc/edit/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/claritychallenge/clarity_CC_doc/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};