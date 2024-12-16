import { PropsWithChildren } from 'react';

export type PopupProps = PropsWithChildren<{
    visible: boolean;
    confirmTextLeft?: string;
    confirmTextRight?: string;
    title?: string;
    img?: string;
    onConfirmLeft?: () => void;
    onConfirmRight?: () => void;
    onCancel: () => void;
}>;
