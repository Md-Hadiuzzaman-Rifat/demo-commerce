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

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/deleteCategory/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi;
