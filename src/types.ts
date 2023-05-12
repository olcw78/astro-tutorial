export interface MarkdownImage {
    url: string;
    alt: string;
}

export type MarkdownTag = string;

export interface MarkdownFrontMatter {
    title: string;
    pubDate: string;
    description: string;
    author: string;
    image: MarkdownImage,
    tags: ReadonlyArray<MarkdownTag>
}

export interface Post {
    frontmatter: MarkdownFrontMatter
}
