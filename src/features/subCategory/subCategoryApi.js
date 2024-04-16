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

    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `/deleteSubCategory/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});

export const {
  useAddSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useGetSubCategoryQuery
} = subCategoryApi;
