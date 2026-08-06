import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addActiveProfileToOthers, reset, resetCurrentProfile, switchActiveProfile } from "@/store/features/smartProfileSlice";
import { useSetMasterMutation } from "@/store/services/api/smartProfile";

export interface ProfileOption {
  id: string | null;
  name: string;
  icon: string;
  isActive: boolean;
  isMaster: boolean;
}

export const useActiveProfileDropdown = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.smartProfile);
  const [setMaster, { isLoading: isSettingMaster }] = useSetMasterMutation();

  const currentProfileId = profile.profileId;
  const currentRole = profile.basics?.targetRole;

  // The default presented/choosed value will be the targetRole from our smartProfile state or "New Profile" if its undefined/null.
  const activeProfileName = currentRole || "New Profile";

  // In the dropdown the values to choose from will be the targetRole from our smartProfile otherProfiles sections
  const profileOptions: ProfileOption[] = (profile.otherProfiles || []).map((p) => {
    const isCurrent = p.profileId === currentProfileId;
    const targetRole = "basics" in p ? p.basics?.targetRole : p.targetRole;
    return {
      id: p.profileId,
      name: targetRole || "New Profile",
      icon: (targetRole || "").toLowerCase().includes("product") ? "domain" : "code",
      isActive: isCurrent,
      isMaster: false,
    };
  });

  const handleSelectProfile = async (option: ProfileOption) => {
    console.log("Selected profile variant:", option);
    if (option.id && option.id !== currentProfileId) {
      dispatch(switchActiveProfile(option.id));
      await setMaster({ profileId: option.id });
    }
  };

  const handleCreateVariant = () => {
    if (currentProfileId) {
      console.log("selectedprofileId", currentProfileId);
      dispatch(addActiveProfileToOthers());
    }
    dispatch(resetCurrentProfile());
  };

  return {
    activeProfileName,
    profileOptions,
    handleSelectProfile,
    handleCreateVariant,
  };
};
