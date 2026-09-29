import { Users, BookOpen, GraduationCap, FileText, HeartHandshake } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Card from './Card'
import { objectives } from '../data/conference'

const icons = [Users, BookOpen, GraduationCap, FileText, HeartHandshake]

export default function Highlights() {
  return (
    <section className="bg-navy-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Conference Objectives"
          title="International Conference aims to bring together research scholars, practicing scientists, and industrialists from across the world, especially empowering women in engineering domains."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((o, i) => (
            <Card key={o.title} title={o.title} icon={icons[i % icons.length]}>
              {o.body}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
