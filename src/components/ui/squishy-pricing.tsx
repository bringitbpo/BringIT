import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  label: string;
  monthlyPrice: string;
  description: string;
  cta: string;
  accentColor: string;
  BGComponent: React.ComponentType<{ color: string }>;
  features: string[];
  bestFor: string;
  popular?: boolean;
  onOpenSignIn: () => void;
}

export const SquishyPricing = ({ onOpenSignIn }: { onOpenSignIn: () => void }) => {
  return (
    <section id="pricing" className="bg-bg-secondary px-6 py-24 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Pricing <span className="gradient-text italic">Built For Scale</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/50 text-xl"
          >
            Per month per store.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <PricingCard
            label="STARTER"
            monthlyPrice="149"
            bestFor="Single-store owners"
            description="Essential visibility and core operations support."
            cta="Get Started"
            accentColor="#4A7FD4"
            BGComponent={BGComponent1}
            onOpenSignIn={onOpenSignIn}
            features={[
              "Review replies",
              "Complaint logging",
              "Daily reminders",
              "Follow-up tracking",
              "Calendar scheduling",
              "Admin support",
              "Task tracking",
              "Limited support"
            ]}
          />
          <PricingCard
            label="GROWTH"
            monthlyPrice="299"
            bestFor="Busy owners needing full control"
            popular={true}
            description="Comprehensive management for growing restaurants."
            cta="Book Strategy Call"
            accentColor="#7B5EA7"
            BGComponent={BGComponent2}
            onOpenSignIn={onOpenSignIn}
            features={[
              "Everything in Starter +",
              "Vendor coordination",
              "Hiring coordination",
              "Uber Eats / OLO monitoring",
              "Missed order alerts",
              "Dispute handling",
              "Weekly reports",
              "Weekly owner summary",
              "Light social media support"
            ]}
          />
          <PricingCard
            label="PREMIUM"
            monthlyPrice="499"
            bestFor="Multi-store operators"
            description="Mission-critical concierge for maximum oversight."
            cta="Enquire Premium"
            accentColor="#E8921A"
            BGComponent={BGComponent3}
            onOpenSignIn={onOpenSignIn}
            features={[
              "Everything in Growth +",
              "Staff attendance tracking",
              "Inventory follow-up",
              "Procurement coordination",
              "Refund recovery system",
              "CCTV review support",
              "Legal/insurance coordination",
              "Multi-location reporting",
              "Expansion support",
              "Dedicated account manager"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ label, monthlyPrice, description, cta, accentColor, BGComponent, features, popular, bestFor, onOpenSignIn }: PricingCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
      variants={{ hover: { scale: 1.05 } }}
      className={cn(
        "relative h-[680px] w-85 shrink-0 overflow-hidden rounded-[2.5rem] p-8 shadow-2xl transition-all glass border-white/5 flex flex-col",
        popular && "ring-2 ring-brand-blue/50 shadow-brand-blue/20 bg-white/[0.02]"
      )}
    >
      {popular && (
        <div className="absolute top-4 right-4 z-20 gradient-btn text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
          Most Popular
        </div>
      )}

      <div className="relative z-10 h-full flex flex-col">
        <h3 className={cn(
          "text-3xl font-serif font-black tracking-tight mb-4 italic bg-clip-text text-transparent bg-gradient-to-r",
          label === "STARTER" && "from-brand-blue to-brand-gradient-blue",
          label === "GROWTH" && "from-brand-blue to-brand-purple",
          label === "PREMIUM" && "from-brand-purple to-brand-orange"
        )}>
          {label}
        </h3>

        <motion.div
           initial={{ scale: 0.85 }}
           variants={{ hover: { scale: 1 } }}
           transition={{ duration: 0.8, ease: "backInOut" }}
           className="origin-top-left"
        >
            <div className="flex items-baseline gap-1">
                <span className="font-serif text-6xl font-black text-white">${monthlyPrice}</span>
                <span className="text-white/40 text-sm font-medium">/mo</span>
            </div>
            <p className="text-sm font-bold text-brand-blue mt-2 h-5">{bestFor}</p>
            <p className="text-sm font-medium text-white/50 mt-4 h-10">{description}</p>
        </motion.div>
        
        <div className="space-y-3 mt-8 mb-8 flex-grow overflow-y-auto custom-scrollbar pr-2">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 size={14} className={cn("mt-1 shrink-0", f.includes('+') ? "text-brand-purple" : "text-brand-blue")} />
              <span className={cn(
                "text-sm leading-tight",
                f.includes('+') ? "text-white font-bold" : "text-white/60"
              )}>{f}</span>
            </div>
          ))}
        </div>

        <button 
            onClick={onOpenSignIn}
            className={cn(
              "w-full py-4 rounded-xl font-bold transition-all relative z-20",
              popular ? "gradient-btn" : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
            )}
        >
          {cta}
        </button>
      </div>
      <BGComponent color={accentColor} />
    </motion.div>
  );
};

const BGComponent1 = ({ color }: { color: string }) => (
  <motion.svg
    width="320"
    height="680"
    viewBox="0 0 320 680"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5, rotate: 10 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 opacity-10 pointer-events-none"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160"
      cy="180"
      r="140"
      fill={color}
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160"
      cy="450"
      rx="140"
      ry="60"
      fill={color}
    />
  </motion.svg>
);

const BGComponent2 = ({ color }: { color: string }) => (
  <motion.svg
    width="320"
    height="680"
    viewBox="0 0 320 680"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.1 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 opacity-10 pointer-events-none"
  >
    <motion.rect
      x="20"
      width="200"
      height="200"
      rx="40"
      fill={color}
      variants={{ hover: { y: 350, rotate: "45deg", scale: 1.2 } }}
      style={{ y: 80 }}
      transition={{ delay: 0.1, duration: 1.2, ease: "backInOut" }}
    />
    <motion.rect
      x="100"
      width="220"
      height="220"
      rx="40"
      fill={color}
      variants={{ hover: { y: 80, rotate: "-45deg", scale: 1.2 } }}
      style={{ y: 350 }}
      transition={{ delay: 0.2, duration: 1.2, ease: "backInOut" }}
    />
  </motion.svg>
);

const BGComponent3 = ({ color }: { color: string }) => (
  <motion.svg
    width="320"
    height="680"
    viewBox="0 0 320 680"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.3 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 opacity-10 pointer-events-none"
  >
    <motion.path
      variants={{ hover: { y: -100, rotate: 10 } }}
      transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
      d="M140 250 C150 230 170 230 180 250 L300 450 C310 470 300 490 280 490 L40 490 C20 490 10 470 20 450 Z"
      fill={color}
    />
    <motion.path
      variants={{ hover: { y: -60, rotate: -10 } }}
      transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      d="M140 120 C150 100 170 100 180 120 L300 320 C310 340 300 360 280 360 L40 360 C20 360 10 340 20 320 Z"
      fill={color}
    />
  </motion.svg>
);

