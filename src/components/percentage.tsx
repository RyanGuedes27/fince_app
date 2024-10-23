import { cn } from '@/lib/utils';

interface PercentageProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
}

export const Percentage: React.FC<PercentageProps> = ({ value, size = 'md' }) => {
  const isPositive = value >= 0;
  const formattedValue = `${isPositive ? '+' : ''}${value}%`;

  return (
    <span
      className={cn(
        'font-semibold',
        size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base',
        isPositive ? 'text-green-500' : 'text-red-500',
      )}
    >
      {formattedValue}
    </span>
  );
};
