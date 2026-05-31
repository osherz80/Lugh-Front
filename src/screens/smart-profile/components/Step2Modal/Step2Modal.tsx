import React, { useState, useEffect } from 'react';
import { StepModal } from '../StepModal/StepModal';
import { Autocomplete, Button, Heading, Input, ListBox, ListBoxItem, SearchField, TextArea, TextField, FieldError, useFilter } from 'react-aria-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import { StepModalHeader } from '../StepModalHeader/StepModalHeader';
import { useStep2Modal } from './useStep2Modal';
import { Controller } from 'react-hook-form';
import { INITIAL_SKILLS_SUGGESTIONS, UNIVERSAL_AUTOCOMPLETE_SKILLS } from '@/common/consts';

interface Step2ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  icon: string;
}

const Step2Modal = ({ isOpen, onOpenChange, icon }: Step2ModalProps) => {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    currentSkills,
    selectedSkillNames,
    expandedSkills,
    toggleSkill,
    toggleExpand,
  } = useStep2Modal(isOpen);

  const { contains } = useFilter({ sensitivity: 'base' });
  const [searchValue, setSearchValue] = useState('');

  const [customSkills, setCustomSkills] = useState<string[]>(() =>
    selectedSkillNames.filter((skill) => !UNIVERSAL_AUTOCOMPLETE_SKILLS.includes(skill))
  );

  useEffect(() => {
    setCustomSkills(
      selectedSkillNames.filter((skill) => !UNIVERSAL_AUTOCOMPLETE_SKILLS.includes(skill))
    );
  }, [selectedSkillNames]);

  const allUniversalSkills = [
    ...UNIVERSAL_AUTOCOMPLETE_SKILLS,
    ...customSkills
  ];

  const availableSkills = allUniversalSkills.filter(
    (skill) => !selectedSkillNames.includes(skill)
  );

  const trimmedSearch = searchValue.trim();

  // Filter available skills based on search value case-insensitively
  const filteredSkills = availableSkills.filter((skill) =>
    trimmedSearch === '' || skill.toLowerCase().includes(trimmedSearch.toLowerCase())
  );

  const isSkillAlreadySelected = selectedSkillNames.some(
    (skill) => skill.toLowerCase() === trimmedSearch.toLowerCase()
  );
  const showAddOption = trimmedSearch.length > 0 && !isSkillAlreadySelected;

  const suggestions = filteredSkills.map((skill) => ({ id: skill, name: skill }));
  if (showAddOption) {
    suggestions.push({
      id: `add-custom-skill:${trimmedSearch}`,
      name: `add - ${trimmedSearch}`
    });
  }

  const handleSkillSelect = (skillName: string) => {
    if (skillName.startsWith('add-custom-skill:')) {
      const customSkill = skillName.substring('add-custom-skill:'.length);
      if (!customSkills.includes(customSkill)) {
        setCustomSkills((prev) => [...prev, customSkill]);
      }
      toggleSkill(customSkill);
    } else {
      toggleSkill(skillName);
    }
    setSearchValue('');
  };

  return (
    <StepModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      stepNumber={2}
    >
      {({ close }) => (
        <form 
          onSubmit={handleSubmit(
            (data) => {
              console.log('Form valid, data:', data);
              onSubmit(data, close);
            },
            (err) => {
              console.error('Form invalid, errors:', err);
            }
          )} 
          className="flex flex-col h-full"
        >
          <StepModalHeader
            icon={icon}
            title="Let's uncover your Professional DNA."
            subTitle="This data powers our AI to match you with top-tier opportunities."
          />

          {/* Skill Search Autocomplete */}
          <div className="relative mb-8">
            <Autocomplete
              inputValue={searchValue}
              onInputChange={setSearchValue}
              filter={contains}
            >
              <SearchField
                aria-label="Search skills"
                className="relative w-full"
              >
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10">
                  <Search size={20} />
                </div>
                <Input
                  placeholder="Search and add your core technical skills or professional..."
                  className="w-full bg-[#f1f5f9] border-none rounded-2xl p-5 pl-14 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                />
              </SearchField>
              {searchValue.length > 0 && (
                <ListBox
                  aria-label="Skill suggestions"
                  items={suggestions}
                  onAction={(key) => handleSkillSelect(key as string)}
                  renderEmptyState={() => (
                    <div className="p-4 text-slate-400 text-center text-[14px]">No matching skills found.</div>
                  )}
                  className="absolute z-20 w-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 max-h-[200px] overflow-y-auto"
                >
                  {(item) => (
                    <ListBoxItem
                      id={item.id}
                      textValue={item.name}
                      className="px-5 py-3 text-[14px] font-medium text-slate-700 cursor-pointer hover:bg-[#00a18a]/10 hover:text-[#005c4d] transition-colors outline-none data-[focused]:bg-[#00a18a]/10 data-[focused]:text-[#005c4d]"
                    >
                      {item.name}
                    </ListBoxItem>
                  )}
                </ListBox>
              )}
            </Autocomplete>
          </div>

          {/* Skills Chips */}
          <div className="flex flex-wrap gap-3 mb-12">
            {INITIAL_SKILLS_SUGGESTIONS.filter(skill => !selectedSkillNames.includes(skill)).map((skillName) => {
              const isSelected = selectedSkillNames.includes(skillName);
              return (
                <div
                  key={skillName}
                  onClick={() => toggleSkill(skillName)}
                  className={`
                    px-5 py-2.5 rounded-2xl text-[14px] font-bold transition-all cursor-pointer border-2
                    ${isSelected
                      ? 'bg-[#005c4d] border-[#005c4d] text-white shadow-lg shadow-[#005c4d]/20'
                      : 'bg-[#f1f5f9] border-transparent text-slate-500 hover:bg-[#e2e8f0]'
                    }
                  `}
                >
                  [ {skillName} ]
                </div>
              );
            })}
          </div>

          {/* My Skills Section */}
          <div>
            <Heading className="text-[#1e293b] font-[900] text-[20px] tracking-tight ml-1">My Skills</Heading>
            {selectedSkillNames.length === 0 ? (
              <p className="mb-8 mt-1 text-slate-500 italic">No skill was selected</p>
            ) : (
              <div className="flex flex-wrap gap-3 mt-5">
                {selectedSkillNames.map((skillName) => (
                  <div
                    key={skillName}
                    onClick={() => toggleSkill(skillName)}
                    className="px-5 py-2.5 rounded-2xl bg-[#005c4d] text-white text-[14px] font-bold cursor-pointer hover:opacity-80"
                  >
                    [ {skillName} ]
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Adaptive Input Fields */}
          <AnimatePresence mode="popLayout">
            {selectedSkillNames.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 mb-10 mt-10"
              >
                <Heading className="text-[#1e293b] font-[900] text-[20px] tracking-tight ml-1">Adaptive Input Fields</Heading>

                <div className="space-y-4">
                  {selectedSkillNames.map((skillName) => {
                    const isExpanded = expandedSkills.includes(skillName);
                    const currentLength = (currentSkills[skillName] || '').length;

                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={skillName}
                        className="border-2 border-[#00a18a]/10 rounded-[28px] overflow-hidden bg-slate-50/30"
                      >
                        {/* Toggle Header */}
                        <button
                          type="button"
                          onClick={() => toggleExpand(skillName)}
                          className="w-full flex items-center justify-between p-6 hover:bg-[#00a18a]/5 transition-colors text-left"
                        >
                          <p className="text-[#1e293b] font-bold text-[16px]">
                            "Tell us a bit about your work with <span className="text-[#00a18a]">{skillName}</span>."
                          </p>
                          <div className="flex items-center gap-3">
                            {(currentSkills[skillName] || '').trim().length > 0 && (
                              <motion.span
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="material-symbols-outlined text-[20px] text-[#00a18a] bg-[#00a18a]/10 p-1.5 rounded-lg"
                              >
                                edit_note
                              </motion.span>
                            )}
                            <div className={`text-[#00a18a] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                              <span className="material-symbols-outlined font-bold text-[24px]">
                                expand_more
                              </span>
                            </div>
                          </div>
                        </button>

                        {/* Collapsible Content */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                              <div className="p-6 pt-0">
                                <Controller
                                  name={skillName}
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      className="w-full relative"
                                      isInvalid={!!errors[skillName]}
                                    >
                                      <TextArea
                                        {...field}
                                        value={field.value ?? ""}
                                        maxLength={600}
                                        placeholder={`Feel free to write naturally. e.g., working with ${skillName} in...`}
                                        className="w-full bg-white border-2 border-[#00a18a]/20 rounded-2xl p-5 pb-10 text-[16px] placeholder:text-slate-300 focus:border-[#00a18a] outline-none transition-all font-medium text-slate-700 shadow-sm min-h-[140px] resize-none"
                                      />
                                      <div className={`absolute bottom-4 right-5 text-[12px] font-bold transition-colors ${currentLength >= 550 ? 'text-red-400' : 'text-slate-300'}`}>
                                        {currentLength}/600
                                      </div>
                                      {errors[skillName] && <FieldError className="text-red-500 text-sm mt-1">{errors[skillName]?.message as string}</FieldError>}
                                    </TextField>
                                  )}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pro Tip */}
          <div className="bg-[#eefcf9] border-l-[6px] border-[#00a18a] p-5 rounded-2xl flex gap-4 items-start mb-8">
            <div className="bg-[#00a18a] p-2.5 rounded-xl shrink-0 mt-1">
              <Sparkles size={20} className="text-white fill-white/20" />
            </div>
            <p className="text-[#1e293b] text-[14px] leading-relaxed">
              <span className="font-bold">Pro Tip:</span> Sharing details about performance gains (like 'reduced battery drain by 40%') helps our AI prioritize your key achievements.
            </p>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-between">
            <Button
              onPress={close}
              className="text-[#008f7a] font-bold text-[17px] hover:text-[#005c4d] transition-colors outline-none cursor-pointer"
            >
              Skip for now
            </Button>
            <Button
              type="submit"
              className="bg-[#005c4d] hover:bg-[#004d40] text-white font-bold py-4.5 px-10 rounded-[20px] transition-all shadow-xl shadow-[#005c4d]/20 active:scale-[0.98] text-[17px] cursor-pointer"
            >
              Save & Continue to Arsenal
            </Button>
          </div>
        </form>
      )}
    </StepModal>
  );
};

export default Step2Modal;
