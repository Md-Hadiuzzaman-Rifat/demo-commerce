import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  tagTypes: ["Categories"],

  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/getCategories",
      providesTags: ["Categories"],
    }),

    addCategory: builder.mutation({
      query: (data) => ({
        url: "/createCategory",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/deleteCategory/${id}`,
        method: "DELETE",
      }),
    }),
    invalidatesTags: ["Categories"],
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi;
