import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const SocialIcons = {
  github: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 18} height={props.size || 18} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 18} height={props.size || 18} {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 18} height={props.size || 18} {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={props.size || 18} height={props.size || 18} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
};

export const BrandIcons: Record<string, React.FC<IconProps>> = {
  cisco: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M18.8 6.5v11M15.4 3.5v17M12 7.5v9M8.6 3.5v17M5.2 6.5v11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  mikrotik: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M4 6h3.5v12H4V6zm12.5 0H20v12h-3.5V6zM10.25 9.5h3.5v8.5h-3.5V9.5zm0-3.5h3.5v2h-3.5V6z" />
    </svg>
  ),
  wireshark: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.9 3.54 8.97 8.24 9.83-.07-.38-.1-.76-.08-1.15.11-1.85 1.54-3.35 3.39-3.48 1.95-.14 3.63 1.25 3.84 3.19.04.38.01.76-.07 1.13C20.31 20.47 22 16.51 22 12c0-5.52-4.48-10-10-10zm-1.5 5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S9 9.83 9 9s.67-1.5 1.5-1.5zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
  ),
  ansible: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 6L7 18h2.5l1.5-4h4.5l-2-5.5L12 6zm-.5 6l1.2-3.2 1.2 3.2h-2.4z" />
    </svg>
  ),
  linux: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M12 2c-3.1 0-5.5 2.5-5.5 5.6 0 1.8.8 3.4 2 4.4v1.5c-2.4 1.1-4 3.5-4 6.3 0 .7.6 1.2 1.3 1.2h12.4c.7 0 1.3-.5 1.3-1.2 0-2.8-1.6-5.2-4-6.3v-1.5c1.2-1 2-2.6 2-4.4C17.5 4.5 15.1 2 12 2zm-1.8 5.2c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8zm3.6 0c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8z" />
    </svg>
  ),
  network: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={props.size || 20} height={props.size || 20} {...props}>
      <rect x="2" y="2" width="6" height="6" rx="1"/>
      <rect x="16" y="2" width="6" height="6" rx="1"/>
      <rect x="9" y="16" width="6" height="6" rx="1"/>
      <path d="M5 8v3a1 1 0 001 1h12a1 1 0 001-1V8M12 12v4"/>
    </svg>
  ),
  firewall: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  typescript: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.82-.664-1.564-2.156-2.176l-.596-.247c-.812-.34-.996-.64-.996-1.043 0-.469.375-.828 1.015-.828.67 0 1.053.332 1.139.873h1.494c-.092-1.32-1.01-2.14-2.633-2.14-1.748 0-2.613 1.018-2.613 2.193 0 1.025.596 1.637 1.895 2.183l.595.253c.961.41 1.25.756 1.25 1.299 0 .615-.559.97-1.336.97-.992 0-1.424-.527-1.531-1.229h-1.55c.123 1.488 1.144 2.459 3.081 2.459 1.93 0 2.875-1.016 2.875-2.316l.108-.298zM9.54 9.854v1.393h2.365V20.5H13.6V11.247h2.365V9.854H9.54z" />
    </svg>
  ),
  python: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M11.9 2c-3.5 0-5.8 1.6-5.8 4.4v2.5h6.1V10H4.3c-2.3 0-4.3 1.4-4.3 4.4 0 2.9 1.8 4.5 4.3 4.5h2.1v-2.7c0-2.4 1.9-4.2 4.4-4.2h6.1V9.5c0-2.7-2.3-4.5-5-4.5h-.1zm-2.2 2.3c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm2.4 17.7c3.5 0 5.8-1.6 5.8-4.4v-2.5h-6.1V14h7.9c2.3 0 4.3-1.4 4.3-4.4 0-2.9-1.8-4.5-4.3-4.5h-2.1v2.7c0 2.4-1.9 4.2-4.4 4.2H8.9v2.5c0 2.7 2.3 4.5 5 4.5h.2zm2.2-2.3c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z" />
    </svg>
  ),
  docker: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185m21.784 1.343c-.352-.224-.9-.373-1.638-.373-.203 0-.41.011-.618.037-.47-1.127-1.428-1.92-2.73-2.164l-.51-.093-.298.423c-.947 1.344-1.284 2.502-1.298 2.55-.262.92-.047 1.83.606 2.49.52.52 1.253.81 2.067.81h.834c.734 0 1.488-.163 2.182-.472.527-.234.97-.563 1.317-.978.236-.282.41-.605.518-.957.108-.352.128-.718.06-1.077-.07-.358-.236-.688-.49-1.18zm-1.892 6.554c-1.34 1.157-3.088 1.794-4.922 1.794-2.766 0-5.32-1.44-6.84-3.856a.417.417 0 01-.06-.328.413.413 0 01.196-.282.415.415 0 01.34-.04c1.08.384 2.213.578 3.364.578 3.197 0 6.13-1.433 8.04-3.927.13-.17.33-.263.542-.249.21.014.398.131.498.313.313.567.485 1.196.505 1.835.03.957-.313 1.956-1.663 4.162z" />
    </svg>
  ),
  git: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.124 0L8.835 2.56l3.053 3.053a1.782 1.782 0 012.247 2.26l3.02 3.02a1.782 1.782 0 011.834 2.765l-2.85 2.85a1.782 1.782 0 01-2.765-1.834l-3.02-3.02a1.782 1.782 0 01-1.678-.456l-3.04 3.04a1.782 1.782 0 01.455 1.678l-4.14 4.14a1.5 1.5 0 000 2.124l10.478 10.478a1.5 1.5 0 002.124 0l10.478-10.478a1.5 1.5 0 000-2.124z" />
    </svg>
  ),
};

export const getBrandIcon = (name: string): React.FC<IconProps> | null => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (BrandIcons[normalized]) return BrandIcons[normalized];
  if (normalized.includes('cisco')) return BrandIcons['cisco'];
  if (normalized.includes('mikrotik')) return BrandIcons['mikrotik'];
  if (normalized.includes('wireshark')) return BrandIcons['wireshark'];
  if (normalized.includes('ansible')) return BrandIcons['ansible'];
  if (normalized.includes('linux') || normalized.includes('bash')) return BrandIcons['linux'];
  if (normalized.includes('firewall') || normalized.includes('security') || normalized.includes('vpn')) return BrandIcons['firewall'];
  if (normalized.includes('network') || normalized.includes('switch') || normalized.includes('router') || normalized.includes('bgp') || normalized.includes('ospf') || normalized.includes('vlan')) return BrandIcons['network'];
  if (normalized.includes('python')) return BrandIcons['python'];
  if (normalized.includes('docker')) return BrandIcons['docker'];
  if (normalized.includes('git')) return BrandIcons['git'];
  if (normalized.includes('typescript') || normalized === 'ts') return BrandIcons['typescript'];
  return BrandIcons['network'] || null;
};
