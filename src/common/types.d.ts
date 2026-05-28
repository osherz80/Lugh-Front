import { CV } from '@/store/types/cv'

export type User = {
    id: string;
    username: string | null;
    email: string;
    profilePicture: string | null;
    hasCv: boolean;
}

export type Candidate = {
    name: string;
    userId: string;
    embedding: number[] | null;
}

export type FullUser = User & {
    candidate?: (Candidate & {
        cvs?: CV[];
    }) | null;
};

export type UserRes = {
    user: FullUser,
}