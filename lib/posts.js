import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((aPostDir) => {

        // Read main markdown file as string
        const fullPath = path.join(postsDirectory, aPostDir, aPostDir + ".md");
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id: aPostDir,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: [fileName],
            },
        };
    });
}

export async function getPostData(post) {
    if (post.length > 1) {
        if (post[1].endsWith(".md")) {
            const postPath = path.join(postsDirectory, post[0]);
            const fullPath = path.join(postPath, post[1]);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Use remark to convert markdown into HTML string
            const processedContent = await remark()
                .use(html)
                .process(matterResult.content);
            const contentHtml = processedContent.toString()
                .replace('<img src="../../public', '<img src="');

            // Combine the data with the id and contentHtml
            return {
                id: post[0],
                contentHtml,
                ...matterResult.data,
            }
        }
    } else {
        return getPostData([post[0], post[0] + ".md"]);
    }
}

