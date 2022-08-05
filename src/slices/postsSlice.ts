import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from 'types/index';

export const postsSlice = createApi({
	reducerPath: 'posts',
	keepUnusedDataFor: 1000,
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
		prepareHeaders(headers) {
			headers.set('content-type', 'application/json');
			return headers;
		},
	}),
	tagTypes: ['Posts'],
	endpoints: builder => ({
		fetchPosts: builder.query<Post[], void>({
			query: () => `/posts`,
			providesTags: [{ type: 'Posts', id: 'LIST' }],
		}),
	}),
});

export const { useLazyFetchPostsQuery } = postsSlice;
