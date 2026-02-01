'use client';

import { SearchProvider as PlinySearchProvider } from '@shipixen/pliny/search';
import { siteConfig } from '@/data/config/site.settings';

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const searchConfig = siteConfig.search;

  // If search is disabled or not configured, just render children
  if (!searchConfig) {
    return <>{children}</>;
  }

  // Type guard: only pass to PlinySearchProvider if it's a valid config object
  if (typeof searchConfig === 'object') {
    return (
      <PlinySearchProvider searchConfig={searchConfig}>
        {children}
      </PlinySearchProvider>
    );
  }

  return <>{children}</>;
};
