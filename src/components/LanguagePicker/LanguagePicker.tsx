import { Popover, UnstyledButton } from '@mantine/core';
import { IconWorld } from '@tabler/icons-react';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from '../TopBar/TopBar.module.css';

interface LanguagePickerProps {
  availableLanguages: { label: string; value: string }[];
  handlePickLanguage: (language: string) => void;
}

export function LanguagePicker({ availableLanguages, handlePickLanguage }: LanguagePickerProps) {
  const [opened, setOpened] = useState(false);
  const { t } = useTranslation();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (opened && listRef.current) {
      buttonRefs.current[focusedIndex]?.focus();
    }
  }, [opened, focusedIndex]);

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowDown') {
      setFocusedIndex((prev) => (prev + 1) % availableLanguages.length);
    } else if (event.key === 'ArrowUp') {
      setFocusedIndex((prev) => (prev - 1 + availableLanguages.length) % availableLanguages.length);
    } else if (event.key === 'Enter') {
      handlePickLanguage(availableLanguages[focusedIndex].value);
      setOpened(false);
    } else if (event.key === 'Escape') {
      setOpened(false);
    }
  };

  return (
    <Popover
      width={200}
      position="bottom"
      withArrow
      shadow="md"
      opened={opened}
      onChange={setOpened}
    >
      <Popover.Target>
        <UnstyledButton
          aria-label={t('choose language')}
          size="md"
          onClick={() => setOpened((o) => !o)}
        >
          <IconWorld />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown className={classes.languageListDropdown}>
        <ul className={classes.languageList} role="menu" ref={listRef} onKeyDown={handleKeyDown}>
          {availableLanguages.map((language, index) => (
            <li key={language.value}>
              <UnstyledButton
                ref={(el) => (buttonRefs.current[index] = el)}
                className={classes.languageListItem}
                tabIndex={0}
                onClick={() => {
                  handlePickLanguage(language.value);
                  setOpened(false);
                }}
                onFocus={() => setFocusedIndex(index)}
                aria-label={language.label}
              >
                {language.label}
              </UnstyledButton>
            </li>
          ))}
        </ul>
      </Popover.Dropdown>
    </Popover>
  );
}
