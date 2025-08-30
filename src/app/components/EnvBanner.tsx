'use client';

interface EnvBannerProps {
  environment?: string;
  showBanner?: boolean;
}

export default function EnvBanner({ environment = 'dev', showBanner = true }: EnvBannerProps) {
  if (!showBanner) return null;

  const getBannerStyle = () => {
    switch (environment) {
      case 'production':
        return 'bg-green-500 text-white';
      case 'staging':
        return 'bg-blue-500 text-white';
      case 'dev':
      case 'test':
      default:
        return 'bg-yellow-500 text-black';
    }
  };

  const getBannerText = () => {
    switch (environment) {
      case 'production':
        return '🚀 PRODUCTION ENVIRONMENT';
      case 'staging':
        return '🔧 STAGING ENVIRONMENT';
                   case 'dev':
               return '🧪 DEV ENVIRONMENT - GitHub Pages (/fxn-website) - Not for Production Use';
      case 'test':
        return '🧪 TEST ENVIRONMENT - GitHub Pages - Not for Production Use';
      default:
        return '🧪 DEV/TEST ENVIRONMENT - GitHub Pages - Not for Production Use';
    }
  };

  return (
    <div className={`${getBannerStyle()} text-center py-2 px-4 font-semibold text-sm`}>
      {getBannerText()}
    </div>
  );
}
