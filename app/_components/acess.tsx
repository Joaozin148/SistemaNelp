'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type AccessibilityContextType = {
  fontSize: 'normal' | 'large';
  toggleFontSize: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const toggleFontSize = () => {
    setFontSize(prev => (prev === 'normal' ? 'large' : 'normal'));
  };

  return (
    <AccessibilityContext.Provider value={{ fontSize, toggleFontSize }}>
      <div className={fontSize === 'large' ? 'text-xl' : 'text-base'}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return context;
};
