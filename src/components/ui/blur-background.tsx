export function BlurBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="absolute bottom-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_100%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
    </div>
  );
}
