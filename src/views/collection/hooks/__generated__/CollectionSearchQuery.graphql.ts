
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
  ID: string
}

// Operation related types
export type CollectionSearchQueryQueryVariables = Exact<{
  to: Scalars['Int'];
  from: Scalars['Int'];
  selectedFacets: Array<Vtex_SelectedFacetInput> | Vtex_SelectedFacetInput;
  sort: Scalars['String'];
}>;


export type CollectionSearchQueryQuery = { vtex: { productSearch: Maybe<{ totalCount: Maybe<number>, products: Maybe<Array<Maybe<{ productName: Maybe<string>, slug: Maybe<string>, id: Maybe<string>, items: Maybe<Array<Maybe<{ images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ commercialOffer: Maybe<{ spotPrice: Maybe<number>, listPrice: Maybe<number> }> }>>> }>>> }>>> }>, facets: Maybe<{ breadcrumb: Maybe<Array<Maybe<{ href: Maybe<string>, name: Maybe<string> }>>>, facets: Maybe<Array<Maybe<{ name: Maybe<string>, type: Maybe<Vtex_FilterType>, values: Maybe<Array<Maybe<{ key: Maybe<string>, name: Maybe<string>, value: Maybe<string>, selected: Maybe<boolean>, quantity: number, range: Maybe<{ from: Maybe<number>, to: Maybe<number> }> }>>> }>>> }> } };


// Query Related Code

export const CollectionSearchQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query CollectionSearchQuery($to: Int!, $from: Int!, $selectedFacets: [VTEX_SelectedFacetInput!]!, $sort: String!) {\n  vtex {\n    productSearch(\n      to: $to\n      from: $from\n      orderBy: $sort\n      selectedFacets: $selectedFacets\n      hideUnavailableItems: false\n      simulationBehavior: skip\n    ) {\n      products {\n        slug: linkText\n        id: productId\n        productName\n        items {\n          images {\n            imageUrl\n            imageText\n          }\n          sellers {\n            commercialOffer: commertialOffer {\n              spotPrice\n              listPrice: ListPrice\n            }\n          }\n        }\n      }\n      totalCount: recordsFiltered\n    }\n    facets(\n      selectedFacets: $selectedFacets\n      operator: or\n      behavior: \"Static\"\n      removeHiddenFacets: true\n    ) {\n      breadcrumb {\n        href\n        name\n      }\n      facets {\n        name\n        type\n        values {\n          key\n          name\n          value\n          selected\n          quantity\n          range {\n            from\n            to\n          }\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "94da145fc0f60c90f68755a2b3a2660c48d6bdbf91173eb310ced62e7a508ef3",
  operationName: "CollectionSearchQuery",
}

