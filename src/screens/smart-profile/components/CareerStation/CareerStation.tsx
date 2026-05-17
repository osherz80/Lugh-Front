import {
  TextField,
  Label,
  Input,
  TextArea,
  Checkbox,
  FieldError
} from 'react-aria-components';
import { Control, Controller, FieldErrors, useWatch } from 'react-hook-form';
import { ExperienceSchema } from '@/lib/schemas';

interface CareerStationProps {
  index: number;
  control: Control<{ experience: ExperienceSchema }>;
  errors: FieldErrors<{ experience: ExperienceSchema }>;
}

export const CareerStation = ({ index, control, errors }: CareerStationProps) => {
  const stationErrors = errors.experience?.[index];
  const isCurrent = useWatch({
    control,
    name: `experience.${index}.isCurrent`,
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Organization */}
      <Controller
        name={`experience.${index}.company`}
        control={control}
        render={({ field }) => (
          <TextField 
            className="flex flex-col gap-2.5"
            value={field.value}
            onChange={field.onChange}
            isInvalid={!!stationErrors?.company}
          >
            <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Organization/Company</Label>
            <Input
              placeholder="e.g., IDF / Google / Tel Aviv University"
              className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
            />
            {stationErrors?.company && <FieldError className="text-red-500 text-sm ml-1">{stationErrors.company.message}</FieldError>}
          </TextField>
        )}
      />

      {/* Title */}
      <Controller
        name={`experience.${index}.roleTag`}
        control={control}
        render={({ field }) => (
          <TextField 
            className="flex flex-col gap-2.5"
            value={field.value}
            onChange={field.onChange}
            isInvalid={!!stationErrors?.roleTag}
          >
            <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Your Title</Label>
            <Input
              placeholder="e.g., Full Stack Engineer / Marketing Manager / Nurse"
              className="bg-[#f1f5f9] border-none rounded-2xl p-5 text-[16px] placeholder:text-slate-400 focus:ring-2 focus:ring-[#00a18a]/20 outline-none transition-all font-medium text-slate-700"
            />
            {stationErrors?.roleTag && <FieldError className="text-red-500 text-sm ml-1">{stationErrors.roleTag.message}</FieldError>}
          </TextField>
        )}
      />

      {/* Timeframe */}
      <div className="space-y-3">
        <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">Timeframe</Label>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-4">
            <Controller
              name={`experience.${index}.startDate`}
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
              name={`experience.${index}.endDate`}
              control={control}
              render={({ field }) => (
                <TextField 
                  className="flex flex-col gap-2"
                  value={field.value}
                  onChange={field.onChange}
                  isInvalid={!!stationErrors?.endDate}
                  isDisabled={isCurrent}
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
              name={`experience.${index}.isCurrent`}
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
                      <span className="text-[#1e293b] font-bold text-[15px]">Current Role</span>
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
          <Label className="text-[#1e293b] font-[800] text-[16px] ml-1">The Mission - Detailed Description</Label>
          <p className="text-slate-500 font-bold text-[14px] ml-1 mt-1">"What was your primary mission here? Tell us your story."</p>
        </div>
        <Controller
          name={`experience.${index}.description`}
          control={control}
          render={({ field }) => (
            <TextField 
              className="relative"
              isInvalid={!!stationErrors?.description}
            >
              <TextArea
                {...field}
                placeholder="Write naturally. Explain your core responsibilities, key achievements, or a problem you solved (e.g., Managed a nationwide transportation system, Ensuring 99.9% uptime...). (up to 600 chars)"
                className="w-full bg-white border-2 border-[#00a18a]/20 rounded-2xl p-6 pb-12 text-[16px] placeholder:text-slate-300 focus:border-[#00a18a] outline-none transition-all font-medium text-slate-700 shadow-sm min-h-[160px] resize-none leading-relaxed"
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
