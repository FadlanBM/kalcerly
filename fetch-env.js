import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '.env');

// Helper to parse .env file
function parseEnv(filePath) {
  const config = {};
  if (fs.existsSync(filePath)) {
    const envFile = fs.readFileSync(filePath, 'utf8');
    envFile.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        config[match[1].trim()] = match[2].trim();
      }
    });
  }
  return config;
}

const envConfig = parseEnv(envPath);

const API_URL = envConfig.ENV_API_URL || 'https://env.zemcode.dev/api/client/secrets';
const HEADERS = {
  'x-app-id': envConfig.ENV_APP_ID,
  'x-app-secret': envConfig.ENV_APP_SECRET
};

async function fetchEnv() {
  if (!HEADERS['x-app-id'] || !HEADERS['x-app-secret']) {
    console.error('Missing ENV_APP_ID or ENV_APP_SECRET in .env');
    return;
  }

  try {
    console.log('Fetching environment variables...');
    const response = await fetch(API_URL, { headers: HEADERS });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const json = await response.json();
    
    if (json.data && Array.isArray(json.data)) {
      // Merge fetched env with existing envConfig
      json.data.forEach(item => {
        envConfig[`VITE_${item.keyName}`] = item.value;
      });
      
      // Serialize back to .env
      const envContent = Object.entries(envConfig)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');
      
      fs.writeFileSync(envPath, envContent);
      console.log('Successfully fetched and mapped data to .env file (preserved existing keys)');
    } else {
      console.log('Invalid data format received.');
    }
  } catch (error) {
    console.error('Error fetching env data:', error);
  }
}

fetchEnv();
