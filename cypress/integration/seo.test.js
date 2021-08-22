// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />
/**
 * Cypress tests for testing Seo tags, like canonicals, index/noindex and structured data
 *
 * TODO: Improve structured data validaton by actually using schema.org's schemas
 */

const options = {
  onBeforeLoad: () => {
    // @ts-ignore
    // eslint-disable-next-line no-proto
    delete window.navigator.__proto__.ServiceWorker
  },
}

describe('Home Page Seo', () => {
  const pathname = '/'

  it('has meta/canonical/link tags', () => {
    cy.visit(pathname, options)

    cy.title().should('exist')
    cy.get('meta[name="description"]').should('exist')
    cy.get('meta[name="robots"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('index,follow')
      })
    cy.get('meta[name="googlebot"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('index,follow')
      })
    cy.get('link[rel="canonical"]')
      .should('exist')
      .should(($link) => {
        expect($link.attr('href')).to.eq(`https://${window.location.host}/`)
      })
  })

  it('has structured data', () => {
    cy.visit(pathname, options)

    cy.get('script[type="application/ld+json"]')
      .should('exist')
      .should(($el) => {
        const jsonld = JSON.parse($el.text())

        expect(jsonld['@context']).to.eq('https://schema.org')
        expect(jsonld['@type']).to.eq('WebSite')
      })
  })

  it('has OpenGraph tags', () => {
    cy.visit(pathname, options)

    cy.get('meta[property="og:type"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('website')
      })

    cy.get('meta[property="og:title"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })

    cy.get('meta[property="og:description"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })
  })
})

describe('Product Page Seo', () => {
  const pathname = '/organza-sleeve-top/p'

  it('has meta/canonical/link tags', () => {
    cy.visit(pathname, options)

    cy.title().should('exist')
    cy.get('meta[name="description"]').should('exist')
    cy.get('meta[name="robots"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('index,follow')
      })
    cy.get('meta[name="googlebot"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('index,follow')
      })
    cy.get('link[rel="canonical"]')
      .should('exist')
      .should(($link) => {
        expect($link.attr('href')).to.eq(
          `https://${window.location.host}${pathname}`
        )
      })
  })

  it('has structured data', () => {
    cy.visit(pathname, options)

    // Assert there is at least one Product and BreadcrumbList on structured data tags
    cy.get('script[type="application/ld+json"]')
      .should('exist')
      .should(($el) => {
        const [...jsons] = $el.map((idx) => JSON.parse($el[idx].innerHTML))

        jsons.forEach((x) => {
          expect(x['@context']).to.eq('https://schema.org')
        })

        expect(jsons.find((json) => json['@type'] === 'Product')).to.not.null
        expect(jsons.find((json) => json['@type'] === 'BreadcrumbList')).to.not
          .null
      })
  })

  it('has OpenGraph tags', () => {
    cy.visit(pathname, options)

    cy.get('meta[property="og:url"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })

    cy.get('meta[property="og:type"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('og:product')
      })

    cy.get('meta[property="og:title"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })

    cy.get('meta[property="og:image"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })

    cy.get('meta[property="og:image:alt"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })

    cy.get('meta[property="product:price:amount"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })
  })
})

describe('Collection Page Seo', () => {
  const pathname = '/women'

  it('has meta/canonical/link tags', () => {
    cy.visit(pathname, options)

    cy.title().should('exist')
    cy.get('meta[name="description"]').should('exist')
    cy.get('meta[name="robots"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('index,follow')
      })
    cy.get('meta[name="googlebot"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('index,follow')
      })
    cy.get('link[rel="canonical"]')
      .should('exist')
      .should(($link) => {
        expect($link.attr('href')).to.eq(
          `https://${window.location.host}${pathname}`
        )
      })
  })

  it('has structured data', () => {
    cy.visit(pathname, options)

    // Assert there is at least one BreadcrumbList on structured data tags
    cy.get('script[type="application/ld+json"]')
      .should('exist')
      .should(($el) => {
        const [...jsons] = $el.map((idx) => JSON.parse($el[idx].innerHTML))

        jsons.forEach((x) => {
          expect(x['@context']).to.eq('https://schema.org')
        })

        expect(jsons.find((json) => json['@type'] === 'BreadcrumbList')).to.not
          .null
      })
  })

  it('has OpenGraph tags', () => {
    cy.visit(pathname, options)

    cy.get('meta[property="og:type"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('website')
      })

    cy.get('meta[property="og:title"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })

    cy.get('meta[property="og:description"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })
  })
})

describe('Filtered Collection Page Seo', () => {
  const pathname = '/women/red?map=c,color'

  it('has canonical pointing to parent url', () => {
    cy.visit(pathname, options)

    cy.get('link[rel="canonical"]')
      .should('exist')
      .should(($link) => {
        expect($link.attr('href')).to.eq(
          `https://${window.location.host}/women`
        )
      })
  })

  it('has structured data', () => {
    cy.visit(pathname, options)

    // Assert there is at least one BreadcrumbList on structured data tags
    cy.get('script[type="application/ld+json"]')
      .should('exist')
      .should(($el) => {
        const [...jsons] = $el.map((idx) => JSON.parse($el[idx].innerHTML))

        jsons.forEach((x) => {
          expect(x['@context']).to.eq('https://schema.org')
        })

        expect(jsons.find((json) => json['@type'] === 'BreadcrumbList')).to.not
          .null
      })
  })

  it('has OpenGraph tags', () => {
    cy.visit(pathname, options)

    cy.get('meta[property="og:type"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('website')
      })

    cy.get('meta[property="og:title"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })

    cy.get('meta[property="og:description"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })
  })
})

describe('Search Page Seo', () => {
  const pathname = '/s/shirt?map=term'

  it('has meta/canonical/link tags', () => {
    cy.visit(pathname, options)

    cy.title().should('exist')
    cy.get('meta[name="description"]').should('exist')
    cy.get('meta[name="robots"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('noindex,follow')
      })
    cy.get('meta[name="googlebot"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('noindex,follow')
      })
    cy.get('link[rel="canonical"]').should('not.exist')
  })

  it('has OpenGraph tags', () => {
    cy.visit(pathname, options)

    cy.get('meta[property="og:type"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.eq('website')
      })

    cy.get('meta[property="og:title"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })

    cy.get('meta[property="og:description"]')
      .should('exist')
      .should(($el) => {
        expect($el.attr('content')).to.be.a('string')
      })
  })
})