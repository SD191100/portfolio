import Link from "next/link";

export default function Tmux() {
  return (
    <div className="text-gray-800 dark:text-white space-y-6">
      <h1 className="text-5xl font-bold text-black dark:text-white">🧩 Tmux</h1>

      <p className="text-lg leading-relaxed">
        <span className="font-semibold text-green-600 dark:text-green-400">Tmux</span> is my terminal multiplexer of choice — an essential tool for navigating and managing remote environments. Whether I’m coding in a Proxmox VM or SSH’ed into a Raspberry Pi from my main Arch Linux machine, Tmux gives me complete session control with a beautiful and productive interface.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">💻 How I Use Tmux</h2>
      <p className="text-lg leading-relaxed">
        I use Tmux across all my VMs to persist sessions while switching contexts or disconnecting remotely. This means I can SSH into any dev machine, attach to a Tmux session, and instantly resume work — whether I’m writing code, running servers, or monitoring logs.
      </p>

      <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">🛠 My Typical Workflow</h3>
        <ul className="list-disc pl-5 text-lg space-y-2">
          <li>Start a session for each project using <code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">tmux new -s project-name</code></li>
          <li>Split panes vertically & horizontally to run frontend/backend/database servers in parallel</li>
          <li>Detach from session using <code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">Ctrl + B, D</code> and reattach later from any device</li>
          <li>Use Tmux inside SSH from VSCode for consistent terminal state across reboots</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🎨 Custom Theme & Looks</h2>
      <p className="text-lg leading-relaxed">
        I&apos;ve customized my <code>.tmux.conf</code> to improve visibility, aesthetics, and key bindings. My setup includes:
      </p>
      <ul className="list-disc pl-5 text-lg space-y-2">
        <li>🧪 A minimal status bar with Git branch info and CPU/memory usage</li>
        <li>🎯 Color-coded pane borders and active window highlights</li>
        <li>🚀 Fast window switching with intuitive keybinds</li>
      </ul>

      <p className="text-lg leading-relaxed">
        I use the <Link href="https://github.com/gpakosz/.tmux" className="text-blue-500 underline" target="_blank">Gpakosz Tmux config</Link> as a base and tweak it to match my dark terminal themes across machines.
      </p>

      <div className="bg-black text-white p-4 rounded-lg font-mono text-sm">
        # Sample from my .tmux.conf<br />
        set-option -g mouse on<br />
        setw -g mode-keys vi<br />
        set -g status-bg colour234<br />
        set -g status-fg white<br />
        bind r source-file ~/.tmux.conf \; display &apos;Reloaded!&apos;<br />
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">📦 Favorite Tmux Plugins</h2>
      <ul className="list-disc pl-5 text-lg space-y-1">
        <li>
          <Link
            href="https://github.com/tmux-plugins/tpm"
            target="_blank"
            className="text-blue-500 underline"
          >
            Tmux Plugin Manager (TPM)
          </Link> – Easy plugin management
        </li>
        <li>
          <Link
            href="https://github.com/tmux-plugins/tmux-sensible"
            target="_blank"
            className="text-blue-500 underline"
          >
            tmux-sensible
          </Link> – Best default settings
        </li>
        <li>
          <Link
            href="https://github.com/tmux-plugins/tmux-resurrect"
            target="_blank"
            className="text-blue-500 underline"
          >
            tmux-resurrect
          </Link> – Save & restore sessions
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔗 Useful Links</h2>
      <ul className="list-inside list-disc text-lg space-y-2">
        <li>
          <Link href="https://github.com/tmux/tmux/wiki" target="_blank" className="text-blue-500 underline">
            Tmux Wiki
          </Link>
        </li>
        <li>
          <Link href="https://github.com/gpakosz/.tmux" target="_blank" className="text-blue-500 underline">
            Gpakosz Tmux Config
          </Link>
        </li>
        <li>
          <Link href="https://tmuxcheatsheet.com/" target="_blank" className="text-blue-500 underline">
            Tmux Cheat Sheet
          </Link>
        </li>
      </ul>
    </div>
  );
}
