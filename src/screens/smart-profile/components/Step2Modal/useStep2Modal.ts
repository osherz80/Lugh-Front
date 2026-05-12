import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { skillsSchema, SkillsSchema } from '@/lib/schemas';
import { RootState } from '@/store/store';
import { setProfileData, setProfileStep } from '@/store/features/smartProfileSlice';
import { PROFILE_SECTIONS } from '@/common/consts';

export const useStep2Modal = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.smartProfile.skills);

  const { control, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<SkillsSchema>({
    resolver: zodResolver(skillsSchema),
    defaultValues: skills,
  });

  const [expandedSkills, setExpandedSkills] = useState<string[]>([]);
  const currentSkills = watch();
  const selectedSkillNames = Object.keys(currentSkills);

  const toggleSkill = (skillName: string) => {
    if (skillName in currentSkills) {
      const { [skillName]: _, ...rest } = currentSkills;
      reset(rest as SkillsSchema);
      setExpandedSkills(prev => prev.filter(s => s !== skillName));
    } else {
      setValue(skillName, "");
    }
  };

  const toggleExpand = (skillName: string) => {
    setExpandedSkills(prev =>
      prev.includes(skillName)
        ? prev.filter(s => s !== skillName)
        : [...prev, skillName]
    );
  };

  const onSubmit = (data: SkillsSchema, close: () => void) => {
    dispatch(setProfileData({ key: PROFILE_SECTIONS.SKILLS, value: data }));
    dispatch(setProfileStep(3));
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
  };
};
