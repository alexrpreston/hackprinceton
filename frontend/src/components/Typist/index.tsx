import React, { useState, useEffect } from 'react';

import { Text } from '@chakra-ui/react';

interface Props {
  text: string;
}

const Typist: React.FC<Props> = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // useEffect loop with no repeat, and a beginning delay of 1 second
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (currentIndex < text.length) {
          setIsTyping(true);
          setCurrentText(currentText + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsTyping(false);
        }
      },
      isTyping ? 100 : 1000,
    );

    return () => clearInterval(interval);
  }, [currentIndex, currentText, isTyping, text]);

  if (!isTyping && currentText === '') {
    return null;
  }

  return <Text>{isTyping ? currentText : text}</Text>;
};

export default Typist;
