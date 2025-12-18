import React from 'react'
import { BentoCard } from './bentoCard'
import { Infinity, Plug, Users } from 'lucide-react'
export const BentoGrid = () => {
  return (
   <section className="mx-auto max-w-7xl px-6 ">
      {/* Heading */}
      <div className="mb-16 max-w-2xl">
       
        <p className="mt-4 text-lg ">
          Everything you need to collaborate faster — free forever, easy to
          integrate, and designed for growing teams.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
        {/* Card 1 */}
        <div className="md:col-span-1 md:row-span-2 ">
          <BentoCard
            title="Free Forever"
            description="Unlimited team members at no cost. Collaboration should never be limited."
            icon={<Infinity size={24} />}
            delay={0.1}
          />
        </div>

        {/* Card 2 */}
        <div className="md:col-span-2">
          <BentoCard
            title="Easy Integrations"
            description="Works with 100+ tools like Google Workspace, Slack, Jira, and more."
            icon={<Plug size={24} />}
            delay={0.2}
          />
        </div>

        {/* Card 3 */}
        <div className="md:col-span-2">
          <BentoCard
            title="Built for Teams"
            description="Create, share, and scale effortlessly as your team grows."
            icon={<Users size={24} />}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}
