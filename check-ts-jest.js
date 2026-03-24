try {
  require('ts-jest');
  console.log('ts-jest found');
} catch (e) {
  console.error('ts-jest NOT found:', e.message);
}
