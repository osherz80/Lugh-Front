import axiosInstance from "@/api/Axios";

export const parserApi = {
    async parse(text: string) {
        const response = await axiosInstance.post("/parser", { prompt: text });
        return response.data;
    },
};