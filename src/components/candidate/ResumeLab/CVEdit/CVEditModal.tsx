"use client";

import React from "react";
import { X, Plus, Trash2, Save, Loader2, User, FileText, Briefcase, Wrench, GraduationCap } from "lucide-react";
import { CV } from "@/store/types/cv";
import { useCVEditModal, TabType } from "./useCVEditModal";
import { CVEditHeader } from "./CVEditHeader";

interface CVEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  cv: CV | null;
}

export function CVEditModal({ isOpen, onClose, cv }: CVEditModalProps) {
  const {
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
  } = useCVEditModal({ isOpen, onClose, cv });

  if (!isOpen || !cv) return null;

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "basics", label: "Contact & Basics", icon: <User className="w-4 h-4" /> },
    { id: "summary", label: "Summary", icon: <FileText className="w-4 h-4" /> },
    { id: "experience", label: "Work Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Wrench className="w-4 h-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-[2rem] w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl border border-slate-100/50 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <CVEditHeader
          cv={cv}
          onSave={handleSave}
          isSaving={isSaving}
          onClose={onClose}
        />

        {/* Layout Body */}
        <div className="flex-grow flex overflow-hidden">
          {/* Sidebar Tabs */}
          <aside className="w-64 border-r border-slate-100 bg-slate-50/30 p-6 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 text-left ${
                  activeTab === tab.id
                    ? "bg-teal-50 text-[#026b5d] shadow-sm"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </aside>

          {/* Form Content Area */}
          <main className="flex-grow p-8 overflow-y-auto no-scrollbar bg-slate-50/10">
            {activeTab === "basics" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Contact & Basics</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Update your primary personal details, role preferences, and social links.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jane Doe"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Target Role
                    </label>
                    <input
                      type="text"
                      value={targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      placeholder="Senior Frontend Engineer"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane.doe@example.com"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Country
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="United States"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="San Francisco"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      LinkedIn Link
                    </label>
                    <input
                      type="text"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Portfolio URL
                    </label>
                    <input
                      type="text"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      placeholder="https://myportfolio.com"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      GitHub URL
                    </label>
                    <input
                      type="text"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      placeholder="https://github.com/username"
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "summary" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Professional Summary</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Describe your professional narrative and top value propositions.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Summary Description
                  </label>
                  <textarea
                    rows={12}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Write a concise overview of your background, technical abilities, and focus..."
                    className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white resize-y"
                  />
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Work Experience</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Manage your chronological professional career.
                    </p>
                  </div>
                  <button
                    onClick={handleAddExperience}
                    className="flex items-center gap-1.5 px-4 py-2 bg-teal-50 hover:bg-teal-100 text-[#026b5d] font-bold text-xs rounded-lg transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Role</span>
                  </button>
                </div>

                {experience.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm">
                    No work experience listed yet. Click "Add Role" to add one.
                  </div>
                ) : (
                  <div className="space-y-6">
                    {experience.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative group"
                      >
                        <button
                          onClick={() => handleRemoveExperience(index)}
                          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                          aria-label="Remove experience"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Company Name
                            </label>
                            <input
                              type="text"
                              value={item.company}
                              onChange={(e) =>
                                handleExperienceChange(index, "company", e.target.value)
                              }
                              placeholder="Google"
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Role Tag / Title
                            </label>
                            <input
                              type="text"
                              value={item.roleTag}
                              onChange={(e) =>
                                handleExperienceChange(index, "roleTag", e.target.value)
                              }
                              placeholder="Software Engineer"
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Start Date
                            </label>
                            <input
                              type="text"
                              value={item.startDate}
                              onChange={(e) =>
                                handleExperienceChange(index, "startDate", e.target.value)
                              }
                              placeholder="MM/YYYY or YYYY"
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              End Date
                            </label>
                            <input
                              type="text"
                              value={item.endDate || ""}
                              disabled={item.isCurrent}
                              onChange={(e) =>
                                handleExperienceChange(index, "endDate", e.target.value)
                              }
                              placeholder={item.isCurrent ? "Present" : "MM/YYYY or YYYY"}
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white disabled:bg-slate-100 disabled:text-slate-400"
                            />
                          </div>

                          <div className="flex items-center gap-2 col-span-2">
                            <input
                              type="checkbox"
                              id={`current-${index}`}
                              checked={item.isCurrent}
                              onChange={(e) => {
                                handleExperienceChange(index, "isCurrent", e.target.checked);
                                if (e.target.checked) {
                                  handleExperienceChange(index, "endDate", "");
                                }
                              }}
                              className="rounded border-slate-300 text-[#026b5d] focus:ring-[#026b5d] w-4 h-4 cursor-pointer"
                            />
                            <label
                              htmlFor={`current-${index}`}
                              className="text-sm font-semibold text-slate-600 cursor-pointer"
                            >
                              This is my current role
                            </label>
                          </div>

                          <div className="flex flex-col gap-1.5 col-span-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Description
                            </label>
                            <textarea
                              rows={4}
                              value={item.description}
                              onChange={(e) =>
                                handleExperienceChange(index, "description", e.target.value)
                              }
                              placeholder="Describe your achievements and key technologies used..."
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white resize-y"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Skills & Tech Stack</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Group your expertise into structured categories.
                    </p>
                  </div>
                  <button
                    onClick={handleAddSkillCategory}
                    className="flex items-center gap-1.5 px-4 py-2 bg-teal-50 hover:bg-teal-100 text-[#026b5d] font-bold text-xs rounded-lg transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Category</span>
                  </button>
                </div>

                {skills.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm">
                    No skills categories added. Click "Add Category" to add one.
                  </div>
                ) : (
                  <div className="space-y-6">
                    {skills.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative group"
                      >
                        <button
                          onClick={() => handleRemoveSkillCategory(index)}
                          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                          aria-label="Remove category"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Category Name
                            </label>
                            <input
                              type="text"
                              value={item.category}
                              onChange={(e) =>
                                handleSkillCategoryChange(index, e.target.value)
                              }
                              placeholder="Languages"
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Skills (Comma-separated)
                            </label>
                            <input
                              type="text"
                              value={item.skills.join(", ")}
                              onChange={(e) => handleSkillTagsChange(index, e.target.value)}
                              placeholder="JavaScript, TypeScript, Python"
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Education</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Manage your educational accomplishments and academic history.
                    </p>
                  </div>
                  <button
                    onClick={handleAddEducation}
                    className="flex items-center gap-1.5 px-4 py-2 bg-teal-50 hover:bg-teal-100 text-[#026b5d] font-bold text-xs rounded-lg transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Academic Entry</span>
                  </button>
                </div>

                {education.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm">
                    No education listings. Click "Add Academic Entry" to add one.
                  </div>
                ) : (
                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative group"
                      >
                        <button
                          onClick={() => handleRemoveEducation(index)}
                          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                          aria-label="Remove academic entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5 col-span-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Institution / School
                            </label>
                            <input
                              type="text"
                              value={item.institution}
                              onChange={(e) =>
                                handleEducationChange(index, "institution", e.target.value)
                              }
                              placeholder="Stanford University"
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5 col-span-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Degree / Field of Study
                            </label>
                            <input
                              type="text"
                              value={item.degree}
                              onChange={(e) =>
                                handleEducationChange(index, "degree", e.target.value)
                              }
                              placeholder="B.S. in Computer Science"
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Start Date
                            </label>
                            <input
                              type="text"
                              value={item.startDate}
                              onChange={(e) =>
                                handleEducationChange(index, "startDate", e.target.value)
                              }
                              placeholder="MM/YYYY or YYYY"
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              End Date
                            </label>
                            <input
                              type="text"
                              value={item.endDate || ""}
                              disabled={item.isOngoing}
                              onChange={(e) =>
                                handleEducationChange(index, "endDate", e.target.value)
                              }
                              placeholder={item.isOngoing ? "Present" : "MM/YYYY or YYYY"}
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white disabled:bg-slate-100 disabled:text-slate-400"
                            />
                          </div>

                          <div className="flex items-center gap-2 col-span-2">
                            <input
                              type="checkbox"
                              id={`ongoing-${index}`}
                              checked={item.isOngoing}
                              onChange={(e) => {
                                handleEducationChange(index, "isOngoing", e.target.checked);
                                if (e.target.checked) {
                                  handleEducationChange(index, "endDate", "");
                                }
                              }}
                              className="rounded border-slate-300 text-[#026b5d] focus:ring-[#026b5d] w-4 h-4 cursor-pointer"
                            />
                            <label
                              htmlFor={`ongoing-${index}`}
                              className="text-sm font-semibold text-slate-600 cursor-pointer"
                            >
                              This education is currently ongoing
                            </label>
                          </div>

                          <div className="flex flex-col gap-1.5 col-span-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Description (Optional)
                            </label>
                            <textarea
                              rows={4}
                              value={item.description}
                              onChange={(e) =>
                                handleEducationChange(index, "description", e.target.value)
                              }
                              placeholder="Describe your thesis, relevant coursework, or honors..."
                              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand transition-all bg-white resize-y"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
