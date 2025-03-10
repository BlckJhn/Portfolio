import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks=[
  {
    title:'Youtube',
    href:'#',
  },
  {
    title:'Twitter',
    href:'#',
  },
  {
    title:'Instagram',
    href:'#',
  },
  {
    title:'LinkedIn',
    href:'#',
  },
  {
    title:'Github',
    href:'#',
  },
]
export const Footer = () => {
  return (
  <footer className="relative -z-10 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10" style={{
  maskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)',
}}
></div>
    <div className="container">
      <div className="border-t border-white/15 py-16 text-sm flex flex-col items-center gap-8 md:justify-between md:flex-row">
        <div className="text-white/40"> &copy; 2025. All rights reserved. </div>
        <nav className="flex flex-col items-center gap-8 md:flex-row">
          {footerLinks.map((link) =>(
            <a href ="#" key={link.title} className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">{link.title}</span>
              <ArrowUpRightIcon className="w-4 h-4"/>
            </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>

  );
};
