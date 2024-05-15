// src/ReadmeViewer.jsx
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const ReadmeViewer = ({ owner, packageData }) => {
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('package data is => ', packageData);
    if (!packageData) return;
    const repo = packageData.repository.split('/').pop().split('.')[0]
    const fetchReadme = async () => {
      const url = `https://api.github.com/repos/${owner}/${repo}/readme`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch README: ${response.statusText}`);
        }

        const data = await response.json();
        const decodedContent = atob(data.content);
        const parsedMarkdown = marked(decodedContent);

        // Sanitize the parsed Markdown to prevent XSS attacks
        const sanitizedHTML = DOMPurify.sanitize(parsedMarkdown);

        setReadmeContent(sanitizedHTML);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReadme();
  }, [owner, packageData]); // Re-run when owner or repo changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: readmeContent }} />
  );
};

export default ReadmeViewer;