import React from 'react';

const SkipImage = ({ size }) => {
  const colors = {
    background: '#e2e8f0',
    text: '#64748b',
    border: '#94a3b8'
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: `2px dashed ${colors.border}`,
        borderRadius: '0.75rem',
        padding: '1rem'
      }}
    >
      <div
        style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          color: colors.text,
          marginBottom: '0.5rem'
        }}
      >
        {size} Yard
      </div>
      <div
        style={{
          fontSize: '1rem',
          color: colors.text
        }}
      >
        Skip
      </div>
    </div>
  );
};

export default SkipImage; 