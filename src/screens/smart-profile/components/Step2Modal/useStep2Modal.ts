import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { skillsSchema, SkillsSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setSmartProfileData, setSmartProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';
import { useUpsertSmartProfileMutation } from '@/store/services/api/smartProfile';

export const useStep2Modal = (isOpen: boolean) => {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.smartProfile.skills);
  const [upsertSmartProfile, { isLoading: isUpserting }] = useUpsertSmartProfileMutation();

  const { control, handleSubmit, setValue, watch, getValues, reset, formState: { errors } } = useForm<SkillsSchema>({
    resolver: zodResolver(skillsSchema),
    defaultValues: skills,
  });

  useEffect(() => {
    if (!isOpen) {
      reset(skills);
    }
  }, [isOpen, reset, skills]);

  const [selectedSkillNames, setSelectedSkillNames] = useState<string[]>(Object.keys(skills));
  const [expandedSkills, setExpandedSkills] = useState<string[]>([]);

  const currentSkills = watch();

  const toggleSkill = (skillName: string) => {
    if (selectedSkillNames.includes(skillName)) {
      setSelectedSkillNames(prev => prev.filter(s => s !== skillName));
      setExpandedSkills(prev => prev.filter(s => s !== skillName));
    } else {
      setSelectedSkillNames(prev => [...prev, skillName]);
      // If the skill doesn't exist in form state yet, initialize it
      if (!(skillName in getValues())) {
        setValue(skillName, "");
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

  const onSubmit = async (data: SkillsSchema, close: () => void) => {
    // Only save the skills that are currently selected
    const filteredSkills: SkillsSchema = {};
    selectedSkillNames.forEach(name => {
      filteredSkills[name] = data[name] || "";
    });

    await upsertSmartProfile({ ...data, section: PROFILE_SECTIONS.SKILLS });
    dispatch(setSmartProfileData({ key: PROFILE_SECTIONS.SKILLS, value: filteredSkills }));
    dispatch(setSmartProfileStep(3));
    close();
  };

  const initialSkills = [
    'Project Management',
    'Marketing Strategy',
    'Figma',
    'Data Analysis',
    'AWS',
    'React',
  ];

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
    initialSkills,
    isUpserting
  };
};
