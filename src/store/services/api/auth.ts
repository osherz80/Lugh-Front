import { UserRes } from "@/app/common/types/general";
import { api } from "@/store/services/api/api"

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        googleLogin: builder.mutation<any, { token: string }>({
            query: (body) => ({
                url: "/auth/google",
                method: "POST",
                body,
            }),
        }),
        register: builder.mutation<UserRes, any>({
            query: (body) => ({
                url: "/auth/register",
                method: "POST",
                body,
            }),
        }),
        login: builder.mutation<UserRes, any>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useGoogleLoginMutation,
    useRegisterMutation,
    useLoginMutation
} = authApi;
