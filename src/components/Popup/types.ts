import { PropsWithChildren } from 'react';

export type PopupProps = PropsWithChildren<{
    visible: boolean;
    confirmText1?: string;
    confirmText2?: string;
    title?: string;
    onConfirm1?: () => void; 
    onConfirm2?: () => void;
    onCancel:() =>void;
    img?: string;
}>;
