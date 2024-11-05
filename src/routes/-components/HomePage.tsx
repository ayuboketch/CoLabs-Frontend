import { useViewer } from "@/lib/tanstack/query/use-viewer";
import { FlipClock } from "@/components/flip-clock/DigitalFlipClock";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";

export function HomePage() {
  const { userQuery } = useViewer();
  const viewer = userQuery?.data?.record;
  return (
    <div className="jusify-center flex h-full min-h-screen w-full flex-col items-center">
      <picture className="fixed inset-0 z-0 size-full">
        <source
          media="(min-width:350px)"
          className="size-full object-fill"
          srcSet="https://picsum.photos/id/56/300/300"
        />
        <source
          media="(min-width:465px)"
          className="size-full object-fill"
          srcSet="https://picsum.photos/id/56/500/500"
        />
        <source
          media="(min-width:865px)"
          className="size-full object-fill"
          srcSet="https://picsum.photos/id/56/800/800"
        />
        <img
          src="https://picsum.photos/id/56/500/500"
          alt="main bg"
          className="size-full object-fill"
        />
      </picture>

      <div className="z-10 flex h-full min-h-screen w-full flex-col items-center justify-evenly gap-5 bg-base-300/70">
        <div className="fixed right-6 top-5">
          <ThemeToggle />
        </div>
        <div className="*:justfy-center grid grid-cols-1 justify-center gap-2 p-[5%] *:flex *:items-center *:rounded-xl *:bg-base-300/40 *:p-5 md:grid-cols-2 lg:grid-cols-2">
          <h1 className="text-7xl font-bold text-primary">
            welcome {viewer?.name}
          </h1>

          <FlipClock />


        </div>
      </div>
    </div>
  );
}
