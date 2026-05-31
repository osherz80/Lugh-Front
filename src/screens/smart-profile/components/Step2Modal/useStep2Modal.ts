import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { skillsSchema, SkillsSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setSmartProfileSectionKey, setSmartProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS, UNIVERSAL_AUTOCOMPLETE_SKILLS } from '@/common/consts';
import { useUpsertSmartProfileMutation } from '@/store/services/api/smartProfile';
import { Skills } from '@/store/types/smartProfile';

const getCanonicalSkillName = (name: string): string => {
  const match = UNIVERSAL_AUTOCOMPLETE_SKILLS.find(
    (s) => s.toLowerCase() === name.toLowerCase()
  );
  return match || name;
};

export const useStep2Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const rawSkills = useSelector((state: RootState) => state.smartProfile.skills);
  const skills = useMemo(() => {
    if (!rawSkills) return {};
    const normalized: Record<string, string> = {};
    for (const [key, value] of Object.entries(rawSkills)) {
      const canonicalKey = getCanonicalSkillName(key);
      normalized[canonicalKey] = value ?? "";
    }
    return normalized;
  }, [rawSkills]);
  const [upsertSmartProfile, { isLoading: isUpserting }] = useUpsertSmartProfileMutation();

  const { control, handleSubmit, setValue, watch, getValues, reset, formState: { errors } } = useForm<SkillsSchema>({
    resolver: zodResolver(skillsSchema),
    defaultValues: skills,
  });

  // Keep form values in sync with skills when skills change or modal opens
  useEffect(() => {
    reset(skills);
  }, [skills, reset]);

  const [selectedSkillNames, setSelectedSkillNames] = useState<string[]>(Object.keys(skills));
  const [expandedSkills, setExpandedSkills] = useState<string[]>([]);

  useEffect(() => {
    setSelectedSkillNames(Object.keys(skills));
  }, [skills]);

  const currentSkills = watch();

  const toggleSkill = (skillName: string) => {
    const canonicalName = getCanonicalSkillName(skillName);
    if (selectedSkillNames.includes(canonicalName)) {
      setSelectedSkillNames(prev => prev.filter(s => s !== canonicalName));
      setExpandedSkills(prev => prev.filter(s => s !== canonicalName));
    } else {
      setSelectedSkillNames(prev => [...prev, canonicalName]);
      // If the skill doesn't exist in form state yet, initialize it
      if (!(canonicalName in getValues())) {
        setValue(canonicalName, "");
      }
    }
  };

  const toggleExpand = (skillName: string) => {
    setExpandedSkills(prev =>
      prev.includes(skillName)
        ? prev.filter(s => s !== skillName)
        : [...prev, skillName]
    );
  };

  const onSubmit = async (stepData: SkillsSchema, close: () => void) => {
    console.log('submitting');
    // Filter stepData to only include currently selected skills and normalize null/undefined to ""
    const filteredData: Skills = {};
    for (const skillName of selectedSkillNames) {
      filteredData[skillName] = stepData[skillName] ?? "";
    }
    await upsertSmartProfile({ stepData: filteredData, section: PROFILE_SECTIONS.SKILLS });
    dispatch(setSmartProfileStep(3));
    dispatch(setSmartProfileSectionKey({ key: PROFILE_SECTIONS.SKILLS, value: filteredData }));
    close();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    currentSkills,
    selectedSkillNames,
    expandedSkills,
    toggleSkill,
    toggleExpand,
    isUpserting
  };
};
