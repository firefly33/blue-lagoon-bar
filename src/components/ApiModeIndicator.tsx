import {getCurrentMode, isOnlineMode} from '../services/cocktailAdapter';

const ApiModeIndicator = () => {
  const mode = getCurrentMode();

  return (
      <div className={`
      fixed bottom-4 left-4 px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-50
      ${isOnlineMode
          ? 'bg-green-100 text-green-800 border border-green-200'
          : 'bg-blue-100 text-blue-800 border border-blue-200'
      }
    `}>
        <div className="flex items-center space-x-2">
          <div className={`
          w-2 h-2 rounded-full
          ${isOnlineMode ? 'bg-green-500' : 'bg-blue-500'}
        `}/>
          <span>
          {mode === 'online' ? 'API Online' : 'Mode Offline'}
        </span>
        </div>
      </div>
  );
};

export default ApiModeIndicator;
