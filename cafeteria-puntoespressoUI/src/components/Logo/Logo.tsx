import React from 'react';
import logoImg from '../../assets/logo.webp';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 150 }) => {
  return (
    <img
      src={logoImg}
      alt="Punto Espresso"
      width={size}
      height={size}
      className={className}
      style={{
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '50%', /* Aplica un borde redondeado elegante por si la imagen es cuadrada */
        objectFit: 'cover'
      }}
    />
  );
};
