import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "getCategory",
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/addCategory",
        method: "POST",
        body: data,
      }),
    }),

    editCategory: builder.mutation({
      query: ({ catId, catData }) => ({
        url: `/editCategory/${catId}`,
        method: "PUT",
        body: catData,
      }),
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
} = categoryApi;
