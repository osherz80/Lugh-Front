"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CV, SkillItem } from "@/store/types/cv";
import { JobExperience, Education } from "@/store/types/smartProfile";
import { setSmartProfileSectionKey } from "@/store/features/smartProfileSlice";
import { updateCv } from "@/store/features/cvSlice";
import { PROFILE_SECTIONS } from "@/common/consts";
import { useUpsertSmartProfileMutation } from "@/store/services/api/smartProfile";

export type TabType = "basics" | "summary" | "experience" | "skills" | "education";

interface UseCVEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  cv: CV | null;
}

export function useCVEditModal({ isOpen, onClose, cv }: UseCVEditModalProps) {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.smartProfile);
  const [upsertSmartProfile, { isLoading: isSaving }] = useUpsertSmartProfileMutation();

  const [activeTab, setActiveTab] = useState<TabType>("basics");

  // Form states
  const [fullName, setFullName] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [github, setGithub] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [experience, setExperience] = useState<JobExperience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Load state when CV changes or opens
  useEffect(() => {
    if (isOpen && cv) {
      setFullName(profile.basics?.fullName || cv.country || ""); // Wait: basics.fullName is candidate name
      // Let's use correct fallbacks
      setFullName(profile.basics?.fullName || "");
      setTargetRole(profile.basics?.targetRole || cv.roleTag || "");
      setEmail(profile.contact?.email || cv.email || "");
      setPhone(profile.contact?.phone || cv.phone || "");
      setLinkedin(profile.contact?.linkedin || cv.linkedin || "");
      setPortfolio(profile.contact?.portfolio || cv.portfolio || "");
      setGithub(profile.contact?.github || cv.github || "");
      setCountry(profile.basics?.country || cv.country || "");
      setCity(profile.basics?.city || cv.city || "");
      setSummary(cv.summary || profile.persona?.story || "");
      setSkills(cv.structuredSkills ? JSON.parse(JSON.stringify(cv.structuredSkills)) : []);
      setExperience(profile.experience ? JSON.parse(JSON.stringify(profile.experience)) : []);
      setEducation(profile.education ? JSON.parse(JSON.stringify(profile.education)) : []);
      setActiveTab("basics");
    }
  }, [isOpen, cv, profile]);

  const handleAddExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        company: "",
        roleTag: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
        description: "",
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  };

  const handleExperienceChange = (index: number, field: keyof JobExperience, value: any) => {
    setExperience((prev) =>
      prev.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp))
    );
  };

  const handleAddEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        isOngoing: false,
        description: "",
      },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEducationChange = (index: number, field: keyof Education, value: any) => {
    setEducation((prev) =>
      prev.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu))
    );
  };

  const handleAddSkillCategory = () => {
    setSkills((prev) => [
      ...prev,
      {
        category: "New Category",
        skills: [],
      },
    ]);
  };

  const handleRemoveSkillCategory = (index: number) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSkillCategoryChange = (index: number, name: string) => {
    setSkills((prev) =>
      prev.map((item, i) => (i === index ? { ...item, category: name } : item))
    );
  };

  const handleSkillTagsChange = (index: number, tagsString: string) => {
    const list = tagsString
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    setSkills((prev) =>
      prev.map((item, i) => (i === index ? { ...item, skills: list } : item))
    );
  };

  const handleSave = async () => {
    if (!cv) return;

    try {
      // 1. Prepare updates for smartProfile
      const basicsPayload = {
        fullName,
        targetRole,
        yearsOfExperience: profile.basics?.yearsOfExperience || 0,
        country,
        city,
      };

      const contactPayload = {
        email,
        phone,
        linkedin,
        portfolio,
        github,
        anythingElse: profile.contact?.anythingElse || "",
      };

      // 2. Call upsert mutation endpoints for database persistence
      await upsertSmartProfile({ stepData: basicsPayload, section: PROFILE_SECTIONS.BASICS }).unwrap();
      await upsertSmartProfile({ stepData: contactPayload, section: PROFILE_SECTIONS.CONTACT }).unwrap();
      await upsertSmartProfile({ stepData: experience, section: PROFILE_SECTIONS.EXPERIENCE }).unwrap();
      await upsertSmartProfile({ stepData: education, section: PROFILE_SECTIONS.EDUCATION }).unwrap();

      // Convert skills SkillItem[] list back to flat Record<string, string> for Profile skills
      const flatSkills: Record<string, string> = {};
      skills.forEach((group) => {
        group.skills.forEach((skill) => {
          flatSkills[skill] = "";
        });
      });
      await upsertSmartProfile({ stepData: flatSkills, section: PROFILE_SECTIONS.SKILLS }).unwrap();

      // 3. Dispatch changes to Redux store
      dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.BASICS, value: basicsPayload }));
      dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.CONTACT, value: contactPayload }));
      dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.EXPERIENCE, value: experience }));
      dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.EDUCATION, value: education }));
      dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.SKILLS, value: flatSkills }));

      // 4. Update the CV slice state in Redux
      dispatch(
        updateCv({
          id: cv.id,
          changes: {
            roleTag: targetRole,
            summary,
            structuredSkills: skills,
            email,
            phone,
            linkedin,
            portfolio,
            github,
            country,
            city,
          },
        })
      );

      // Close on success
      onClose();
    } catch (err) {
      console.error("Failed to save CV & profile modifications:", err);
    }
  };

  return {
    activeTab,
    setActiveTab,
    fullName,
    setFullName,
    targetRole,
    setTargetRole,
    email,
    setEmail,
    phone,
    setPhone,
    linkedin,
    setLinkedin,
    portfolio,
    setPortfolio,
    github,
    setGithub,
    country,
    setCountry,
    city,
    setCity,
    summary,
    setSummary,
    skills,
    experience,
    education,
    handleAddExperience,
    handleRemoveExperience,
    handleExperienceChange,
    handleAddEducation,
    handleRemoveEducation,
    handleEducationChange,
    handleAddSkillCategory,
    handleRemoveSkillCategory,
    handleSkillCategoryChange,
    handleSkillTagsChange,
    handleSave,
    isSaving,
  };
}
