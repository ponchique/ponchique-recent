export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative min-h-screen bg-stone-200">{children}</div>;
}
