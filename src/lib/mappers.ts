import { FullSmartProfile, BackendSmartProfile } from "@/store/types/smartProfile";

export const mapBackendToFrontendSmartProfile = (backend: BackendSmartProfile | null): FullSmartProfile | null => {
    console.log("backend", backend);
    if (!backend) return null;

    return {
        profileId: backend.profileId,
        currentStep: backend.currentStep ?? 1,
        isMaster: backend.isMaster ?? false,
        otherProfiles: backend?.otherProfiles ?? [],
        basics: {
            fullName: backend.fullName ?? "",
            targetRole: backend.targetRole ?? "",
            yearsOfExperience: backend.yearsOfExperience ?? 0,
            country: backend.country ?? "",
            city: backend.city ?? "",
        },
        skills: backend.skills ?? {},
        experience: backend.experiences ?? [],
        education: backend.education ?? [],
        persona: {
            style: backend.persona?.style ?? [],
            strengths: backend.persona?.strengths ?? [],
            story: backend.persona?.story ?? "",
        },
        contact: {
            phone: backend.phone ?? "",
            email: backend.email ?? "",
            linkedin: backend.linkedin ?? "",
            portfolio: backend.portfolio ?? "",
            anythingElse: backend.anythingElse ?? "",
        },
    };
};
