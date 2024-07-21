import { ReactNode } from "react";

export interface ChildrenType {
    children: ReactNode
}

export interface CustomCardProps {
    imageUrl: string,
    title: string,
    desc: string
}