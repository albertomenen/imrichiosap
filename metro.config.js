const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Filtra la extensión 'js' de assetExts para que Metro no la trate como asset
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'js');
// Asegura que 'js' esté en sourceExts
if (!defaultConfig.resolver.sourceExts.includes('js')) {
  defaultConfig.resolver.sourceExts.push('js');
}

module.exports = defaultConfig;
