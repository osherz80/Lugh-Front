export const Trail = ({ isCompleted }: { isCompleted?: boolean }) => {

  const completedStyle = isCompleted ? "bg-[#00a18a]" : "bg-slate-300 opacity-60"

  return (
    <div className={`flex items-center space-x-2 px-8 transition-all duration-500`}>
      <div className={`w-6 h-2 rounded-full transition-colors duration-500 ${completedStyle}`} />
      <div className={`w-6 h-2 rounded-full transition-colors duration-500 ${completedStyle}`} />
      <div className={`w-6 h-2 rounded-full transition-colors duration-500 ${completedStyle}`} />
    </div>
  );
}
