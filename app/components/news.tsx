import React from 'react';
import Link from 'next/link';

const KnowledgeBaseLink: React.FC = () => {
    return (
        <Link legacyBehavior href="/blog/knowledge-base">
            <a style={{ marginBottom: '16px' }} className="block">
                <div
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-black rounded-full w-fit mx-auto shadow mt-10"
                    style={{ backgroundColor: '#181818' }} // Black background
                >
                    {/* News tag */}
                    <div
                        style={{ background: '#ffcb47', color: '#000' }}
                        className="flex justify-center items-center px-2 py-1 rounded"
                    >
                        News
                    </div>

                    {/* Knowledge base description */}
                    <div className="text-neutral-100 text-center text-sm font-medium whitespace-nowrap overflow-hidden">
                        LobeChat Knowledge Base Launch — From Now On, Every Step Counts
                    </div>

                    {/* Right arrow icon */}
                    <span role="img">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right text-neutral-100"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
                </div>
            </a>
        </Link>
    );
};

export default KnowledgeBaseLink;
