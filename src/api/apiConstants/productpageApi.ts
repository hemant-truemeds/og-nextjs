enum PRODUCT_APIS {
  GET_PRODUCT_DETAILS = "CustomerService/callElasticSearch?warehouseId=3",
  GET_OTHER_PRODUCTS = "CustomerService/callElasticSearch?warehouseId=3",
  FETCH_MEDICINE_DETAILS = "CustomerService/fetchMedicineDetails?warehouseId=3",
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
  GET_OTHER_PRODUCT_PAYLOAD: {
    size: 50,
    query: {
      bool: {
        should: [
          {
            terms: {
              "original_product_code.keyword": [
                "TM-TACR1-046233",
                "TM-TACR1-052916",
                "TM-POER1-001997",
                "TM-SOLE1-000133",
                "TM-POER1-001128",
                "TM-STPS1-000072",
                "TM-TACR1-006144",
                "TM-PEEN1-000003",
                "TM-SPER1-000268",
                "TM-INON1-000294",
                "TM-CACR1-002212",
                "TM-TACR1-048066",
                "TM-TACR1-053743",
                "TM-TACR1-050886",
                "TM-TACR1-048864",
              ],
            },
          },
        ],
      },
    },
  },
  FETCH_MEDICINE_PAYLOAD: (ID: string) => ID,
};

Object.freeze(PRODUCT_STATIC_PAYLOAD);

export { PRODUCT_APIS, PRODUCT_STATIC_PAYLOAD };
