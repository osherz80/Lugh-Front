export type User = {
    id: string;
    username: string | null;
    email: string;
    password: string;
    profilePicture: string | null;
    refreshTokens: string[] | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export type Candidate = {
    name: string;
    userId: string;
    embedding: number[] | null;
}

export type CV = {
    id: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    embedding: number[] | null;
    candidateId: string;
    content: string;
}

export type FullUser = User & {
    candidate?: (Candidate & {
        cvs?: CV[];
    }) | null;
};

export type UserRes = {
    user: FullUser,
    isAuth: bollean
}