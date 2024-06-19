import {
  defineConfig,
} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'learn-VRA',
      social: {
        github: 'https://github.com/LearnShare/learn-VRA',
      },
      sidebar: [
        {
          label: '开始',
          collapsed: true,
          autogenerate: {
            directory: 'start',
          },
        },
        {
          label: '代码风格',
          collapsed: true,
          autogenerate: {
            directory: 'coding-style-guides',
          },
        },
        {
          label: '主题',
          collapsed: true,
          items: [
            {
              label: '1. Hello World',
              link: '/topic/hello-world/',
            },
            {
              label: '2. 应用配置和启动',
              link: '/topic/app/',
            },
            {
              label: '3. 组件',
              autogenerate: {
                directory: '/topic/component/',
              },
            },
            {
              label: '4. ref 和 DOM',
              link: '/topic/ref/',
            },
            {
              label: '5. 跨组件数据传递',
              link: '/topic/data-transfer/',
            },
          ],
        },
        {
          label: '库和框架',
          collapsed: true,
          items: [
            {
              label: 'Vue',
              link: '/vue',
            },
          ],
        },
      ],
    }),
  ],
});
