export const projectQuestions = [
    {
        type: 'input',
        name: 'projectName',
        message: '專案名稱:',
        validate: (input) => input.trim().length > 0,
    },
    {
        type: 'list',
        name: 'uiLibrary',
        message: '選擇 UI 函式庫:',
        choices: [
            { name: 'shadcn/ui', value: 'shadcn' },
            { name: '不使用 UI 函式庫', value: 'none' },
        ],
    },
    {
        type: 'checkbox',
        name: 'features',
        message: '選擇需要的功能:',
        choices: [
            { name: 'TailwindCSS', value: 'tailwind', checked: true },
            { name: 'Zod 驗證', value: 'zod' },
            { name: 'ESLint 配置', value: 'eslint' },
            { name: 'Prettier 配置', value: 'prettier' },
        ],
    },
];
