"use client";

export default function LandingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Is Your MVP Actually Good?
        <br />
        Get a Real Scorecard From Real Builders.
      </h1>
      <p className="text-lg mb-6 text-gray-700">
        Solo devs launch in silence. No users, no feedback—just guessing.
        You deserve structured, honest input on UX, clarity, and value.
      </p>

      <div className="text-gray-700 text-base mb-8 space-y-4">
        <p>
          Most solo builders ship and stall. No idea if users “get it,” what’s broken,
          or what to fix. We send you a real feedback scorecard based on proven heuristics—
          plus honest takes from fellow builders.
        </p>
        <p className="font-medium">
          Submit your MVP → Get your scorecard → Iterate smarter.
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
          Enter your email to get early access (and priority feedback)
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
          ✅ Free. No spam. Just high-signal feedback.
        </p>
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
