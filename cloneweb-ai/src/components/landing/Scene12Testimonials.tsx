export default function Scene12Testimonials() {
  const testimonials = [
    {
      quote: "CloneWeb AI replaced our entire frontend prototyping phase. What took us 3 weeks now takes 15 minutes. The code quality is indistinguishable from a senior React engineer.",
      author: "Sarah Chen",
      role: "CTO, Linear"
    },
    {
      quote: "The visual regression testing is magic. It doesn't just generate code; it checks its own work against the original design until it's pixel-perfect.",
      author: "Michael Ross",
      role: "Design Engineering Lead, Stripe"
    }
  ];

  return (
    <div className="py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-20 text-text">
          Trusted by engineering teams at
          <div className="flex justify-center gap-12 mt-8 text-gray-400 font-bold text-xl md:text-3xl">
            <span>Vercel</span>
            <span>Stripe</span>
            <span>Framer</span>
            <span>Linear</span>
          </div>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-6">
              <div className="text-2xl text-text font-medium leading-relaxed tracking-tight">
                "{t.quote}"
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div>
                  <div className="font-bold text-text">{t.author}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
