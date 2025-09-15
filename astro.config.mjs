// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RG234 Training Guide',
			description: 'Comprehensive training materials for ASIC Regulatory Guide 234 - Advertising financial products and services',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview & Purpose', slug: 'overview-purpose' },
					],
				},
				{
					label: 'Core Training',
					items: [
						{ label: 'Good Practice Guidance', slug: 'good-practice-guidance' },
						{ label: 'Media-Specific Guidance', slug: 'media-specific-guidance' },
						{ label: 'Regulatory Powers', slug: 'regulatory-powers' },
						{ label: 'Publisher Responsibilities', slug: 'publisher-responsibilities' },
					],
				},
				{
					label: 'Media-Specific Guidelines',
					collapsed: false,
					items: [
						{
							label: 'Audio & Voice',
							collapsed: true,
							items: [
								{ label: 'Radio Advertising', slug: 'media/radio-advertising' },
								{ label: 'Podcast Advertising', slug: 'media/podcast-advertising' },
								{ label: 'Telemarketing & Phone', slug: 'media/telemarketing-phone' },
							],
						},
						{
							label: 'Video & Visual',
							collapsed: true,
							items: [
								{ label: 'Television Advertising', slug: 'media/television-advertising' },
								{ label: 'Online Video & YouTube', slug: 'media/online-video-youtube' },
								{ label: 'Video Streaming Platforms', slug: 'media/video-streaming' },
							],
						},
						{
							label: 'Digital & Online',
							collapsed: true,
							items: [
								{ label: 'Website Advertising', slug: 'media/website-advertising' },
								{ label: 'Banner & Display Ads', slug: 'media/banner-display-ads' },
								{ label: 'Social Media Advertising', slug: 'media/social-media-advertising' },
								{ label: 'Email Marketing', slug: 'media/email-marketing' },
								{ label: 'Search Engine Marketing', slug: 'media/search-engine-marketing' },
							],
						},
						{
							label: 'Traditional Media',
							collapsed: true,
							items: [
								{ label: 'Print Advertising', slug: 'media/print-advertising' },
								{ label: 'Outdoor & Billboard', slug: 'media/outdoor-billboard' },
								{ label: 'Direct Mail', slug: 'media/direct-mail' },
							],
						},
						{
							label: 'Interactive & Events',
							collapsed: true,
							items: [
								{ label: 'Interactive Content', slug: 'media/interactive-content' },
								{ label: 'Events & Presentations', slug: 'media/events-presentations' },
								{ label: 'Webinars & Online Events', slug: 'media/webinars-online-events' },
							],
						},
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Key Terms & References', slug: 'key-terms-references' },
					],
				},
			],
		}),
	],
});
