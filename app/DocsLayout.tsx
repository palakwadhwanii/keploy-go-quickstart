"use client";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="docs-layout">
      <aside className="sidebar">
        <div className="sidebar-title">ON THIS PAGE</div>

        <button onClick={() => goTo("introduction")}>
          Introduction
        </button>

        <button onClick={() => goTo("what-i-built")}>
          What I built
        </button>

        <button onClick={() => goTo("step-1")}>
          Step 1: Setup
        </button>

        <button onClick={() => goTo("step-2")}>
          Step 2: Record
        </button>

        <button onClick={() => goTo("step-3")}>
          Step 3: API request
        </button>

        <button onClick={() => goTo("step-4")}>
          Step 4: Stop recording
        </button>

        <button onClick={() => goTo("step-5")}>
          Step 5: Replay
        </button>

        <button onClick={() => goTo("what-confused-me")}>
          What confused me
        </button>

        <button onClick={() => goTo("what-i-learned")}>
          What I learned
        </button>
      </aside>

      <main className="content">{children}</main>

      <aside className="toc">
        <div className="toc-title">QUICK READ</div>

        <p>
          A hands-on walkthrough of recording an API interaction and
          replaying it as an automated test.
        </p>

        <div className="status-card">
          <span className="status-dot" />
          <div>
            <strong>Quickstart complete</strong>
            <small>4 tests passed</small>
          </div>
        </div>
      </aside>
    </div>
  );
}
