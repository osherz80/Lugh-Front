import { useGoogleLogin as useGoogleLoginReact } from '@react-oauth/google';
import { useAppDispatch } from '@/store/hooks';
import { setAuthSuccess, setLoading, setAuthFailure } from '@/store/features/authSlice';
import { useGoogleLoginMutation } from '@/store/services/api';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';

export const useGoogleLogin = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const mode = useAppSelector((state) => state.app.mode);
    const [googleLoginMutation] = useGoogleLoginMutation();

    const handleGoogleSuccess = async (token: string) => {
        dispatch(setLoading(true));
        try {
            const response = await googleLoginMutation({ token }).unwrap();
            console.log("response googleLogin", response);

            const { user, isAuth, accessToken } = response;
            dispatch(setAuthSuccess({
                user,
                isAuth,
                accessToken
            }));

            console.log('User logged in successfully:', user);
            
            // Redirect based on the current mode
            router.push(`/${mode}`);
        } catch (error) {
            console.error('Backend verification failed:', error);
            dispatch(setAuthFailure('Google login failed'));
        }
    };

    const handleGoogleError = () => {
        console.error('Google Login Failed');
        dispatch(setAuthFailure('Google interaction failed'));
    };

    const loginWithGoogle = useGoogleLoginReact({
        onSuccess: (tokenResponse) => {
            handleGoogleSuccess(tokenResponse.access_token);
        },
        onError: handleGoogleError,
    });

    return {
        loginWithGoogle,
    };
};
