import { useAppSelector } from "@/store/hooks";

export interface ProfileOption {
  id: string | null;
  name: string;
  icon: string;
  isActive: boolean;
  isMaster: boolean;
}

export const useActiveProfileDropdown = () => {
  const profile = useAppSelector((state) => state.smartProfile);

  const currentProfileId = profile.profileId;
  const currentRole = profile.basics?.targetRole;

  // The default presented/choosed value will be the targetRole from our smartProfile state or "New Profile" if its undefined/null.
  const activeProfileName = currentRole || "New Profile";

  // In the dropdown the values to choose from will be the targetRole from our smartProfile otherProfiles sections
  const profileOptions: ProfileOption[] = (profile.otherProfiles || []).map((p) => {
    const isCurrent = p.profileId === currentProfileId;
    return {
      id: p.profileId,
      name: p.targetRole || "New Profile",
      icon: (p.targetRole || "").toLowerCase().includes("product") ? "domain" : "code",
      isActive: isCurrent,
      isMaster: false,
    };
  });

  const handleSelectProfile = (option: ProfileOption) => {
    console.log("Selected profile variant:", option);
    // In the future, this would switch the loaded profile by dispatching setSmartProfile or triggering a query
  };

  const handleCreateVariant = () => {
    console.log("Create new variant triggered");
    // Action to create a new variant
  };

  return {
    activeProfileName,
    profileOptions,
    handleSelectProfile,
    handleCreateVariant,
  };
};
