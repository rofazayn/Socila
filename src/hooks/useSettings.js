import { useState, useEffect } from 'react';

function useSettings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    setSettings({
      name: 'Abderraouf',
      email: 'rofazayn@gmail.com',
      username: 'rofazayn',
    });

    return () => {
      setSettings({});
    };
  }, []);

  return settings;
}

export default useSettings;
