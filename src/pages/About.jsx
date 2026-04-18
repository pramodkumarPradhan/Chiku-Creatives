export default function About() {
  return (
    <main className="pt-28 pb-20 bg-surface text-on-surface font-body">

      {/* SECTION 1 - STORY */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-3/4 h-full bg-surface-container-low rounded-xl -z-10"></div>

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl7w9vMD7iwrFdWv-D3YVs-_ZQgklmCz5h3oOV76uLDWWdIMAUCLGHVC2Y3xkCP3IU2uvmfk0lwjVhf7avgwBLNSF-wIov8R5rFlFGJQQKMXaWA1hEMlcRQjtxBA6M-ZMyebl-4gZkQ27MPljr-DXgxwYMQRi_Vtz5KNkFk4-8qm7UvJprOVXPOu7Y8JO_fZPzrhLBn6o2PLUDoqvbP-3HoRBfayKp8zDK1I8yCkVSZFhoqY2tjimst_ufTu16v4HPC8p56T0RgwDa"
              className="w-full rounded-xl shadow-[0_20px_60px_-15px_rgba(46,52,42,0.06)]"
              alt="profile"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <span className="text-xs uppercase tracking-widest text-primary">
              Behind the Lens
            </span>

            <h1 className="font-headline text-4xl md:text-6xl font-bold mt-4 mb-6">
              My Story
            </h1>

            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                I didn't start as a social media strategist. I started as an
                observer. Finding quiet moments in a loud digital world.
              </p>

              <p>
                For the past eight years, I've helped brands translate their
                identity into a powerful digital presence.
              </p>

              <p>
                My approach is rooted in editorial design and intentional
                storytelling — turning your feed into a Chiku Creatives.
              </p>
            </div>

            {/* STATS */}
            <div className="mt-10 flex gap-6">
              <div className="text-center px-6 py-4 bg-white rounded-lg shadow">
                <h2 className="text-3xl font-bold text-primary">8+</h2>
                <p className="text-xs uppercase text-gray-500">Years Exp</p>
              </div>

              <div className="text-center px-6 py-4 bg-white rounded-lg shadow">
                <h2 className="text-3xl font-bold text-primary">40+</h2>
                <p className="text-xs uppercase text-gray-500">Brands</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 - PROCESS */}
      <section className="bg-surface-container-low py-32 px-6 md:px-12 rounded-3xl mx-4 md:mx-12 lg:mx-24 mb-32">

        <div className="max-w-[1200px] mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-primary">
            Methodology
          </span>
          <h2 className="font-headline text-4xl mt-4 font-bold">
            The Process
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          {/* STEP 1 */}
          <div className="text-center">
            <h3 className="text-6xl text-primary/30 mb-4">01</h3>
            <h4 className="font-headline text-xl mb-3">
              Discovery & Audit
            </h4>
            <p className="text-on-surface-variant text-sm">
              Understanding your brand identity and analyzing your current
              presence.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center">
            <h3 className="text-6xl text-primary/30 mb-4">02</h3>
            <h4 className="font-headline text-xl mb-3">
              Curated Strategy
            </h4>
            <p className="text-on-surface-variant text-sm">
              Creating a roadmap with content planning and visual identity.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center">
            <h3 className="text-6xl text-primary/30 mb-4">03</h3>
            <h4 className="font-headline text-xl mb-3">
              Execution & Refinement
            </h4>
            <p className="text-on-surface-variant text-sm">
              Bringing strategy to life and optimizing using data insights.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-headline mb-6">
          Ready to curate your narrative?
        </h2>

        <p className="text-on-surface-variant mb-8">
          Let’s elevate your brand with intentional design.
        </p>

        <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dim">
          Book a Call →
        </button>
      </section>

    </main>
  );
}