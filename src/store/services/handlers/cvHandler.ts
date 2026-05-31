import { setCvs } from '@/store/features/cvSlice'
import { AppDispatch } from '@/store/store'
import { CV } from '@/store/types/cv'

export const saveCvs = async (_arg: void, { dispatch, queryFulfilled }: { dispatch: AppDispatch, queryFulfilled: Promise<{ data: CV[] }> }) => {
    try {
        const { data } = await queryFulfilled;
        dispatch(setCvs(data));
    } catch (err) {
        console.error("Failed to fetch CVs:", err);
    }
}
