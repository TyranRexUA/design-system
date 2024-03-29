import { FC } from 'react';
export interface IStaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}
export declare type IStory<T> = FC<T> & {
    args?: T;
};
