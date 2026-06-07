type SectionTitleProps = {
  children: React.ReactNode;
  color?: string;   
  rotate?: 'left' | 'right' | 'none';
  className?: string;
};

export default function SectionTitle({
  children,
  color = 'bg-neo-green',
  rotate = 'right',
  className = '',
}: SectionTitleProps) {
  const rotateClass = rotate === 'right' ? 'rotate-1' : rotate === 'left' ? '-rotate-1' : '';

  return (
    <div className={`mb-16 flex justify-center transition-all duration-700 ease-out ${className}`}>
      <h2
        className={`inline-block border-4 border-black ${color} px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo ${rotateClass} hover:rotate-0 hover:-translate-y-1 transition-all`}
      >
        {children}
      </h2>
    </div>
  );
}