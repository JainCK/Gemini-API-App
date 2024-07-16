
import React, { useState } from 'react';

const CodeCopyPaste = () => {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        rows={10}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      />
      <button
        onClick={handleCopy}
        className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
};

export default CodeCopyPaste;
