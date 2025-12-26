import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BentoCardProps {
  title: string
  description: string
  icon?: ReactNode
  delay?: number
}

export const BentoCard = ({
  title,
  description,
  icon,
  delay = 0,
}: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, y: 0, scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1,
        // boxShadow: '0px 20px 40px rgba(0,0,0,0.12)',
      }}
      className="group relative overflow-hidden rounded-2xl  p-6 transition-all  shadow-md"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500  " />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-12 w-12 items-center justify-center rounded-xl "
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-semibold ">
          {title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
