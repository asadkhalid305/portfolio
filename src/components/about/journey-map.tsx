import { DottedMap, type Marker } from "@/components/ui/dotted-map";

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
    size: 2.1,
  },
  {
    label: "Berlin, Germany",
    lat: 52.52,
    lng: 13.405,
    placement: "left",
    size: 2.1,
  },
];

export default function JourneyMap() {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-black/10 bg-c-semidark px-3 py-4 sm:px-5 sm:py-5">
      <DottedMap<JourneyLocation>
        aria-label="Map showing the journey from Pakistan to Berlin, Germany"
        className="h-auto w-full text-slate-400"
        dotColor="rgba(15, 23, 42, 0.22)"
        dotRadius={0.2}
        mapSamples={2600}
        markerColor="#0A66C2"
        markers={locations}
        renderMarkerOverlay={({ marker, r, x, y }) => {
          const labelHeight = 7;
          const labelWidth = marker.label.length * 2.7 + 9;
          const labelX =
            marker.placement === "right"
              ? x + r + 2.5
              : x - r - labelWidth - 2.5;

          return (
            <g aria-hidden="true">
              <circle cx={x} cy={y} fill="white" r={r * 0.62} />
              <rect
                fill="rgba(255, 255, 255, 0.94)"
                height={labelHeight}
                rx={labelHeight / 2}
                stroke="rgba(10, 102, 194, 0.26)"
                strokeWidth={0.45}
                width={labelWidth}
                x={labelX}
                y={y - labelHeight / 2}
              />
              <text
                fill="#0F172A"
                fontSize={3.1}
                fontWeight={700}
                x={labelX + 4.5}
                y={y + 1.05}
              >
                {marker.label}
              </text>
            </g>
          );
        }}
      />
      <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        Pakistan → Berlin
      </figcaption>
    </figure>
  );
}
