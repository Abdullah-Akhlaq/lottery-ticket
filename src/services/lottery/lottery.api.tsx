import { END_POINTS } from "@/route-constants/endpoint";
import { baseAPI } from "../baseApi";


export const LotteryApi = baseAPI.injectEndpoints({
    endpoints: (builder: any) => ({

        getLottery: builder.query({
            query: ({ param }: { param: string }) => ({
                url: `${END_POINTS?.GET_LOTTERY}?lotteryType=${param}`,
                method: 'GET',

            }),
            providesTags: ['LOTTERY'],
        }),

    })
})

export const {
    useGetLotteryQuery
} = LotteryApi;
