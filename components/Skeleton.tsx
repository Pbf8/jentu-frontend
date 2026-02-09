import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({ 
  className, 
  variant = 'rectangular',
  animation = 'pulse' 
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton",
        animation === 'pulse' && "animate-pulse",
        animation === 'wave' && "shimmer",
        variant === 'text' && "h-4 w-full",
        variant === 'circular' && "rounded-full",
        variant === 'rectangular' && "rounded",
        className
      )}
    />
  );
}

// Skeleton presets
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

export function ProverbSkeleton() {
  return (
    <div className="bg-gray-50 rounded-lg p-8 space-y-4 animate-pulse">
      <Skeleton className="h-8 w-64 mx-auto" />
      <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
      <Skeleton className="h-4 w-32 mx-auto" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full max-w-2xl mx-auto" />
        <Skeleton className="h-4 w-5/6 max-w-2xl mx-auto" />
      </div>
    </div>
  );
}

export function Top3Skeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg shadow-lg p-6 space-y-4 animate-pulse">
          <Skeleton className="h-16 w-16 mx-auto" variant="circular" />
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      ))}
    </div>
  );
}

export function GallerySkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-3 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      ))}
    </div>
  );
}
