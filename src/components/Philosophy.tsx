import { motion } from 'motion/react';

export default function Philosophy() {
  const pillars = [
    {
      number: '01',
      title: 'PERSONAL EXPRESSION',
      description: 'A design that reflects the idea, inspiration, and meaning behind your tattoo.'
    },
    {
      number: '02',
      title: 'ATTENTION TO DETAIL',
      description: 'Thoughtful composition, careful execution, and a considered artistic process.'
    },
    {
      number: '03',
      title: 'A PERSONAL EXPERIENCE',
      description: 'A clear conversation about your concept, placement, references, and expectations.'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0c0c0c] border-t border-[#181818] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#B51F2D] font-bold mb-3">
            Artistic Philosophy
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wide text-[#F2EEE7]">
            WHY THE RIGHT TATTOO MATTERS.
          </h2>
        </div>

        {/* 3 Brand Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative p-8 bg-[#121212] border border-[#202020] hover:border-[#B51F2D]/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                {/* Large Distinctive Number */}
                <span className="font-display text-4xl sm:text-5xl font-black text-[#B51F2D]/90 group-hover:text-[#B51F2D] transition-colors tracking-tight">
                  {pillar.number}
                </span>

                {/* Pillar Title */}
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-widest text-[#F2EEE7]">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="mt-4 text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="mt-8 pt-4 border-t border-[#1c1c1c] flex items-center justify-between text-[10px] uppercase tracking-widest text-[#555]">
                <span>BADAZZTATTOO Standard</span>
                <span className="w-5 h-[1px] bg-[#333] group-hover:bg-[#B51F2D] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
