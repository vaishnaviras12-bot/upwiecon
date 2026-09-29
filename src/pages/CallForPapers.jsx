import { Cpu } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { callForPapersMeta, tracks } from '../data/tracks'

export default function CallForPapers() {
  return (
    <PageLayout title="Call for Papers">
      <PageHero eyebrow={callForPapersMeta.eyebrow} title="Call for Papers" subtitle={callForPapersMeta.recordNumber} />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Tracks" title="Call for Papers" subtitle={callForPapersMeta.intro} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <Card key={t.title} title={t.title} icon={Cpu}>
              {t.body}
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-navy-500">
          © 2027 UPWIECON 2027. All rights reserved. | Submit your papers and be part of cutting-edge
          research!
        </p>
      </section>
    </PageLayout>
  )
}
