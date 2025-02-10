#!/usr/bin/env node
import inquirer from 'inquirer';
import { createProject } from './utils/project.js';
import { projectQuestions } from './questions/questions.js';

console.log('Next.js Project Generator Starting...');

async function main() {
    try {
        const answers = await inquirer.prompt(projectQuestions);
        await createProject(answers);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

main();
