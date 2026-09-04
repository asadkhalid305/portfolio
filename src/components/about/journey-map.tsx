import { DottedMap, type Marker } from "@/components/ui/dotted-map";
import CardShell from "@/components/ui/card-shell";

type JourneyLocation = Marker & {
  label: string;
  placement: "left" | "right";
};

const locations: JourneyLocation[] = [
  {
    label: "Pakistan",
    lat: 33.6844,
    lng: 73.0479,
    placement: "right",
    pulse: false,
    size: 2.1,
  },
  {
    label: "Berlin, Germany",
    lat: 52.52,
    lng: 13.405,
    placement: "left",
    pulse: true,
    size: 2.1,
  },
];

export default function JourneyMap() {
  return (
    <CardShell
      className="rounded-[2rem]"
      contentClassName="grid text-white lg:grid-cols-[0.8fr_1.2fr]"
      featured
    >
      <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
          <span>2022</span>
          <span aria-hidden="true" className="h-px w-8 bg-blue-300/60" />
          <span>The move</span>
        </div>
        <h3 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
          Pakistan became Berlin.
        </h3>
        <p className="mt-4 max-w-md text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
          A new country, language, and professional environment turned the next
          chapter into another beginning.
        </p>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          One move · another reset
        </p>
      </div>

      <figure className="relative min-h-64 border-t border-white/10 bg-slate-950 px-3 py-5 sm:min-h-80 sm:px-6 lg:border-l lg:border-t-0">
        <DottedMap<JourneyLocation>
          aria-label="Map showing the journey from Pakistan to Berlin, Germany"
          className="h-full w-full text-slate-500"
          dotColor="rgba(255, 255, 255, 0.26)"
          dotRadius={0.23}
          mapSamples={3200}
          markerColor="#0A66C2"
          markers={locations}
          pulse
          renderMarkerOverlay={({ marker, r, x, y }) => {
            const labelHeight = 7;
            const labelPadding = 3.5;
            const labelWidth = marker.label.length * 2.15 + labelPadding * 2;
            const labelX =
              marker.placement === "right"
                ? x + r + 2.5
                : x - r - labelWidth - 2.5;

            return (
              <g aria-hidden="true">
                <circle cx={x} cy={y} fill="white" r={r * 0.58} />
                <rect
                  fill="rgba(15, 23, 42, 0.94)"
                  height={labelHeight}
                  rx={labelHeight / 2}
                  stroke="rgba(96, 165, 250, 0.75)"
                  strokeWidth={0.5}
                  width={labelWidth}
                  x={labelX}
                  y={y - labelHeight / 2}
                />
                <text
                  fill="white"
                  fontSize={3.1}
                  fontWeight={700}
                  x={labelX + labelPadding}
                  y={y + 1.05}
                >
                  {marker.label}
                </text>
              </g>
            );
          }}
        />
        <figcaption className="sr-only">
          Relocation from Pakistan to Berlin, Germany in 2022
        </figcaption>
      </figure>
    </CardShell>
  );
}
