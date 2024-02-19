export default function HomepageHeroOverlay() {
  return (
    <div className="absolute inset-0">
      <div className="h-[200px] w-full bg-gradient-to-t absolute top-0 left-0 from-transparent to-[rgba(0,0,0,0.7)]"></div>
      <div className="h-[300px] w-full bg-gradient-to-b absolute bottom-0 left-0 from-transparent to-[rgba(0,0,0,0.5)]"></div>
    </div>
  );
}
