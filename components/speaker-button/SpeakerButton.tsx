'use client';

import styles from './SpeakerButton.module.scss';

type SpeakerButtonProps = {
  word: string;
  speechText?: string;
  buttonLabel?: string;
};

export function SpeakerButton({
  word,
  speechText,
  buttonLabel,
}: SpeakerButtonProps) {
  const handleSpeak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(speechText ?? word);
    utterance.lang = 'cs-CZ';

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      type="button"
      className={styles.button}
      aria-label={buttonLabel ?? `Spreek ${word} uit`}
      onClick={handleSpeak}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.5 6.25H6L9.25 3.75V12.25L6 9.75H3.5V6.25Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path
          d="M11 6C11.6 6.5 12 7.2 12 8C12 8.8 11.6 9.5 11 10"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M12.5 4.75C13.45 5.6 14 6.72 14 8C14 9.28 13.45 10.4 12.5 11.25"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
