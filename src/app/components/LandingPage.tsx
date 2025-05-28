"use client";

export default function LandingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Is Your MVP Actually Good? Get a Real Scorecard.
      </h1>
      <p className="text-lg mb-6 text-gray-700">
        No more silent launches. Submit your MVP and get structured feedback
        from real builders.
      </p>

      <div className="text-gray-700 text-base mb-8 space-y-4">
        <p>
          Solo devs and indie hackers often ship their projects and hear…
          nothing. Was it the UX? The value prop? The wrong audience? Without
          feedback, you&apos;re just guessing.
        </p>
        <p>
          We send you a feedback scorecard based on real heuristics: usability,
          clarity, perceived value—and honest takes from others like you.
        </p>
        <p className="font-medium">
          Submit your project → Get your scorecard → Iterate smarter.
        </p>
      </div>

      <form
        action="https://buttondown.com/api/emails/embed-subscribe/danmkyle"
        method="post"
        target="popupwindow"
        onSubmit={() => {
          window.open("https://buttondown.com/danmkyle", "popupwindow");
          setTimeout(() => window.focus(), 300);
          if (typeof window.plausible === "function") {
            window.plausible("JoinWaitlist");
          }
        }}
        className="embeddable-buttondown-form flex flex-col gap-4"
      >
        <label htmlFor="bd-email" className="text-sm font-medium">
          Enter your email to get early access
        </label>
        <input
          type="email"
          name="email"
          id="bd-email"
          required
          placeholder="you@example.com"
          className="border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="submit"
          value="Get My Feedback Scorecard"
          className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition cursor-pointer"
        />
        <p className="text-xs text-gray-500">
          <a
            href="https://buttondown.com/refer/danmkyle"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Powered by Buttondown.
          </a>
        </p>
      </form>

      <a
        href="https://tally.so/r/w5D2aN"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window.plausible === "function") {
            window.plausible("SubmitMVPClicked");
          }
        }}
        className="mt-6 inline-block bg-white text-black border border-gray-400 rounded px-4 py-2 hover:bg-gray-100 transition text-sm font-medium"
      >
        Submit Your MVP for Feedback →
      </a>
    </div>
  );
}

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props: Record<string, unknown> }
    ) => void;
  }
}
