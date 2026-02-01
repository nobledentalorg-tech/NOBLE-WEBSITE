require('dotenv').config({ path: '.env.local' });
const { execSync } = require('child_process');

console.log('🔄 Loading environment variables from .env.local...');
console.log(`DATABASE_URL: ${process.env.DATABASE_URL ? '✅ Set' : '❌ Missing'}`);
console.log(`DIRECT_URL: ${process.env.DIRECT_URL ? '✅ Set' : '❌ Missing'}`);

console.log('\n🚀 Running: npx prisma db push\n');

try {
    const output = execSync('npx prisma db push', {
        stdio: 'inherit',
        env: process.env
    });
    console.log('\n✅ Prisma sync completed successfully!');
} catch (error) {
    console.error('\n❌ Prisma sync failed:', error.message);
    process.exit(1);
}
