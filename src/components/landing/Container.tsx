export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full px-6 lg:px-12 max-w-[1200px] xl:max-w-[1366px] 2xl:max-w-[1440px] ${className}`}>
      {children}
    </div>
  );
}
