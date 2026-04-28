import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { SquishyPricing } from '@/src/components/ui/squishy-pricing';
import { SignInPage } from '@/src/components/ui/sign-in-flow-1';
import { ContainerScroll } from '@/src/components/ui/container-scroll-animation';
import {
  Menu,
  X,
  XCircle,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Users,
  ShieldCheck,
  Scale,
  Zap,
  BarChart3,
  Clock,
  ArrowRight,
  Plus,
  Minus,
  MessageSquare,
  Mail,
  Smartphone,
  ChevronDown,
  Timer,
  Eye,
  FileSearch,
  Check
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = ({ onOpenSignIn }: { onOpenSignIn: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#problems' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg ring-1 ring-white/20">
            B
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">Bring<span className="gradient-text">IT</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenSignIn}
              className="text-sm font-bold text-white/50 hover:text-white transition-colors"
            >
              Login
            </button>
            <button 
              onClick={onOpenSignIn}
              className="gradient-btn px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-secondary border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="gradient-btn px-6 py-3 rounded-xl text-center font-semibold"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="text-center py-2 text-white/50 font-bold"
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenSignIn }: { onOpenSignIn: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-blue mb-6 uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          Remote Operations & Revenue Control
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-brand-orange text-sm font-black uppercase tracking-[0.4em] mb-4"
        >
          Back Office Made Easy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1]"
        >
          Stop Losing Money From <br className="hidden md:block" />
          <span className="gradient-text italic">Small Daily Mistakes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          BringIT helps restaurant owners stay in control with remote back-office operations, revenue protection, and daily accountability systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button 
            onClick={onOpenSignIn}
            className="gradient-btn px-8 py-4 rounded-full text-lg font-bold w-full sm:w-auto"
          >
            Book Free Strategy Call
          </button>
          <a 
            href="#pricing"
            className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full text-lg font-bold w-full sm:w-auto transition-all text-center"
          >
            See Pricing
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/40 text-sm mb-20 italic"
        >
          We don’t replace your manager — we make sure nothing slips.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: 'Revenue Leakage Prevented', val: '6%–15%+', icon: <TrendingUp className="text-brand-blue" /> },
            { label: 'Hidden Annual Loss Per Store', val: '$150K+', icon: <AlertCircle className="text-brand-orange" /> },
            { label: 'Operational Visibility', val: '24/7', icon: <ShieldCheck className="text-brand-purple" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl text-left relative overflow-hidden"
            >
              <div className="mb-4 bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-serif font-bold mb-2">{stat.val}</div>
              <div className="text-white/50 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              {/* Subtle line background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-12 -translate-y-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DashboardPreview = () => {
  return (
    <section className="bg-bg-primary overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Total Visibility Over <br />
              <span className="gradient-text italic font-black">Your Operations</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Our remote team monitors your store in real-time, catching mistakes before they hit your bottom line.
            </p>
          </div>
        }
      >
        <div className="relative w-full h-full bg-bg-secondary p-8 flex flex-col gap-6 overflow-hidden">
          {/* Mock Dashboard Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <div className="flex items-center gap-4">
              <img 
                src="/input_file_0.png" 
                alt="BringIT Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                All Systems Normal
              </div>
            </div>
          </div>

          {/* Mock Dashboard Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
            {[
              { label: 'Revenue At Risk', val: '$1,240', status: 'Warning', color: 'text-brand-orange' },
              { label: 'Unresolved Refunds', val: '14', status: 'Alert', color: 'text-brand-purple' },
              { label: 'Store Efficiency', val: '94%', status: 'Healthy', color: 'text-brand-blue' }
            ].map((card, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-white/5 flex flex-col justify-between h-40">
                <p className="text-xs font-black uppercase tracking-widest text-white/30">{card.label}</p>
                <div className={cn("text-3xl font-serif font-bold", card.color)}>{card.val}</div>
                <div className="text-[10px] text-white/40 font-medium">{card.status} state detected</div>
              </div>
            ))}
            
            {/* Live Feed Mockup */}
            <div className="md:col-span-3 glass p-6 rounded-2xl border-white/5 flex-grow relative overflow-hidden bg-white/[0.01]">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xs font-black uppercase tracking-widest text-white/40">Critical Incident Log</h5>
                <span className="text-[10px] text-brand-blue">Live Update • 2s ago</span>
              </div>
              <div className="space-y-4">
                {[
                  { time: '14:22', icon: <XCircle className="text-red-500" />, text: 'UberEats Tablet Offline - Store #104. Contacting manager...', status: 'In Progress' },
                  { time: '14:05', icon: <CheckCircle2 className="text-green-500" />, text: 'Staffing Shortage Resolved at store #082 via backup agency.', status: 'Completed' },
                  { time: '13:45', icon: <AlertCircle className="text-brand-orange" />, text: 'Suspicious Refund Detected ($45.99) - Logged for owner review.', status: 'Pending Review' }
                ].map((log, i) => (
                  <div key={i} className="flex items-center gap-4 text-xs">
                    <span className="text-white/20 font-mono">{log.time}</span>
                    <div className="shrink-0">{log.icon}</div>
                    <span className="text-white/70 flex-grow">{log.text}</span>
                    <span className="text-white/30 italic">{log.status}</span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-secondary to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

const TrustBar = () => {
  const brands = [
    'Cold Stone Creamery',
    'Dunkin’',
    'Baskin Robbins',
    'Charleys Cheesesteaks & Wings',
  ];

  return (
    <section className="bg-bg-secondary py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-10">Trusted Operations Familiarity With</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-serif font-semibold tracking-tight">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Problems = () => {
  const problems = [
    { title: 'Inventory Shrinkage', icon: <Scale /> },
    { title: 'Missed Online Orders', icon: <Timer /> },
    { title: 'Labor Inefficiency', icon: <Users /> },
    { title: 'Refund Abuse', icon: <AlertCircle /> },
    { title: 'Staff Accountability Issues', icon: <Eye /> },
    { title: 'Compliance Deadlines', icon: <FileSearch /> },
  ];

  const extra = [
    'Equipment Breakdowns',
    'Customer Complaints',
    'Expansion Stress',
    'Owner Burnout',
  ];

  return (
    <section id="problems" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">The Hidden Leaks Costing <br /> Restaurants <span className="gradient-text italic">Thousands</span></h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
             Restaurants lose <span className="text-brand-orange font-bold">6%–15%+</span> of annual revenue through preventable operational leakage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-brand-blue/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="glass p-12 rounded-[2.5rem] bg-gradient-to-br from-bg-card to-bg-primary overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Also Addressing:</h3>
              <div className="grid grid-cols-2 gap-4">
                {extra.map(item => (
                  <div key={item} className="flex items-center gap-3 text-white/60">
                    <CheckCircle2 size={18} className="text-brand-orange shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block p-8 bg-brand-orange/10 border border-brand-orange/20 rounded-3xl">
                <p className="text-lg text-white/70 mb-2">Example Loss Calculation:</p>
                <div className="text-4xl font-sans font-black text-brand-orange">
                  A $1M store can lose <span className="">$150,000/year.</span>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative leak circles */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-orange/5 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
};

const WhyBringIT = () => {
  const points = [
    "We prevent small mistakes that quietly cost money",
    "We monitor delivery platforms so you don’t miss sales",
    "We track tasks until they are completed",
    "We reduce refund losses",
    "We improve owner visibility without needing to be in-store",
    "We help owners scale without chaos"
  ];

  return (
    <section className="py-24 px-6 bg-bg-secondary relative">
       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Why Owners <br /><span className="gradient-text italic">Choose BringIT</span></h2>
            <div className="space-y-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <div className="mt-1 w-6 h-6 bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <p className="text-lg text-white/80 font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple blur-[100px] opacity-20 rounded-full" />
              <div className="relative z-10 glass rounded-[3rem] p-1 shadow-2xl h-full flex flex-col items-center justify-center">
                 <div className="text-center p-8">
                    <div className="mb-6 mx-auto w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center animate-bounce">
                      <ShieldCheck className="text-brand-blue w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-4">Peace of Mind</h3>
                    <p className="text-white/50 leading-relaxed">
                      "Since starting with BringIT, it's like I have a second pair of eyes that never sleep. I finally focus on my next store instead of stressing over this one."
                    </p>
                 </div>
                 {/* Floating badge */}
                 <div className="absolute -top-4 -right-4 glass px-6 py-3 rounded-full shadow-xl border-brand-blue/20 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Active Protection</span>
                 </div>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "We Identify Operational Leaks",
      description: "Our back-office team deep dives into your POS reports and operational patterns to find exactly where money is disappearing.",
      image: <BarChart3 className="text-brand-blue w-24 h-24" />,
      badges: ["Audit Active", "Report Generated"]
    },
    {
      title: "We Monitor + Follow Up Daily",
      description: "We don't just report — we act. Our team ensures your staff follows through on daily tasks and operational standards.",
      image: <Eye className="text-brand-purple w-24 h-24" />,
      badges: ["24/7 Monitoring", "Daily Brief"]
    },
    {
      title: "We Protect Revenue + Reduce Losses",
      description: "From handling delivery app disputes to preventing waste, our systems are built to keep every dollar in your pocket.",
      image: <ShieldCheck className="text-brand-orange w-24 h-24" />,
      badges: ["Revenue Lock", "Loss Prevention"]
    },
    {
      title: "You Gain Control + Scale Confidently",
      description: "With BringIT handling the friction, you can finally focus on expansion and growth with full operational clarity.",
      image: <TrendingUp className="text-brand-blue w-24 h-24" />,
      badges: ["Scalability Ready", "Owner Freedom"]
    }
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-24">How <span className="gradient-text">BringIT</span> Works</h2>

        <div className="space-y-32">
          {steps.map((step, i) => (
            <div key={i} className={cn("flex flex-col gap-12 items-center lg:flex-row", i % 2 !== 0 && "lg:flex-row-reverse")}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue text-sm font-bold mb-6">Step 0{i + 1}</div>
                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">{step.title}</h3>
                <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg">{step.description}</p>
                <div className="flex gap-4">
                  {step.badges.map(b => (
                    <span key={b} className="px-3 py-1 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-black uppercase tracking-widest text-brand-blue">{b}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="glass aspect-video rounded-[2.5rem] flex items-center justify-center p-12 bg-gradient-to-tr from-white/5 to-transparent relative group">
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {step.image}
                  </div>
                  {/* Decorative Mini UI Card */}
                  <div className="absolute bottom-4 right-4 glass p-4 rounded-2xl shadow-2xl border-white/20 animate-pulse">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                           <CheckCircle2 size={16} className="text-green-500" />
                        </div>
                        <div>
                          <div className="text-[10px] text-white/40 font-bold uppercase">Status</div>
                          <div className="text-xs font-bold">Optimized</div>
                        </div>
                     </div>
                  </div>
                </div>
                {/* Visual Connector Shadow */}
                <div className="absolute -z-10 inset-0 blur-[100px] bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-purple/10" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AddOns = () => {
  const addons = [
    {
      title: "Extra Social Media Content",
      price: "$100–$200/month",
      description: "Additional branded content creation, posting, and engagement support for stronger local visibility.",
      icon: <Smartphone className="text-brand-purple" />
    },
    {
      title: "24/7 Coverage",
      price: "Starting at $150+/month",
      description: "Extended operational monitoring for urgent issues, late-night problems, and continuous oversight.",
      icon: <Clock className="text-brand-blue" />
    },
    {
      title: "Priority Escalation Support",
      price: "$100/month",
      description: "Faster issue escalation, urgent follow-up handling, and priority response for unresolved operational problems.",
      icon: <Zap className="text-brand-orange" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-4"
          >
            Flexible <span className="gradient-text italic">Add-Ons</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/50 text-lg max-w-2xl"
          >
            Customize your support without unnecessary pressure — only pay for what your operation truly needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {addons.map((addon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-blue/20 transition-all flex flex-col h-full group relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {addon.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight mb-1">{addon.title}</h3>
                  <div className="px-3 py-1 bg-brand-blue/5 border border-brand-blue/10 rounded-full inline-block">
                    <span className="text-brand-blue text-xs font-black uppercase tracking-widest">{addon.price}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow relative z-10">{addon.description}</p>
              <button className="text-xs font-black uppercase tracking-widest text-brand-blue group-hover:text-white transition-colors flex items-center gap-2 group/btn relative z-10">
                Enquire Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryStats = () => {
  const stats = [
    { label: "Inventory Waste", val: "2–10%" },
    { label: "Online Order Downtime", val: "3–15%" },
    { label: "Labor Waste", val: "2–8%" },
    { label: "POS Leakage", val: "1–5%" },
    { label: "Refund Abuse", val: "0.5–3%" }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-16">Revenue Lost Is <br /><span className="gradient-text italic">Revenue You Never See</span></h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl text-center flex flex-col items-center justify-center border-white/5"
            >
              <div className="text-3xl font-serif font-bold text-brand-orange mb-2">{stat.val}</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block p-12 bg-white/[0.02] border border-white/10 rounded-[3rem] relative"
            >
               <h3 className="text-3xl font-serif font-bold mb-4">Increasing sales by 10% is hard.</h3>
               <h3 className="text-4xl font-serif font-bold gradient-text italic">Stopping 10% leakage is faster.</h3>
               {/* Sparkle effects */}
               <div className="absolute top-4 right-8 text-brand-orange animate-pulse"><Plus size={24} /></div>
               <div className="absolute bottom-4 left-8 text-brand-blue animate-pulse"><Plus size={16} /></div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael S.",
      role: "FRANCHISE OWNER",
      text: "During Super Bowl Sunday, we used to lose so many orders because the tablet would freeze or the store would go offline without anyone noticing. BringIT keeps everything checked and alerts us fast. This year, we didn’t lose a single big game order."
    },
    {
      name: "Arshad",
      role: "FRANCHISE OWNER",
      text: "Honestly, I was tired of being involved in every little problem. Now I focus on opening new locations and bigger plans. I just have one weekly meeting with BringIT and my store manager, and they handle the rest. Life is much easier now."
    },
    {
      name: "Wali R.",
      role: "FRANCHISE OWNER",
      text: "My crew used to do whatever they wanted when I wasn’t around—late arrivals, shortcuts, things getting ignored. Even managers missed stuff. Once BringIT started tracking everything, people got serious. Now the team actually cares and the store runs cleaner."
    }
  ];

  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-20 italic">What <span className="gradient-text">Operators</span> Say</h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[2.5rem] border-white/5 relative"
              >
                <div className="text-brand-blue mb-6">
                   {[...Array(5)].map((_, j) => <span key={j} className="text-brand-blue">★</span>)}
                </div>
                <p className="text-lg text-white/70 italic leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-white/40 uppercase font-black tracking-widest">{t.role}</div>
                  </div>
                </div>
                {/* Quote icon */}
                <div className="absolute top-8 right-10 text-white/5 pointer-events-none">
                  <MessageSquare size={64} fill="currentColor" />
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

const AboutFounder = () => {
  const expertise = [
     "back-office operations",
     "customer support",
     "social media management",
     "inventory coordination",
     "reporting systems",
     "staff accountability",
     "operational follow-up",
     "revenue protection systems"
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] p-12 lg:p-24 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-[3rem] p-1 rotation-ring group-hover:rotate-180 transition-all duration-1000" />
                <div className="relative z-10 w-full aspect-[4/5] bg-bg-card rounded-[3rem] overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                      <Users className="text-white/20 w-32 h-32" />
                   </div>
                   {/* Fallback pattern */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-8">
                     <p className="text-2xl font-serif font-bold">Fahad Siddique</p>
                     <p className="text-sm text-brand-blue font-bold uppercase tracking-widest">Founder</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Built by someone who understands <span className="gradient-text">restaurant chaos</span> from the inside.</h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Over 5+ years of experience managing restaurant operations remotely for U.S.-based restaurant groups.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {expertise.map(item => (
                  <div key={item} className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/40 text-center flex items-center justify-center">
                    {item}
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-brand-blue">
                <p className="text-sm italic text-white/50 mb-2">Operation Experience with:</p>
                <p className="font-serif text-lg font-bold">Cold Stone • Dunkin’ • Baskin Robbins • Charleys</p>
              </div>
            </div>
          </div>
          {/* Background circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are you replacing my manager?",
      a: "No. We empower your manager. We take over the repetitive admin, reporting, and follow-up tasks so they can focus on what matters most: store experience, food quality, and staff training."
    },
    {
      q: "Do you work with franchises?",
      a: "Absolutely. We understand the strict operational standards of top franchises like Dunkin' and Cold Stone. Our systems are built to ensure franchise compliance at all times."
    },
    {
      q: "Can you support multiple locations?",
      a: "Yes. Our Premium package is specifically designed for multi-unit operators who need high-level oversight across 2, 5, or 20+ locations."
    },
    {
      q: "Do you handle delivery app disputes?",
      a: "Yes. In our Growth and Premium tiers, we actively monitor for missed orders and handle refund disputes to claw back revenue that adds up quickly."
    },
    {
      q: "Is this only for large restaurants?",
      a: "Not at all. Single-store owners often benefit the most because they are stretched thin. Our Starter package focuses on the core visibility every owner needs."
    }
  ];

  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 italic">Common <span className="gradient-text underline decoration-brand-blue/30 underline-offset-8">Questions</span></h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-3xl overflow-hidden border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-bold">{faq.q}</span>
                <div className={cn("transition-transform duration-300", openIndex === i && "rotate-180")}>
                  <ChevronDown className="text-brand-blue" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-white/50 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onOpenSignIn }: { onOpenSignIn: () => void }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-16 rounded-[4rem] border-white/10 bg-gradient-to-br from-bg-card to-bg-primary"
        >
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6 italic">Your Store Runs <span className="gradient-text italic">Better With BringIT</span></h2>
          <p className="text-xl md:text-2xl text-white/50 mb-10 max-w-2xl mx-auto">Let us handle the back office while you focus on growth.</p>
          <button 
            onClick={onOpenSignIn}
            className="gradient-btn px-12 py-5 rounded-full text-xl font-bold shadow-2xl shadow-brand-blue/40"
          >
            Book Free Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = ({ onOpenSignIn }: { onOpenSignIn: () => void }) => {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="glass p-12 rounded-[3rem] border-white/5">
            <h3 className="text-3xl font-serif font-bold mb-2">Connect With Operations</h3>
            <p className="text-white/40 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40">Business Name</label>
                  <input type="text" placeholder="The Pizza Hut" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40">Number of Locations</label>
                  <input type="number" placeholder="1" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40">Email Address</label>
                  <input type="email" placeholder="john@business.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} placeholder="How can we help your operations?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
              </div>
              <button 
                type="button"
                onClick={onOpenSignIn}
                className="gradient-btn w-full py-4 rounded-xl font-bold text-lg"
              >
                Book Free Strategy Call
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-12">
             <div className="glass p-10 rounded-[3rem] border-white/5">
                <h3 className="text-2xl font-serif font-bold mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <a href="https://wa.me/8801351656330" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
                      <MessageSquare />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">WhatsApp</div>
                      <div className="font-bold">+880 1351-656330</div>
                    </div>
                  </a>
                  <a href="mailto:bringit.bpo@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-purple group-hover:bg-brand-purple/10 transition-colors">
                      <Mail />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Email</div>
                      <div className="font-bold">bringit.bpo@gmail.com</div>
                    </div>
                  </a>
                </div>
             </div>

             <div className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden group">
                <ShieldCheck className="absolute -bottom-6 -right-6 w-32 h-32 text-white/[0.03] group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-2xl font-serif font-bold mb-2">24/7 Support</h3>
                <p className="text-white/50">Our team operates around the clock to match the intensity of the restaurant industry.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-primary border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-blue to-brand-purple rounded flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <span className="text-xl font-serif font-bold tracking-tight">Bring<span className="gradient-text">IT</span></span>
        </div>
        <p className="text-white/30 text-xs font-medium">© 2026 BringIT Operations. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- App Root ---

export default function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="min-h-screen selection:bg-brand-blue/30 scroll-smooth">
      <AnimatePresence mode="wait">
        {showSignIn ? (
          <motion.div
            key="signin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <SignInPage onBack={() => setShowSignIn(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar onOpenSignIn={() => setShowSignIn(true)} />
            <main>
              <Hero onOpenSignIn={() => setShowSignIn(true)} />
              <DashboardPreview />
              <TrustBar />
              <Problems />
              <WhyBringIT />
              <HowItWorks />
              <SquishyPricing onOpenSignIn={() => setShowSignIn(true)} />
              <AddOns />
              <IndustryStats />
              <Testimonials />
              <AboutFounder />
              <FAQ />
              <FinalCTA onOpenSignIn={() => setShowSignIn(true)} />
              <Contact onOpenSignIn={() => setShowSignIn(true)} />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
