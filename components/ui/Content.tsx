
import React from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import CopyButton from "./CopyButton";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  language,
  value,
}: {
  language?: string;
  value: string;
}) => {
  return (
    <div className="relative bg-transparent group text-xl text-black dark:text-white">
      <span className="absolute hidden text-sm font-mono left-3 top-1 group-hover:block">{language}</span>
      <SyntaxHighlighter
        language={language && SyntaxHighlighter.supportedLanguages.includes(language) ? language : "plaintext"}
        style={oneDark}>
        {value}
      </SyntaxHighlighter>
      <CopyButton value={value} />{" "}
    </div>
  );
};


const code: Components = {
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || " ");
    const language = match ? match[1] : "plaintext";
    return match ?
      <CodeBlock language={language} value={String(children).trim()} />
      : (
        <code className={className + " bg-neutral-700 px-2 py-[3px] rounded-lg"} {...props}>
          {children}
        </code>
      );
  },
}


const Content = ({ content }: { content: string }) => {
  return (
    <div className="text-black  dark:text-white prose prose-invert prose-xl prose-h1:m-0 prose-h1:text-black dark:prose-h1:text-white prose-h2:text-black dark:prose-h2:text-white prose-h2:my-2 prose-h3:my-2 prose-h3:text-black dark:prose-h3:text-white prose-p:text-black dark:prose-p:text-white   prose-p:text-2xl prose-p:text-justify  prose-strong:my-2 prose-strong:text-black dark:prose-strong:text-white prose-a:my-2 prose-a:text-blue-400 dark:prose-a:text-blue-400 max-w-full">
      <div>
        <ReactMarkdown
          components={{
            ...code,
            pre({ children }) {
              return <div className="not-prose pt-3">{children}</div>; // Prevent prose styles on code blocks
            },
          }}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Content;

//  <CopyButton value={value} />{" "}
