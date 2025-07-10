export function ToolVideo({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow mb-6">
      <iframe
        src={videoUrl}
        title="Tool Video Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-64 md:h-96 rounded-xl border"
      />
    </div>
  )
}
