import React from 'react';

const TruncateString = ({ text, maxLength }) => {
  if (!text) {
    return null;
  }

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  } else {
    const truncatedText = text.substring(0, maxLength) + '...';
    return (
      <span title={text}> {/* Use the title attribute to display the full text on hover */}
        {truncatedText}
      </span>
    );
  }
};

export default TruncateString;
