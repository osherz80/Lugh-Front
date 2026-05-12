import {
  TextField,
  Label,
  Input,
  TextArea,
  Checkbox,
  FieldError
} from 'react-aria-components';
import { Control, Controller, FieldErrors, useWatch } from 'react-hook-form';
import { EducationSchema } from '@/lib/schemas';

interface EducationStationProps {
  index: number;
  control: Control<EducationSchema>;
  errors: FieldErrors<EducationSchema>;
}

export const EducationStation = ({ index, control, errors }: EducationStationProps) => {
  const stationErrors = errors.education?.[index];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-2 gap-6">
        {/* Institution */}
        <Controller
          name={`education.${index}.institution`}
          control={control}
          render={({ field }) => (
            <TextField
              className="flex flex-col gap-2.5"
              value={field.value}
              onChange={field.onChange}
              isInvalid={!!stationErrors?.institution}
            >
              <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Institution / School</Label>
              <Input
                placeholder="e.g., The College of MAMRAM"
                className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
              />
              {stationErrors?.institution && <FieldError className="text-red-500 text-sm ml-1">{stationErrors.institution.message}</FieldError>}
            </TextField>
          )}
        />

        {/* Degree */}
        <Controller
          name={`education.${index}.degree`}
          control={control}
          render={({ field }) => (
            <TextField
              className="flex flex-col gap-2.5"
              value={field.value}
              onChange={field.onChange}
              isInvalid={!!stationErrors?.degree}
            >
              <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Degree / Certification</Label>
              <Input
                placeholder="e.g., Marketing Mastercl"
                className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
              />
              {stationErrors?.degree && <FieldError className="text-red-500 text-sm ml-1">{stationErrors.degree.message}</FieldError>}
            </TextField>
          )}
        />
      </div>

      {/* Timeframe */}
      <div className="space-y-3">
        <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Timeframe</Label>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-4">
            <Controller
              name={`education.${index}.startDate`}
              control={control}
              render={({ field }) => (
                <TextField 
                  className="flex flex-col gap-2"
                  value={field.value}
                  onChange={field.onChange}
                  isInvalid={!!stationErrors?.startDate}
                >
                  <Label className="text-slate-500 font-bold text-[13px] ml-1">Start Date</Label>
                  <Input
                    type="date"
                    className="w-full bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
                  />
                  {stationErrors?.startDate && <FieldError className="text-red-500 text-sm ml-1">{stationErrors.startDate.message}</FieldError>}
                </TextField>
              )}
            />
          </div>

          <div className="md:col-span-4">
            <Controller
              name={`education.${index}.endDate`}
              control={control}
              render={({ field }) => (
                <TextField 
                  className="flex flex-col gap-2"
                  value={field.value}
                  onChange={field.onChange}
                  isInvalid={!!stationErrors?.endDate}
                  isDisabled={useWatch({ control, name: `education.${index}.isOngoing` })}
                >
                  <Label className="text-slate-500 font-bold text-[13px] ml-1">End Date</Label>
                  <Input
                    type="date"
                    className="w-full bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700 disabled:opacity-50"
                  />
                  {stationErrors?.endDate && <FieldError className="text-red-500 text-sm ml-1">{stationErrors.endDate.message}</FieldError>}
                </TextField>
              )}
            />
          </div>

          <div className="md:col-span-4">
            <Controller
              name={`education.${index}.isOngoing`}
              control={control}
              render={({ field }) => (
                <div className="flex flex-col gap-2">
                  <Label className="text-slate-500 font-bold text-[13px] ml-1">Status</Label>
                  <div className="h-[66px] flex items-center bg-[#f1f5f9] rounded-2xl px-5">
                    <Checkbox
                      isSelected={field.value}
                      onChange={field.onChange}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className={`
                        w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                        ${field.value ? 'bg-[#005c4d] border-[#005c4d]' : 'border-slate-300 group-hover:border-[#00a18a] bg-white'}
                      `}>
                        {field.value && <span className="material-symbols-outlined text-white text-[18px] font-bold">check</span>}
                      </div>
                      <span className="text-[#1e293b] font-bold text-[15px]">Ongoing</span>
                    </Checkbox>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3">
        <div>
          <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">The Deep Dive - Specific Courses & Projects</Label>
          <p className="text-slate-500 font-bold text-[14px] ml-1 mt-1">Any specific courses or projects you'd like to highlight? Describe their impact.</p>
        </div>
        <Controller
          name={`education.${index}.description`}
          control={control}
          render={({ field }) => (
            <TextField 
              className="relative"
              isInvalid={!!stationErrors?.description}
            >
              <TextArea
                {...field}
                placeholder="Write naturally. Mention algorithms, major projects, specializations, or what you built during independent learning. (up to 600 chars)"
                className="w-full bg-white border-2 border-[#00a18a]/20 rounded-2xl p-6 pb-12 text-[16px] placeholder:text-slate-300 focus:border-[#00a18a] outline-none transition-all font-medium text-slate-700 shadow-sm min-h-[140px] resize-none leading-relaxed"
              />
              <div className={`absolute bottom-5 right-6 text-[12px] font-bold transition-colors ${(field.value?.length || 0) >= 550 ? 'text-red-400' : 'text-slate-300'}`}>
                {field.value?.length || 0}/600
              </div>
              {stationErrors?.description && <FieldError className="text-red-500 text-sm mt-1">{stationErrors.description.message}</FieldError>}
            </TextField>
          )}
        />
      </div>
    </div>
  );
};
