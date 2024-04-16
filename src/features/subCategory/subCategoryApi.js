import { apiSlice } from "../api/apiSlice";

export const subCategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubCategory: builder.query({
      query: () => "getSubCategory",
    }),
    addSubCategory: builder.mutation({
      query: (data) => ({
        url: "/addSubCategory",
        method: "POST",
        body: data,
      }),
    }),

    editSubCategory: builder.mutation({
      query: ({ catId, catData }) => ({
        url: `/editSubCategory/${catId}`,
        method: "PUT",
        body: catData,
      }),
    }),
  }),
});

export const {
  useAddSubCategoryMutation,
  useEditSubCategoryMutation,
  useGetSubCategoryQuery
} = subCategoryApi;
