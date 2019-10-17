export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da8a52235fd2ba3afe61c5f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9144t9t4',
                  apiId: '1d937a1a-7af7-43bd-b644-98ff096b2140'
                },
                {
                  buildHookId: '5da8a522d5483f50a9608901',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xurq4inb',
                  apiId: '6583e5c4-4452-4354-a08a-4ca8f3010499'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OatsAndSquats25/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xurq4inb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
