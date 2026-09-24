type Props = { className?: string; label?: string };
export default function Starburst({ className = "", label = "" }: Props) {
  return <svg role={label ? "img" : "presentation"} aria-label={label || undefined} viewBox="0 0 100 100" className={className} fill="currentColor"><path d="M44 5h12l-1.8 28.7 20-20L83 22 62.3 42 95 43v13l-31.7-2.1 21.1 20.3-9.4 9.4-20.2-21L56 95H44l1.5-32.5-20.5 21-9.3-9.4 20.9-20.2L5 56V43l32 1.5-20.5-20 9.3-9.3L46 35z"/></svg>;
}
