const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/article.js`)
  const articleCategories = ['gramatyka', 'slownictwo', 'rozmowki', 'motywacja'];
  const articleSubcategories = ['czasy', 'mowa-zalezna-niezalezna', 'strona-czynna-bierna', 'czasowniki-modalne']
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            category
          }
        }
      }
    }
  `)

  createPage({
    path: `artykuly`,
    component: path.resolve(`src/layouts/articles.js`),
    context: {
      category: `/${''}/`
    }
  })  

  articleCategories.forEach(category => {
    createPage({
      path: `artykuly/${category}`,
      component: path.resolve(`src/layouts/articles.js`),
      context: {
        category: `/${category}/`
      }
    })
  })

  articleSubcategories.forEach(category => {
    createPage({
      path: `artykuly/gramatyka/${category}`,
      component: path.resolve(`src/layouts/articles.js`),
      context: {
        category: `/${category}/`
      }
    })
  })



  result.data.allMdx.nodes.forEach(article => {
    const category = article.frontmatter.category.split('/').map(each => each.trim());

    if(category.length === 1) {
      createPage({
        path: `artykuly/${category[0]}/${article.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          article,
          slug: article.frontmatter.slug,
        },
      })
    }

    if(category.length === 2) {
      createPage({
        path: `artykuly/${category[0]}/${category[1]}/${article.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          article,
          slug: article.frontmatter.slug,
        },
      })
    }
  })
}
