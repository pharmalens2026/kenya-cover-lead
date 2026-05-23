import React from "react";

const partners = [
  { name: "Jubilee Insurance", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jubilee_Insurance_Logo.png" },
  { name: "CIC Insurance", logo: "https://www.cic.co.ke/wp-content/uploads/2019/10/CIC-LOGO-WHITE.png" },
  { name: "Britam", logo: "https://www.britam.com/documents/20126/0/Britam-logo.png" },
  { name: "Old Mutual", logo: "https://www.oldmutual.co.ke/assets/img/om-logo.svg" },
  { name: "APA Insurance", logo: "https://www.apa.co.ke/wp-content/uploads/2018/10/APA-Insurance-Logo.png" },
  { name: "ICEA LION", logo: "https://icealion.com/wp-content/uploads/2021/04/ICEA-LION-Logo-Full-Color.png" },
  { name: "Madison", logo: "https://madison.co.ke/wp-content/uploads/2020/03/Madison-Logo.png" },
  { name: "GA Insurance", logo: "https://www.gainsurance.com/wp-content/uploads/2021/05/GA-logo.png" },
];

export function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground mb-12">
          Partnered with Kenya's Leading Underwriters
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
          {partners.map((p) => (
            <div key={p.name} className="h-12 w-32 flex items-center justify-center p-2" title={p.name}>
              {/* Using text logos for reliability if remote URLs fail */}
              <span className="font-black text-xl text-slate-400 hover:text-primary transition-colors cursor-default">
                {p.name.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-muted-foreground max-w-2xl mx-auto italic">
          We only work with IRA-licensed companies to ensure your policies are secure and your claims are paid promptly.
        </p>
      </div>
    </section>
  );
}