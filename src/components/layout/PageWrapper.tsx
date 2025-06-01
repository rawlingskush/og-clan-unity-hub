
import React from 'react';
import ErrorBoundary from '@/components/ui/error-boundary';
import SeoHead from '@/components/seo/SeoHead';

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const PageWrapper = ({ 
  children, 
  title, 
  description, 
  className = "min-h-screen flex flex-col bg-black text-white" 
}: PageWrapperProps) => {
  return (
    <div className={className}>
      <SeoHead title={title} description={description} />
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </div>
  );
};

export default PageWrapper;
