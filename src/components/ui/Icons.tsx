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
    <svg viewBox="0 0 128 128" width={props.size || 20} height={props.size || 20} {...props}>
      <path
        fill="#387EB8"
        d="M63.391 12.248c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V77.494c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V26.093c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 19.817c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
      />
      <circle cx="50" cy="24.5" r="4.2" fill="#ffffff" />
      <path
        fill="#FFE052"
        d="M91.682 38.64v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 13.46-4.312 15.426-12.521 2.268-9.405 2.368-15.275 0-25.096-1.755-7.311-5.947-12.519-13.124-12.519h-11.57zM77.963 108.183c-2.55 0-4.634-2.117-4.634-4.721 0-2.593 2.083-4.69 4.634-4.69 2.56 0 4.633 2.097 4.633 4.69.001 2.604-2.073 4.721-4.633 4.721z"
      />
      <circle cx="78" cy="103.5" r="4.2" fill="#ffffff" />
    </svg>
  ),
  docker: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
    </svg>
  ),
  git: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.124 0L8.835 2.56l3.053 3.053a1.782 1.782 0 012.247 2.26l3.02 3.02a1.782 1.782 0 011.834 2.765l-2.85 2.85a1.782 1.782 0 01-2.765-1.834l-3.02-3.02a1.782 1.782 0 01-1.678-.456l-3.04 3.04a1.782 1.782 0 01.455 1.678l-4.14 4.14a1.5 1.5 0 000 2.124l10.478 10.478a1.5 1.5 0 002.124 0l10.478-10.478a1.5 1.5 0 000-2.124z" />
    </svg>
  ),
  github: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  html5: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.158H8.531z" />
    </svg>
  ),
  css3: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.24 2.622 10.422.003-.24 2.715H5.892l.24 2.673h10.013l-.68 6.926-3.465.955-3.465-.955-.224-2.454H5.875l.448 4.793 5.677 1.576 5.677-1.576.786-8.877.24-2.673.23-2.673z" />
    </svg>
  ),
  javascript: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 20} height={props.size || 20} {...props}>
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.892-1.74-2.28-2.28l-.58-.23c-.76-.32-.93-.6-.93-.97 0-.44.35-.77.95-.77.62 0 .98.31 1.06.81h1.4c-.09-1.23-.95-2-2.46-2-1.63 0-2.44.95-2.44 2.05 0 .96.56 1.53 1.77 2.04l.56.24c.9.38 1.17.7 1.17 1.21 0 .57-.52.9-1.25.9-.93 0-1.33-.49-1.43-1.15h-1.45c.12 1.39 1.07 2.3 2.88 2.3 1.8 0 2.69-.95 2.69-2.16l-.09-.27zm-8.87.27v-8.05h-1.5v8.13c0 1.29-.63 1.85-1.68 1.85-.75 0-1.23-.37-1.46-.87h-1.39c.27 1.28 1.28 2.09 2.85 2.09 1.95 0 3.18-1.04 3.18-3.15z" />
    </svg>
  ),
  php: (props) => (
    <svg viewBox="0 0 128 128" width={props.size || 20} height={props.size || 20} {...props}>
      <ellipse cx="64" cy="64" rx="60" ry="32" fill="#777BB4" />
      <ellipse cx="64" cy="64" rx="60" ry="32" fill="none" stroke="#4F5B93" strokeWidth="2.5" />
      <g fill="#FFFFFF">
        <path d="M34.77 67.86c2.79 0 4.88-.51 6.2-1.53 1.3-1 2.2-2.75 2.68-5.18.44-2.27.27-3.85-.5-4.71-.79-.87-2.5-1.32-5.07-1.32h-4.46l-2.47 12.73zM20.17 83.55a.7.7 0 0 1-.68-.83l6.56-33.74a.7.7 0 0 1 .68-.56h14.13c4.45 0 7.75 1.2 9.83 3.58 2.4 2.73 2.4 5.74 1.92 9.94a16 16 0 0 1-4.83 8.64c-1.53 1.43-3.26 2.47-5.15 3.08-1.85.6-4.23.91-7.07.91h-5.72l-1.64 8.41a.7.7 0 0 1-.68.56z" />
        <path d="M69.46 74.58a.7.7 0 0 1-.68-.83l2.9-14.93c.28-1.42.21-2.44-.19-2.87-.25-.26-.98-.7-3.15-.7h-5.26l-3.64 18.76a.7.7 0 0 1-.69.56h-7.29a.7.7 0 0 1-.68-.82l6.56-33.74a.7.7 0 0 1 .68-.56h7.29a.7.7 0 0 1 .68.82L64.41 48.42h5.65c4.3 0 7.23.76 8.93 2.32 1.73 1.6 2.28 4.14 1.6 7.57l-3.05 15.7a.7.7 0 0 1-.68.56z" />
        <path d="M92.14 67.86c2.79 0 4.88-.51 6.2-1.53 1.3-1 2.2-2.75 2.68-5.18.44-2.27.27-3.85-.5-4.71-.79-.87-2.5-1.32-5.07-1.32h-4.46l-2.48 12.73zM77.54 83.55a.7.7 0 0 1-.68-.83l6.56-33.74a.7.7 0 0 1 .68-.56H98.23c4.45 0 7.75 1.2 9.83 3.58 2.09 2.4 2.73 5.74 1.92 9.94a16 16 0 0 1-4.83 8.64c-1.53 1.43-3.26 2.47-5.15 3.08-1.85.6-4.23.91-7.07.91h-5.72l-1.64 8.41a.7.7 0 0 1-.68.56z" />
      </g>
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
  if (normalized.includes('html')) return BrandIcons['html5'];
  if (normalized.includes('css')) return BrandIcons['css3'];
  if (normalized.includes('javascript') || normalized === 'js') return BrandIcons['javascript'];
  if (normalized.includes('typescript') || normalized === 'ts') return BrandIcons['typescript'];
  if (normalized.includes('python')) return BrandIcons['python'];
  if (normalized.includes('php')) return BrandIcons['php'];
  if (normalized.includes('github')) return BrandIcons['github'];
  if (normalized.includes('git')) return BrandIcons['git'];
  if (normalized.includes('docker')) return BrandIcons['docker'];
  if (normalized.includes('network') || normalized.includes('switch') || normalized.includes('router') || normalized.includes('bgp') || normalized.includes('ospf') || normalized.includes('vlan')) return BrandIcons['network'];
  return BrandIcons['network'] || null;
};
