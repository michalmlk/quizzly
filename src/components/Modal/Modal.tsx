import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Group, Modal as MantineModal, Text } from '@mantine/core';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onAccept: () => void;
  onClose: () => void;
  withCloseButton?: boolean;
}

export const Modal = ({ isOpen, children, onClose, onAccept, title, withCloseButton = false }: ModalProps) => {
  const { t } = useTranslation();

  return (
    <MantineModal opened={isOpen} onClose={onClose} withCloseButton={withCloseButton} centered>
      <Text fw={700} fz='xl'>{title}</Text>
      {children}
      <Group mt="xl" justify="space-between">
        <Button onClick={onClose} variant='outline'>{t('button cancel')}</Button>
        <Button
          onClick={() => {
            onAccept();
            onClose();
          }}
        >
          {t('button confirm')}
        </Button>
      </Group>
    </MantineModal>
  );
};
