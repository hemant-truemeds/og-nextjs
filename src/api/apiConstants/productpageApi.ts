enum PRODUCT_APIS {
  GET_PRODUCT_DETAILS = "CustomerService/callElasticSearch?warehouseId=3",
}

const PRODUCT_STATIC_PAYLOAD = {
  GET_PRODUCT_PAYLOAD: (ID: string) => ({
    size: 1,
    query: {
      multi_match: {
        query: ID,
        type: "bool_prefix",
        operator: "and",
        fields: ["original_product_code"],
      },
    },
    post_filter: {
      term: {
        original_is_searchable: "true",
      },
    },
    suggest: {
      skuNameSuggester: {
        text: ID,
        term: {
          field: "original_product_code",
          sort: "frequency",
          size: 1,
        },
      },
    },
  }),
};

Object.freeze(PRODUCT_STATIC_PAYLOAD);

export { PRODUCT_APIS, PRODUCT_STATIC_PAYLOAD };
