import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

export async function createProject(options) {
    const { projectName, uiLibrary, features } = options;

    // 建立 Next.js 專案
    console.log('Creating Next.js project...');
    execSync(
        `npx create-next-app@latest ${projectName} --typescript --tailwind --eslint`
    );

    // 切換到專案目錄
    process.chdir(projectName);

    // 安裝額外依賴
    if (features.includes('zod')) {
        execSync('npm install zod');
    }

    // 建立專案結構
    await createProjectStructure();

    // 如果選擇了 shadcn/ui
    if (uiLibrary === 'shadcn') {
        execSync('npx shadcn-ui@latest init');
    }
}

async function createProjectStructure() {
    const folders = [
        'src/components',
        'src/hooks',
        'src/utils',
        'src/services',
        'src/types',
        'src/styles',
        'src/constants',
    ];

    for (const folder of folders) {
        await fs.mkdir(folder, { recursive: true });
    }
}
