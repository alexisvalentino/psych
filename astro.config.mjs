import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
const site_url = process.env.URL;
const site = site_url || 'http://localhost:4321/academy/';

const base_var = process.env.BASE;
const base = base_var ? base_var : 'academy';


// https://astro.build/config
export default defineConfig({
  site: site,
  base: base,
  image: {
		service: passthroughImageService(),
	},
  banner: {
    enabled: true,
    content: 'Thank you for visiting us! - <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="about:blank">learn more</a>',

  },
  integrations: [starlight({
    title: 'Psych Academy',
    favicon: '/images/psfavicon.svg',
    customCss: ['./src/styles/custom.css'],
    editLink: {
      baseUrl: 'https://github.com/patchstack/academy/edit/main/'
    },
    logo: {
      src: './src/assets/logo.png',
      replacesTitle: true
    },
    social: {
      github: 'https://github.com/alexisvalentino/psych.git',
      linkedin: 'https://www.linkedin.com/in/alexisvalentino/'
    },
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      Head: './src/components/Head.astro',
      PageSidebar: './src/components/PageSidebar.astro',
      MarkdownContent: './src/components/MarkdownContent.astro',
      EditLink: './src/components/EditLink.astro',
      PageFrame: './src/components/PageFrame.astro',
    },
    sidebar: [{
      label: '👋 Home',
      collapsed: true,
      autogenerate: {
        directory: 'welcome',
        collapsed: true
      }
    }, {
      label: '📚 Resources',
      collapsed: true,
      autogenerate: {
        directory: 'general',
        collapsed: true
      }
    }, {
      label: '🌐 Quizzes',
      collapsed: true,
      autogenerate: {
        directory: 'wordpress',
        collapsed: true
      }
    }, {
      label: '📝 Announcements',
      collapsed: true,
      autogenerate: {
        directory: 'to-do',
        collapsed: true
      },
    }]
  }), icon(), sitemap()]
});