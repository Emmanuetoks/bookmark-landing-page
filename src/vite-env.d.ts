/// <reference types="vite/client" />
export type Props = {
    addtoRef: (el:HTMLDivElement & never) => void
    children?: React.ReactNode
}