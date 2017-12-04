// @flow
/* eslint-disable */
import type { Observable } from 'rxjs';

declare var module: {
    hot: { accept(path: string, callback: () => void): void; }
};

declare var document: {
    getElementById: (string) => any
};

declare module 'custom-applib' {
    declare type Action = {
        type: string
    }

    declare type Epic = (Observable<Action>, any, args: any) => Observable;
}
