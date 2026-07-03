// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: VideoSection
// WHAT IT DOES: "Craftsmanship in Motion" section with a gold-framed autoplay muted loop video
// TO CUSTOMIZE: Drop a real video at public/images/sherwani-video.mp4 (it will autoplay). The poster image is video-poster.png. Change the frame via border-gold.
// SEARCH TERM: "HTML5 video autoplay muted loop", "Tailwind border frame", "video poster attribute"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { SectionHeading } from "@/components/section-heading"

export function VideoSection() {
  return (
    <section className="bg-maroon py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading
          label="Behind the Craft"
          title="Craftsmanship in Motion"
          subtitle="Every garment is a labour of love — from the first thread to the final fitting."
          light
        />
        <div className="rounded-sm border-2 border-gold p-2 shadow-2xl">
          {/* If public/images/sherwani-video.mp4 is missing, the poster image is shown */}
          <video
            className="h-auto w-full rounded-sm"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/video-poster.png"
          >
            <source src="/images/sherwani-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
