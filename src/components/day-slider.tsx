import * as SliderPrimitive from "@radix-ui/react-slider";

export default function DaysSlider({
  days,
  setDays,
}: {
  days: number;
  setDays: (days: number) => void;
}) {
  return (
   <SliderPrimitive.Root
  className="relative flex touch-none select-none items-center w-full h-8"
  min={1}
  max={60}
  step={1}
  value={[days]}
  onValueChange={(value: number[]) => setDays(value[0])}
  aria-label="Project duration in days"
>
  <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
    <SliderPrimitive.Range className="absolute h-full bg-accent-mint" />
  </SliderPrimitive.Track>

  <SliderPrimitive.Thumb
    className="transition-all duration-200 ease-in-out relative z-10 block size-4 rounded-full border-4 border-white bg-accent-mint shadow-md focus:outline-none p-[6px]"
    aria-valuetext={`${days} day${days > 1 ? 's' : ''}`}
  />
</SliderPrimitive.Root>
  );
}
